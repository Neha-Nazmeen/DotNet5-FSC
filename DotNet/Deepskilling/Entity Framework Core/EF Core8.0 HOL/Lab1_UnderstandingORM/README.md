# Lab 1 – Understanding ORM with a Retail Inventory System

## Scenario
You're building an inventory management system for a retail store that needs
to track products, categories, and stock levels in a SQL Server database.

## Objective
Understand what ORM (Object-Relational Mapping) is and how EF Core 8 bridges
the gap between C# objects and relational database tables.

## What's in this folder
This lab is conceptual, so there's no database code yet. `Program.cs` prints
an explanation of:

1. What ORM is and how it maps C# classes to SQL tables
2. EF Core vs. the older EF Framework (EF6)
3. What's new in EF Core 8.0 (JSON columns, compiled models, interceptors, bulk ops)
4. The CLI commands used to scaffold this console project

The `.csproj` already references the two packages this lab installs:
- `Microsoft.EntityFrameworkCore.SqlServer`
- `Microsoft.EntityFrameworkCore.Design`

## How to run

```bash
cd Lab1_UnderstandingORM
dotnet restore
dotnet run
```

You should see the ORM explanation printed to the console.

## Next step
Move on to **Lab 2 – Setting Up the Database Context**, where the actual
`ProductCategory` / `InventoryItem` models and `StoreDbContext` are created.
