namespace JwtAuthDemo.Models
{
    /// <summary>
    /// In-memory "database" of users, purely for demonstration purposes.
    /// Replace this with a real data store (EF Core + a proper DB) in production,
    /// and never keep passwords in plain text - use a hashing algorithm instead.
    /// </summary>
    public static class UserStore
    {
        public static readonly List<User> Users = new()
        {
            new User { Id = 1, Username = "admin", Password = "Admin@123", Role = "Admin" },
            new User { Id = 2, Username = "john", Password = "John@123", Role = "User" }
        };

        public static User? Validate(string username, string password)
        {
            return Users.FirstOrDefault(u =>
                u.Username.Equals(username, StringComparison.OrdinalIgnoreCase) &&
                u.Password == password);
        }
    }
}
