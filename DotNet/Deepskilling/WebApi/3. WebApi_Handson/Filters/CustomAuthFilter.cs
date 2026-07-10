using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace WebApiHandson.Filters
{
    // Hands-on 3, task 2 - Custom action filter for Authorization.
    // Intercepts incoming requests and checks for an 'Authorization' header
    // that contains the word 'Bearer'.
    public class CustomAuthFilter : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            if (!context.HttpContext.Request.Headers.ContainsKey("Authorization"))
            {
                context.Result = new BadRequestObjectResult("Invalid request - No Auth token");
                return;
            }

            string authHeaderValue = context.HttpContext.Request.Headers["Authorization"];
            if (string.IsNullOrEmpty(authHeaderValue) || !authHeaderValue.Contains("Bearer"))
            {
                context.Result = new BadRequestObjectResult("Invalid request - Token present but Bearer unavailable");
                return;
            }

            base.OnActionExecuting(context);
        }
    }
}
