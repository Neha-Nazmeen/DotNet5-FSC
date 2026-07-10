using Microsoft.EntityFrameworkCore;
using RetailInventory.Lab5.Data;

// ============================================================================
// Lab 5: Retrieving Data from the Database
// ----------------------------------------------------------------------------
// Demonstrates ToListAsync, FindAsync, and FirstOrDefaultAsync against the
// data inserted in Lab 4.
// ============================================================================

Console.WriteLine("Lab 5 - Retrieving Data\n");

using var storeContext = new StoreDbContext();

// 1. Retrieve all items
Console.WriteLine("All inventory items:");
var allItems = await storeContext.InventoryItems.ToListAsync();

if (allItems.Count == 0)
{
    Console.WriteLine("  (none found - run Lab 4 first to insert sample data)");
}
else
{
    foreach (var item in allItems)
        Console.WriteLine($"  {item.ItemName} - Rs.{item.UnitPrice}");
}

// 2. Find by primary key
Console.WriteLine("\nLookup by Id=1 using FindAsync:");
var itemById = await storeContext.InventoryItems.FindAsync(1);
Console.WriteLine($"  Found: {itemById?.ItemName ?? "(no item with Id=1)"}");

// 3. FirstOrDefault with a condition
Console.WriteLine("\nFirst item priced above Rs.1000:");
var premiumItem = await storeContext.InventoryItems
    .FirstOrDefaultAsync(item => item.UnitPrice > 1000m);

Console.WriteLine($"  Found: {premiumItem?.ItemName ?? "(no matching item)"}");
