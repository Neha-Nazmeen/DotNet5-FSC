using RetailInventory.Lab2.Data;

// ============================================================================
// Lab 2: Setting Up the Database Context for a Retail Store
// ----------------------------------------------------------------------------
// This lab configures StoreDbContext and confirms it can connect to SQL
// Server (LocalDB by default). The connection string lives in
// appsettings.json rather than being hardcoded, so it's safe for GitHub.
// ============================================================================

Console.WriteLine("Lab 2 - Database Context Setup\n");

using var storeContext = new StoreDbContext();

Console.WriteLine("Checking connection to SQL Server (LocalDB)...");

bool canConnect = await storeContext.Database.CanConnectAsync();

if (canConnect)
{
    Console.WriteLine("Connected successfully. The database already exists.");
}
else
{
    Console.WriteLine("No existing database found yet - that's expected.");
    Console.WriteLine("Run 'dotnet ef migrations add InitialCreate' and");
    Console.WriteLine("'dotnet ef database update' (see Lab 3) to create it.");
}

Console.WriteLine("\nDbContext is configured with the following DbSets:");
Console.WriteLine($"  - {nameof(storeContext.ProductCategories)}");
Console.WriteLine($"  - {nameof(storeContext.InventoryItems)}");
