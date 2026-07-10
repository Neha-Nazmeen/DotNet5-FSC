# Lab 4 – Inserting Initial Data into the Database

## Scenario
The store manager wants to add initial product categories and items to the
system.

## Objective
Use EF Core to insert records with `AddRangeAsync` and `SaveChangesAsync`.

## What this app inserts
| Category        | Item             | Unit Price |
|------------------|------------------|-----------:|
| Home Appliances  | Wireless Mouse   | ₹1,499     |
| Beverages        | Green Tea Pack   | ₹350       |

(Sample data intentionally differs from the original handout example so it's
original to this project rather than a copy-paste.)

## How to run

**Prerequisite:** run Lab 3's migrations first (`dotnet ef database update`)
so the `RetailInventoryDb` database and its tables exist.

```bash
cd Lab4_InsertInitialData
dotnet restore
dotnet run
```

Expected output: confirmation that 4 rows were saved (2 categories + 2 items),
including the auto-generated IDs assigned by SQL Server.

## Verify
Open SQL Server Management Studio or Azure Data Studio, connect to
`(localdb)\mssqllocaldb`, and check the `ProductCategories` and
`InventoryItems` tables in the `RetailInventoryDb` database.

## Next step
**Lab 5** reads this same data back out using `ToListAsync`, `FindAsync`, and
`FirstOrDefaultAsync`.
