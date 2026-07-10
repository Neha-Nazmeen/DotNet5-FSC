using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using RetailInventory.Lab4.Models;

namespace RetailInventory.Lab4.Data;

/// <summary>
/// EF Core database context for the retail inventory system.
/// The connection string is read from appsettings.json instead of being
/// hardcoded, so it's safe to commit this project to GitHub.
/// </summary>
public class StoreDbContext : DbContext
{
    public DbSet<ProductCategory> ProductCategories => Set<ProductCategory>();
    public DbSet<InventoryItem> InventoryItems => Set<InventoryItem>();

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(AppContext.BaseDirectory)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .Build();

            var connectionString = config.GetConnectionString("StoreDatabase");
            optionsBuilder.UseSqlServer(connectionString);
        }
    }
}
