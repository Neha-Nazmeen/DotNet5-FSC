using System;
using System.Threading.Tasks;
using Confluent.Kafka;

namespace ChatProducer
{
    // Hands-on 6 - console Kafka producer for the chat app.
    class Program
    {
        private const string BootstrapServers = "localhost:9092";
        private const string Topic = "chat-topic";

        static async Task Main(string[] args)
        {
            Console.Write("Enter your username: ");
            string username = Console.ReadLine();

            var config = new ProducerConfig { BootstrapServers = BootstrapServers };

            using var producer = new ProducerBuilder<Null, string>(config).Build();

            Console.WriteLine("Connected. Type a message and press Enter to send (type 'exit' to quit).");

            string message;
            while ((message = Console.ReadLine()) != "exit")
            {
                string payload = $"{username}: {message}";
                try
                {
                    var result = await producer.ProduceAsync(Topic, new Message<Null, string> { Value = payload });
                    Console.WriteLine($"Delivered '{result.Value}' to '{result.TopicPartitionOffset}'");
                }
                catch (ProduceException<Null, string> ex)
                {
                    Console.WriteLine($"Delivery failed: {ex.Error.Reason}");
                }
            }

            producer.Flush(TimeSpan.FromSeconds(5));
        }
    }
}
