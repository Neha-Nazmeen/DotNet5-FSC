using Microsoft.EntityFrameworkCore;
using RetailInventory.Lab3.Data;

// ============================================================================
// Lab 3: Using EF Core CLI to Create and Apply Migrations
// ----------------------------------------------------------------------------
// This project reuses the Lab 2 models/context. Run the migration commands
// below BEFORE running this app, then run it to confirm the tables exist.
// See README.md in this folder for the full step-by-step CLI walkthrough.
// ============================================================================

Console.WriteLine("Lab 3 - Migrations CLI\n");

using var storeContext = new StoreDbContext();

var pendingMigrations = (await storeContext.Database.GetPendingMigrationsAsync()).ToList();
var appliedMigrations = (await storeContext.Database.GetAppliedMigrationsAsync()).ToList();

Console.WriteLine($"Applied migrations ({appliedMigrations.Count}):");
foreach (var m in appliedMigrations)
    Console.WriteLine($"  - {m}");

Console.WriteLine($"\nPending migrations ({pendingMigrations.Count}):");
foreach (var m in pendingMigrations)
    Console.WriteLine($"  - {m}");

if (pendingMigrations.Count > 0)
{
    Console.WriteLine("\nRun 'dotnet ef database update' to apply the pending migrations.");
}
else if (appliedMigrations.Count == 0)
{
    Console.WriteLine("\nNo migrations found yet. Run:");
    Console.WriteLine("  dotnet ef migrations add InitialCreate");
    Console.WriteLine("  dotnet ef database update");
}
else
{
    Console.WriteLine("\nDatabase schema is up to date.");
}
