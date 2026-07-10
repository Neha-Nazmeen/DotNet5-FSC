using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApiHandson.Models;

namespace WebApiHandson.Controllers
{
    [Route("api/Emp")]
    [ApiController]
    [Authorize(Roles = "POC,Admin")] // Hands-on 5, task 2 - replaced CustomAuthFilter with JWT [Authorize]
    public class EmployeeController : ControllerBase
    {
        private readonly List<Employee> _employees;

        public EmployeeController()
        {
            // Constructor - create a few hardcoded records
            _employees = GetStandardEmployeeList();
        }

        // Private method that returns the standard/seed list of employees.
        private List<Employee> GetStandardEmployeeList()
        {
            return new List<Employee>
            {
                new Employee
                {
                    Id = 1,
                    Name = "Alice",
                    Salary = 75000,
                    Permanent = true,
                    Department = new Department { Id = 1, Name = "Engineering" },
                    Skills = new List<Skill> { new Skill { Id = 1, Name = "C#" }, new Skill { Id = 2, Name = "SQL" } },
                    DateOfBirth = new DateTime(1990, 4, 12)
                },
                new Employee
                {
                    Id = 2,
                    Name = "Bob",
                    Salary = 62000,
                    Permanent = false,
                    Department = new Department { Id = 2, Name = "QA" },
                    Skills = new List<Skill> { new Skill { Id = 3, Name = "Selenium" } },
                    DateOfBirth = new DateTime(1988, 11, 2)
                },
                new Employee
                {
                    Id = 3,
                    Name = "Charlie",
                    Salary = 88000,
                    Permanent = true,
                    Department = new Department { Id = 1, Name = "Engineering" },
                    Skills = new List<Skill> { new Skill { Id = 1, Name = "C#" }, new Skill { Id = 4, Name = "Azure" } },
                    DateOfBirth = new DateTime(1985, 7, 23)
                }
            };
        }

        // GET: api/Emp
        // Returns the List<Employee>, decorated for success status code 200 in Swagger.
        [HttpGet]
        [ProducesResponseType(typeof(List<Employee>), StatusCodes.Status200OK)]
        public ActionResult<List<Employee>> Get()
        {
            return Ok(_employees);
        }

        // GET: api/Emp/5
        [HttpGet("{id}")]
        [ProducesResponseType(typeof(Employee), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<Employee> Get(int id)
        {
            var employee = _employees.FirstOrDefault(e => e.Id == id);
            if (employee == null)
            {
                return NotFound();
            }
            return Ok(employee);
        }

        // GET: api/Emp/throw-error
        // Hands-on 3, task 3 - dedicated endpoint used to demonstrate the CustomExceptionFilter.
        [HttpGet("throw-error")]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<Employee> GetWithException()
        {
            throw new InvalidOperationException("Simulated failure to demonstrate CustomExceptionFilter.");
        }

        // POST: api/Emp
        // FromBody attribute - read the model object from the request body rather than the query string.
        [HttpPost]
        [ProducesResponseType(typeof(Employee), StatusCodes.Status201Created)]
        public ActionResult<Employee> Post([FromBody] Employee employee)
        {
            _employees.Add(employee);
            return CreatedAtAction(nameof(Get), new { id = employee.Id }, employee);
        }
        // PUT: api/Emp/5
        // Hands-on 4 - CRUD update: validate id, return 400 if invalid/not found, else update & return the employee.
        [HttpPut("{id}")]
        [ProducesResponseType(typeof(Employee), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Employee> Put(int id, [FromBody] Employee updatedEmployee)
        {
            if (id <= 0)
            {
                return BadRequest("Invalid employee id");
            }

            var existing = _employees.FirstOrDefault(e => e.Id == id);
            if (existing == null)
            {
                return BadRequest("Invalid employee id");
            }

            existing.Name = updatedEmployee.Name;
            existing.Salary = updatedEmployee.Salary;
            existing.Permanent = updatedEmployee.Permanent;
            existing.Department = updatedEmployee.Department;
            existing.Skills = updatedEmployee.Skills;
            existing.DateOfBirth = updatedEmployee.DateOfBirth;

            return Ok(existing);
        }

        // DELETE: api/Emp/5
        // Hands-on 4 - CRUD delete.
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult Delete(int id)
        {
            var existing = _employees.FirstOrDefault(e => e.Id == id);
            if (id <= 0 || existing == null)
            {
                return BadRequest("Invalid employee id");
            }

            _employees.Remove(existing);
            return Ok($"Employee {id} deleted");
        }
    }
}
