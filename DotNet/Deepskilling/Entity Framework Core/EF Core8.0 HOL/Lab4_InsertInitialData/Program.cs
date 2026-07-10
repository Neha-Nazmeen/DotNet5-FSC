using RetailInventory.Lab4.Data;
using RetailInventory.Lab4.Models;

// ============================================================================
// Lab 4: Inserting Initial Data into the Database
// ----------------------------------------------------------------------------
// Uses AddRangeAsync + SaveChangesAsync to insert starter categories and
// items. Run Lab 3's migrations first so the tables exist.
// ============================================================================

Console.WriteLine("Lab 4 - Inserting Initial Data\n");

using var storeContext = new StoreDbContext();

var categoryHomeAppliances = new ProductCategory { CategoryTitle = "Home Appliances" };
var categoryBeverages = new ProductCategory { CategoryTitle = "Beverages" };

await storeContext.ProductCategories.AddRangeAsync(categoryHomeAppliances, categoryBeverages);

var itemWirelessMouse = new InventoryItem
{
    ItemName = "Wireless Mouse",
    UnitPrice = 1499m,
    Category = categoryHomeAppliances
};

var itemGreenTeaPack = new InventoryItem
{
    ItemName = "Green Tea Pack",
    UnitPrice = 350m,
    Category = categoryBeverages
};

await storeContext.InventoryItems.AddRangeAsync(itemWirelessMouse, itemGreenTeaPack);

var rowsWritten = await storeContext.SaveChangesAsync();

Console.WriteLine($"Saved {rowsWritten} new record(s):");
Console.WriteLine($"  - Category: {categoryHomeAppliances.CategoryTitle} (Id={categoryHomeAppliances.CategoryId})");
Console.WriteLine($"  - Category: {categoryBeverages.CategoryTitle} (Id={categoryBeverages.CategoryId})");
Console.WriteLine($"  - Item: {itemWirelessMouse.ItemName} - Rs.{itemWirelessMouse.UnitPrice}");
Console.WriteLine($"  - Item: {itemGreenTeaPack.ItemName} - Rs.{itemGreenTeaPack.UnitPrice}");

Console.WriteLine("\nOpen SQL Server Management Studio / Azure Data Studio to verify the rows.");
