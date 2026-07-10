using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using WebApiHandson.Models;

namespace WebApiHandson.Controllers
{
    // NOTE (Hands-on 2, step 3): The controller route was changed from
    // "api/Employee" to "api/Emp" - verified through POSTMAN that the
    // API is now only reachable at the new route.
    [Route("api/Emp")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private static readonly List<Employee> _employees = new List<Employee>
        {
            new Employee { Id = 1, Name = "Alice" },
            new Employee { Id = 2, Name = "Bob" },
            new Employee { Id = 3, Name = "Charlie" }
        };

        // GET: api/Emp
        // Friendly name given via Name attribute so the route can be referenced elsewhere (e.g. CreatedAtRoute)
        [HttpGet(Name = "GetAllEmployees")]
        public ActionResult<IEnumerable<Employee>> Get()
        {
            return Ok(_employees);
        }

        // GET: api/Emp/5
        // ActionName demonstrates how a second method can share the HttpGet verb
        // while exposing a distinct, user-friendly action name (useful when a
        // controller needs more than one method mapped to the same verb).
        [HttpGet("{id}")]
        [ActionName("GetEmployeeById")]
        public ActionResult<Employee> Get(int id)
        {
            var employee = _employees.Find(e => e.Id == id);
            if (employee == null)
            {
                return NotFound();
            }
            return Ok(employee);
        }
    }
}
