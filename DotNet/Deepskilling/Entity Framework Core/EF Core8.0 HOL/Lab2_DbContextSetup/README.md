# Lab 2 – Setting Up the Database Context for a Retail Store

## Scenario
The retail store wants to store product and category data in SQL Server.

## Objective
Configure `DbContext` and connect to SQL Server.

## What's in this folder
- `Models/ProductCategory.cs` – category entity (`CategoryId`, `CategoryTitle`, related items)
- `Models/InventoryItem.cs` – product entity (`ItemId`, `ItemName`, `UnitPrice`, category link)
- `Data/StoreDbContext.cs` – the EF Core `DbContext`, with `ProductCategories`
  and `InventoryItems` as `DbSet`s
- `appsettings.json` – holds the SQL Server connection string (LocalDB by default)

### Why the connection string is in `appsettings.json`
The lab handout shows the connection string hardcoded inside `OnConfiguring`.
Here it's read from `appsettings.json` instead, which is standard practice and
means:
- No credentials end up committed to Git history
- You can swap `(localdb)\mssqllocaldb` for a real server/Azure SQL string
  without touching code — just edit the JSON file

If you're pushing this to GitHub for a real project, put real credentials in
[.NET User Secrets](https://learn.microsoft.com/aspnet/core/security/app-secrets)
or environment variables instead of `appsettings.json`.

## How to run

```bash
cd Lab2_DbContextSetup
dotnet restore
dotnet run
```

The app will report whether it can already connect to a `RetailInventoryDb`
database. On a fresh machine it won't exist yet — that's expected, and is
fixed in **Lab 3** by running migrations.

## Prerequisites
- .NET 8 SDK
- SQL Server LocalDB (installed with Visual Studio, or via the
  [SQL Server Express/LocalDB installer](https://learn.microsoft.com/sql/database-engine/configure-windows/sql-server-express-localdb))
