# 6. WebApi Handson — Kafka Chat Application

A messaging/chat app built on Apache Kafka: a console **producer**, a console **consumer**, and a **WinForms** GUI client that does both at once.

## Solution layout
```
6. WebApi_Handson/
└── KafkaChatApp/
    ├── ChatProducer/          console app - sends chat messages to Kafka
    ├── ChatConsumer/          console app - prints incoming chat messages
    └── ChatClientWinForms/    Windows Forms GUI chat client (net6.0-windows)
```

All three use `Confluent.Kafka` against topic `chat-topic`.

## 1. Install & start Kafka (local, Windows)
1. Install **Java 8+** (Kafka requires a JRE).
2. Download Kafka from https://kafka.apache.org/downloads and extract it, e.g. `C:\kafka`.
3. Start Zookeeper:
   ```
   cd C:\kafka
   .\bin\windows\zookeeper-server-start.bat .\config\zookeeper.properties
   ```
4. In a new terminal, start the Kafka broker:
   ```
   .\bin\windows\kafka-server-start.bat .\config\server.properties
   ```
5. Create the topic:
   ```
   .\bin\windows\kafka-topics.bat --create --topic chat-topic --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1
   ```
   (Linux/Mac: use the scripts under `bin/` instead of `bin/windows/`.)

## 2. Run the apps
```bash
cd KafkaChatApp/ChatProducer
dotnet restore
dotnet run
```
```bash
cd KafkaChatApp/ChatConsumer
dotnet restore
dotnet run
```
For the WinForms client (Windows only):
```
cd KafkaChatApp\ChatClientWinForms
dotnet restore
dotnet run
```
Run two or more instances of `ChatClientWinForms` (or mix with the console producer/consumer) to chat between them — each sent message shows up in every running client's log.

## Notes
- `BootstrapServers` is hardcoded to `localhost:9092` in each app — change it if your broker runs elsewhere.
- The WinForms consumer uses a unique `GroupId` per instance so every open client receives every message (rather than Kafka load-balancing messages across a shared consumer group).
- This project could not be compiled/run in the sandbox that generated it (no Kafka broker, no Windows Forms/.NET SDK available there) — please build & test it in your local Visual Studio/`dotnet` environment.
