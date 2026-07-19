namespace JwtAuthDemo.Models
{
    /// <summary>
    /// Simple user model. In a real application this would map to a database table
    /// and passwords would be stored using a proper hash (e.g. BCrypt/PBKDF2), never in plain text.
    /// </summary>
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty; // Plain text for demo purposes only
        public string Role { get; set; } = "User";
    }
}
