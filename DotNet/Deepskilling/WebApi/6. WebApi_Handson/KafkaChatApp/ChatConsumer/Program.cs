using System;
using System.Threading;
using Confluent.Kafka;

namespace ChatConsumer
{
    // Hands-on 6 - console Kafka consumer for the chat app.
    class Program
    {
        private const string BootstrapServers = "localhost:9092";
        private const string Topic = "chat-topic";
        private const string GroupId = "chat-consumer-group";

        static void Main(string[] args)
        {
            var config = new ConsumerConfig
            {
                BootstrapServers = BootstrapServers,
                GroupId = GroupId,
                AutoOffsetReset = AutoOffsetReset.Earliest
            };

            using var consumer = new ConsumerBuilder<Ignore, string>(config).Build();
            consumer.Subscribe(Topic);

            Console.WriteLine("Listening for chat messages... (Ctrl+C to exit)");

            var cts = new CancellationTokenSource();
            Console.CancelKeyPress += (_, e) => { e.Cancel = true; cts.Cancel(); };

            try
            {
                while (true)
                {
                    var cr = consumer.Consume(cts.Token);
                    Console.WriteLine(cr.Message.Value);
                }
            }
            catch (OperationCanceledException)
            {
                consumer.Close();
            }
        }
    }
}
