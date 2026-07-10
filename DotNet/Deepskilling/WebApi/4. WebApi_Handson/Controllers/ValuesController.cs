using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace WebApiHandson.Controllers
{
    // Controller inherits from ControllerBase (ApiController base for Web API in .NET Core)
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET: api/Values
        // HttpGet action verb - Read operation
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST: api/Values
        // HttpPost action verb - Write operation
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Values/5
        // HttpPut action verb - Write operation
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Values/5
        // HttpDelete action verb - Write operation
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
