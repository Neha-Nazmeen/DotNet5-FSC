# 3. WebApi Handson — Custom model class & Custom filters

Builds on **2. WebApi_Handson**.

## Objectives covered
- Action method returning a list of a custom class entity (model class creation, `AllowAnonymous`, `HttpGet`)
- Usage of the `FromBody` attribute to read a model object from the request body
- Custom filters: `ActionFilterAttribute` / `OnActionExecuting` to intercept requests, and a custom exception filter

## What was done
1. **Custom model class** — created `Employee` (`Models/Employee.cs`) with `Id`, `Name`, `Salary`, `Permanent`, `Department`, `Skills`, `DateOfBirth`, plus supporting `Department` and `Skill` classes.
2. Rewrote `EmployeeController`:
   - Constructor seeds a hardcoded list via a private `GetStandardEmployeeList()` method.
   - `GET api/Emp` returns `List<Employee>`, marked `[AllowAnonymous]` and `[ProducesResponseType(200)]` — visible on the Swagger page as a documented success response.
   - `POST api/Emp` uses `[FromBody] Employee employee` to read the employee object from the request body.
3. **Custom Authorization filter** — `Filters/CustomAuthFilter.cs` inherits `ActionFilterAttribute` and overrides `OnActionExecuting` to:
   - Return `BadRequest("Invalid request - No Auth token")` if the `Authorization` header is missing.
   - Return `BadRequest("Invalid request - Token present but Bearer unavailable")` if the header doesn't contain `Bearer`.
   - Applied as `[CustomAuthFilter]` at the `EmployeeController` class level.
4. **Custom Exception filter** — `Filters/CustomExceptionFilter.cs` implements `IExceptionFilter`. `OnException` captures the exception detail, appends it to `exception_log.txt`, and sets `context.Result` to a `500` response.
   - Registered globally in `Startup.cs` (`options.Filters.Add(typeof(CustomExceptionFilter))`).
   - A dedicated `GET api/Emp/throw-error` endpoint throws an exception on purpose so the filter (and the `ProducesResponseType(500)` Swagger doc) can be demonstrated without breaking the main `GET` endpoint.

> **Note on `Microsoft.AspNetCore.Mvc.WebApiCompatShim`:** the original hands-on notes mention installing this package for the custom filters. It isn't required here — `ActionFilterAttribute` and `IExceptionFilter` are native to `Microsoft.AspNetCore.Mvc` in .NET Core, and `WebApiCompatShim` is only relevant when migrating a legacy ASP.NET Web API 2 (`System.Web.Http`) project, so it has been intentionally left out.

## How to run
```bash
dotnet restore
dotnet run
```
- Swagger UI: `https://localhost:5001/swagger`
- Postman: send requests to `https://localhost:5001/api/Emp` with an `Authorization: Bearer <any-token>` header (required by `CustomAuthFilter`).
- Trigger the exception filter: `GET https://localhost:5001/api/Emp/throw-error` (also needs the Bearer header) — check `exception_log.txt` in the project's working directory afterwards.

## Project structure
```
3. WebApi_Handson/
├── Controllers/
│   ├── EmployeeController.cs
│   └── ValuesController.cs
├── Filters/
│   ├── CustomAuthFilter.cs
│   └── CustomExceptionFilter.cs
├── Models/
│   ├── Department.cs
│   ├── Employee.cs
│   └── Skill.cs
├── Properties/launchSettings.json
├── appsettings.json / appsettings.Development.json
├── Program.cs
├── Startup.cs
└── WebApiHandson.csproj
```
