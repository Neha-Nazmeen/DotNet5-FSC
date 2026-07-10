// ============================================================================
// Lab 1: Understanding ORM with a Retail Inventory System
// ----------------------------------------------------------------------------
// This lab has no database code yet — its purpose is conceptual. It sets up
// the console project and EF Core package references that Lab 2 onward will
// build on, and walks through what ORM is and why EF Core 8 is used for it.
// ============================================================================

Console.WriteLine("=====================================================");
Console.WriteLine(" Lab 1 - Understanding ORM (Object-Relational Mapping)");
Console.WriteLine("=====================================================\n");

PrintSection("1. What is ORM?", new[]
{
    "ORM (Object-Relational Mapping) lets you work with a relational database",
    "using ordinary C# classes and objects instead of writing raw SQL.",
    "",
    "Example mapping used across these labs:",
    "  - The 'ProductCategory' C# class  <-->  a 'ProductCategories' SQL table",
    "  - The 'InventoryItem' C# class    <-->  an 'InventoryItems' SQL table",
    "  - Each property (Id, Name, Price) <-->  a column in that table",
    "",
    "Benefits of using an ORM like EF Core:",
    "  - Productivity   : no hand-written INSERT/UPDATE/SELECT statements",
    "  - Maintainability: schema changes are tracked as C# code (migrations)",
    "  - Abstraction    : the same C# code can target SQL Server, SQLite, etc."
});

PrintSection("2. EF Core vs EF Framework (EF6)", new[]
{
    "EF Core:",
    "  - Cross-platform (Windows, Linux, macOS)",
    "  - Lightweight and modular (install only the providers you need)",
    "  - Supports LINQ queries, async/await, and compiled queries",
    "",
    "EF Framework (EF6):",
    "  - Windows-only, tied to the full .NET Framework",
    "  - Mature and stable, but heavier and less flexible",
    "  - No longer the recommended choice for new projects"
});

PrintSection("3. What's new in EF Core 8.0", new[]
{
    "  - Native JSON column mapping (store complex types as JSON columns)",
    "  - Compiled models for faster application startup",
    "  - Interceptors for hooking into query/command execution",
    "  - Better support for bulk update/delete operations"
});

PrintSection("4. Project setup commands used for this lab", new[]
{
    "  dotnet new console -n Lab1_UnderstandingORM",
    "  cd Lab1_UnderstandingORM",
    "  dotnet add package Microsoft.EntityFrameworkCore.SqlServer",
    "  dotnet add package Microsoft.EntityFrameworkCore.Design",
    "",
    "(Both packages are already referenced in this project's .csproj file.)"
});

Console.WriteLine("Lab 1 complete. Continue to Lab 2 to configure the DbContext.\n");

static void PrintSection(string title, string[] lines)
{
    Console.WriteLine(title);
    Console.WriteLine(new string('-', title.Length));
    foreach (var line in lines)
        Console.WriteLine(line);
    Console.WriteLine();
}
