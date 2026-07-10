# Lab 5 – Retrieving Data from the Database

## Scenario
The store wants to display product details on a dashboard.

## Objective
Use `ToListAsync`, `FindAsync`, and `FirstOrDefaultAsync` to retrieve data.

## What this app does
1. **`ToListAsync`** – loads every row from `InventoryItems`
2. **`FindAsync(1)`** – looks up the item with primary key `Id = 1` (the
   first item inserted in Lab 4)
3. **`FirstOrDefaultAsync`** – finds the first item priced above ₹1,000

## How to run

**Prerequisite:** run Lab 4 first so there's data to read.

```bash
cd Lab5_RetrievingData
dotnet restore
dotnet run
```

Expected output: a list of all inventory items, the item found by Id, and the
first item over ₹1,000 (the "Wireless Mouse" from Lab 4's sample data).

## Notes
This project points at the same `RetailInventoryDb` LocalDB database used in
Labs 2–4 (see `appsettings.json`), so it reads the exact rows Lab 4 inserted.
