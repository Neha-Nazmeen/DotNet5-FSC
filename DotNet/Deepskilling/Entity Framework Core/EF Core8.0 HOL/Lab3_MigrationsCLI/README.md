# Lab 3 – Using EF Core CLI to Create and Apply Migrations

## Scenario
The retail store's database needs to be created from the models defined in
Lab 2. This lab uses the EF Core CLI to generate and apply migrations.

## Objective
Learn how to use the EF Core CLI to manage database schema changes.

## Steps

### 1. Install the EF Core CLI tool (once per machine)
```bash
dotnet tool install --global dotnet-ef
```
If it's already installed, update it instead:
```bash
dotnet tool update --global dotnet-ef
```

### 2. Restore this project
```bash
cd Lab3_MigrationsCLI
dotnet restore
```

### 3. Create the initial migration
```bash
dotnet ef migrations add InitialCreate
```
This generates a `Migrations/` folder containing C# code that represents the
`ProductCategories` and `InventoryItems` tables.

### 4. Apply the migration to create the database
```bash
dotnet ef database update
```
This creates the `RetailInventoryDb` database in LocalDB (connection string
comes from `appsettings.json`).

### 5. Verify
```bash
dotnet run
```
The console output will list applied vs. pending migrations. You can also
open **SQL Server Management Studio** or **Azure Data Studio**, connect to
`(localdb)\mssqllocaldb`, and confirm the `ProductCategories` and
`InventoryItems` tables exist.

## Notes
- This project reuses the same `ProductCategory` / `InventoryItem` models and
  `StoreDbContext` introduced in Lab 2 (namespace renamed to `Lab3` to keep
  each lab folder self-contained and independently runnable).
- All labs from here on share the same `RetailInventoryDb` database name, so
  data inserted in Lab 4 will still be there when you query it in Lab 5.
