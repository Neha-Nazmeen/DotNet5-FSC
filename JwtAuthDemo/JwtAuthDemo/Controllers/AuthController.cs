using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using JwtAuthDemo.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace JwtAuthDemo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public AuthController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        /// <summary>
        /// Authenticates a user and, if valid, returns a signed JWT.
        /// POST api/auth/login
        /// </summary>
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginModel model)
        {
            var user = IsValidUser(model);
            if (user != null)
            {
                var token = GenerateJwtToken(user);
                return Ok(new
                {
                    Token = token,
                    ExpiresInMinutes = Convert.ToDouble(_configuration["Jwt:DurationInMinutes"])
                });
            }

            return Unauthorized(new { Message = "Invalid username or password." });
        }

        private static User? IsValidUser(LoginModel model)
        {
            return UserStore.Validate(model.Username, model.Password);
        }

        private string GenerateJwtToken(User user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.Role, user.Role),
                new Claim(JwtRegisteredClaimNames.Sub, user.Username),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]!));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var durationInMinutes = Convert.ToDouble(_configuration["Jwt:DurationInMinutes"]);

            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(durationInMinutes),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
