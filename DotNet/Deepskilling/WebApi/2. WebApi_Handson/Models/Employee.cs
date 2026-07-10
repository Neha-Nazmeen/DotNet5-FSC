namespace WebApiHandson.Models
{
    // Basic version of the Employee model used for the Swagger/Postman demo in Hands-on 2.
    // This is extended into the full custom model class (with Department, Skills, etc.)
    // in Hands-on 3 ("Web Api using custom model class").
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
