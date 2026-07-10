namespace RetailInventory.Lab5.Models;

/// <summary>
/// Represents a grouping of inventory items (e.g. "Home Appliances", "Beverages").
/// Maps to the "ProductCategories" table via EF Core conventions.
/// </summary>
public class ProductCategory
{
    public int CategoryId { get; set; }
    public string CategoryTitle { get; set; } = string.Empty;

    // Navigation property: one category has many inventory items
    public List<InventoryItem> InventoryItems { get; set; } = new();
}
