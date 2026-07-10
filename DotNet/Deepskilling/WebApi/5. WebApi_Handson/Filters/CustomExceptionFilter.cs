using System;
using System.IO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace WebApiHandson.Filters
{
    // Hands-on 3, task 3 - Custom exception filter.
    // Catches exceptions occurring in the application, writes the detail to
    // a file and sets a friendly ExceptionResult on the response.
    public class CustomExceptionFilter : IExceptionFilter
    {
        private const string LogFilePath = "exception_log.txt";

        public void OnException(ExceptionContext context)
        {
            Exception exception = context.Exception;

            string logEntry = $"{DateTime.Now:yyyy-MM-dd HH:mm:ss} - {exception.GetType().Name}: {exception.Message}{Environment.NewLine}{exception.StackTrace}{Environment.NewLine}";

            try
            {
                File.AppendAllText(LogFilePath, logEntry);
            }
            catch
            {
                // Swallow file-logging errors so the exception handling itself never throws.
            }

            var exceptionResult = new ObjectResult(new
            {
                Message = "An unexpected error occurred.",
                Detail = exception.Message
            })
            {
                StatusCode = StatusCodes.Status500InternalServerError
            };

            context.Result = exceptionResult;
            context.ExceptionHandled = true;
        }
    }
}
