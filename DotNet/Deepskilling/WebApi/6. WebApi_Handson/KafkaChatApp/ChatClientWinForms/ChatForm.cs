using System;
using System.Threading;
using System.Windows.Forms;
using Confluent.Kafka;

namespace ChatClientWinForms
{
    // Hands-on 6 - WinForms chat client. Produces messages the user types
    // and consumes/displays messages from every client subscribed to the
    // same Kafka topic (including this client's own messages).
    public partial class ChatForm : Form
    {
        private const string BootstrapServers = "localhost:9092";
        private const string Topic = "chat-topic";

        private IProducer<Null, string> _producer;
        private CancellationTokenSource _cts;
        private Thread _consumerThread;

        public ChatForm()
        {
            InitializeComponent();
            this.Load += ChatForm_Load;
            this.FormClosing += ChatForm_FormClosing;
        }

        private void ChatForm_Load(object sender, EventArgs e)
        {
            txtUsername.Text = $"User{new Random().Next(1000, 9999)}";

            var producerConfig = new ProducerConfig { BootstrapServers = BootstrapServers };
            _producer = new ProducerBuilder<Null, string>(producerConfig).Build();

            _cts = new CancellationTokenSource();
            _consumerThread = new Thread(() => ConsumeLoop(_cts.Token)) { IsBackground = true };
            _consumerThread.Start();
        }

        private void ConsumeLoop(CancellationToken token)
        {
            var consumerConfig = new ConsumerConfig
            {
                BootstrapServers = BootstrapServers,
                GroupId = $"winforms-client-{Guid.NewGuid()}", // unique group so every client sees every message
                AutoOffsetReset = AutoOffsetReset.Latest
            };

            using var consumer = new ConsumerBuilder<Ignore, string>(consumerConfig).Build();
            consumer.Subscribe(Topic);

            try
            {
                while (!token.IsCancellationRequested)
                {
                    var cr = consumer.Consume(token);
                    AppendMessage(cr.Message.Value);
                }
            }
            catch (OperationCanceledException)
            {
                consumer.Close();
            }
        }

        private void AppendMessage(string message)
        {
            if (txtChatLog.InvokeRequired)
            {
                txtChatLog.Invoke(new Action(() => AppendMessage(message)));
                return;
            }
            txtChatLog.AppendText(message + Environment.NewLine);
        }

        private async void btnSend_Click(object sender, EventArgs e)
        {
            string message = txtMessage.Text.Trim();
            if (string.IsNullOrEmpty(message))
            {
                return;
            }

            string payload = $"{txtUsername.Text}: {message}";
            try
            {
                await _producer.ProduceAsync(Topic, new Message<Null, string> { Value = payload });
                txtMessage.Clear();
            }
            catch (ProduceException<Null, string> ex)
            {
                MessageBox.Show($"Failed to send: {ex.Error.Reason}", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private void ChatForm_FormClosing(object sender, FormClosingEventArgs e)
        {
            _cts?.Cancel();
            _producer?.Flush(TimeSpan.FromSeconds(2));
            _producer?.Dispose();
        }
    }
}
