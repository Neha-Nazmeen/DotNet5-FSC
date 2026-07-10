namespace RetailInventory.Lab3.Models;

/// <summary>
/// Represents a single sellable product tracked in the store's inventory.
/// Maps to the "InventoryItems" table via EF Core conventions.
/// </summary>
public class InventoryItem
{
    public int ItemId { get; set; }
    public string ItemName { get; set; } = string.Empty;
    public decimal UnitPrice { get; set; }

    // Foreign key + navigation property back to ProductCategory
    public int CategoryId { get; set; }
    public ProductCategory? Category { get; set; }
}
