# EF Core 8.0 Retail Inventory Labs

Five standalone .NET 8 console apps that walk through EF Core 8 fundamentals
using a retail inventory scenario: product categories, items, migrations,
inserts, and queries.

Each lab is a **separate, independently runnable project** with its own
`.csproj`, so you can open just the folder you need in VS Code, or open the
whole `RetailInventoryLabs` root folder and navigate between them.

## Folder structure

```
RetailInventoryLabs/
├── Lab1_UnderstandingORM/     # ORM concepts, EF Core vs EF6, EF Core 8 features
├── Lab2_DbContextSetup/       # Models + DbContext, connects to SQL Server
├── Lab3_MigrationsCLI/        # dotnet ef migrations add / database update
├── Lab4_InsertInitialData/    # AddRangeAsync + SaveChangesAsync
├── Lab5_RetrievingData/       # ToListAsync, FindAsync, FirstOrDefaultAsync
├── .gitignore
└── README.md                  # you are here
```

## Prerequisites

- **.NET 8 SDK** — [download here](https://dotnet.microsoft.com/download/dotnet/8.0)
- **SQL Server LocalDB** — included with Visual Studio, or install standalone
  via the [SQL Server Express/LocalDB installer](https://learn.microsoft.com/sql/database-engine/configure-windows/sql-server-express-localdb)
- **EF Core CLI tool** (needed from Lab 3 onward):
  ```bash
  dotnet tool install --global dotnet-ef
  ```
- (Optional) SQL Server Management Studio or Azure Data Studio, to inspect the
  database visually

## Recommended run order

Run the labs in order — later labs depend on earlier ones:

1. **Lab 1** — read-only console output, no DB required
2. **Lab 2** — verifies the app can reach SQL Server
3. **Lab 3** — creates the actual database and tables via migrations
4. **Lab 4** — inserts sample categories/items
5. **Lab 5** — reads that data back out

For each lab:
```bash
cd LabX_FolderName
dotnet restore
dotnet run
```
(Lab 3 additionally needs `dotnet ef migrations add InitialCreate` and
`dotnet ef database update` — see that lab's own README for the full walkthrough.)

## About the connection string

All connected labs (2–5) read their SQL Server connection string from
`appsettings.json` rather than hardcoding it in C#:

```json
{
  "ConnectionStrings": {
    "StoreDatabase": "Server=(localdb)\\mssqllocaldb;Database=RetailInventoryDb;Trusted_Connection=True;MultipleActiveResultSets=true;TrustServerCertificate=True"
  }
}
```

This points at LocalDB by default, which requires no extra setup on Windows.
If you're targeting a different SQL Server instance (a shared dev server,
Azure SQL, Docker, etc.), just edit that one line in each lab's
`appsettings.json` — no code changes needed.

**Before pushing real credentials to GitHub:** don't put a real
username/password in `appsettings.json`. Use
[.NET User Secrets](https://learn.microsoft.com/aspnet/core/security/app-secrets)
or environment variables for anything beyond local LocalDB/Windows
Authentication.

## Naming note

Class and variable names (`ProductCategory`, `InventoryItem`, `StoreDbContext`,
sample data like "Wireless Mouse"/"Green Tea Pack", etc.) were deliberately
written fresh for this project rather than copied verbatim from the original
lab handout, while keeping the same learning objectives and EF Core APIs.

## Pushing to GitHub

```bash
cd RetailInventoryLabs
git init
git add .
git commit -m "EF Core 8 retail inventory labs 1-5"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

The included `.gitignore` keeps `bin/`, `obj/`, and IDE clutter out of the repo.
