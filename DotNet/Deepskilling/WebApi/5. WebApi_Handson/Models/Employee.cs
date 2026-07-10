using System;
using System.Collections.Generic;

namespace WebApiHandson.Models
{
    // Custom model class - Hands-on 3 ("Web Api using custom model class")
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Salary { get; set; }
        public bool Permanent { get; set; }
        public Department Department { get; set; }
        public List<Skill> Skills { get; set; }
        public DateTime DateOfBirth { get; set; }
    }
}
