using System.ComponentModel.DataAnnotations;

namespace JwtAuthDemo.Models
{
    /// <summary>
    /// Request body for the login endpoint.
    /// </summary>
    public class LoginModel
    {
        [Required]
        public string Username { get; set; } = string.Empty;

        [Required]
        public string Password { get; set; } = string.Empty;
    }
}
