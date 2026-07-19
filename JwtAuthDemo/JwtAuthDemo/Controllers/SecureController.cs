using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JwtAuthDemo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SecureController : ControllerBase
    {
        /// <summary>
        /// A protected endpoint. Requires a valid JWT bearer token in the
        /// Authorization header, e.g. "Authorization: Bearer {token}".
        /// GET api/secure/data
        /// </summary>
        [HttpGet("data")]
        [Authorize]
        public IActionResult GetSecureData()
        {
            var username = User.Identity?.Name ?? "unknown";
            return Ok(new { Message = "This is protected data.", User = username });
        }
    }
}
