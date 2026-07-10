# 2. WebApi Handson — Web API with Swagger & Postman

Builds on **1. WebApi_Handson**.

## Objectives covered
- Swagger installation to Web API and listing on browser (`Swashbuckle.AspNetCore` NuGet package, `ProducesResponseType`, `AddSwaggerGen`, `UseSwaggerUI`)
- Usage of Postman to hit Web API methods (headers/Authorization, JSON body, request types, collections)
- Usage of `Route` and the `Name` attribute on Http requests; `ActionName` to allow more than one method with the same action verb

## What was done
1. Installed the `Swashbuckle.AspNetCore` NuGet package.
2. In `Startup.cs` -> `ConfigureServices`: added `services.AddSwaggerGen(...)` with Title/Version/Description/Contact/License info.
   > Note: this project targets Swashbuckle.AspNetCore 5.x on .NET Core 3.1, so the model types are `OpenApiInfo` / `OpenApiContact` / `OpenApiLicense` (the modern equivalents of the `Info`/`Contact`/`License` classes shown in the original hands-on notes, which target an older Swashbuckle version).
3. In `Startup.cs` -> `Configure`: added `app.UseSwagger()` and `app.UseSwaggerUI(...)` pointing at `/swagger/v1/swagger.json`.
4. Ran the app, opened `https://localhost:5001/swagger`, and confirmed the Title/Version/Contact details show at the top, with `Values` and `Emp` controller verbs listed. Used **Try it out -> Execute** on the GET method.
5. Added `EmployeeController` with a hardcoded in-memory employee list, tested the GET action via **Postman** — verified the employee list appears in the response Body and checked the response Status.
6. Modified the controller route from `api/Employee` to `api/Emp` and re-verified access through Postman.

## How to run
```bash
dotnet restore
dotnet run
```
Browse to `https://localhost:5001/swagger` for the Swagger UI, or use Postman against `https://localhost:5001/api/Emp`.

## Project structure
```
2. WebApi_Handson/
├── Controllers/
│   ├── EmployeeController.cs   (route: api/Emp)
│   └── ValuesController.cs
├── Models/
│   └── Employee.cs
├── Properties/
│   └── launchSettings.json
├── appsettings.json
├── appsettings.Development.json
├── Program.cs
├── Startup.cs
└── WebApiHandson.csproj
```
