# 1. WebApi Handson — First Web API using .NET Core

## Objectives covered
- RESTful web service / Web API / Microservice concepts (REST features, statelessness, messages, difference between WebService & WebAPI, not restricted to XML responses)
- `HttpRequest` & `HttpResponse`
- Action verbs: `HttpGet`, `HttpPost`, `HttpPut`, `HttpDelete` and how they are declared as attributes on a Web API action method
- `HttpStatusCodes` used in Web API (`Ok`, `InternalServerError`, `Unauthorized`, `BadRequest`) via `ActionResult` types
- Structure of a Web API: controller inheriting from `ControllerBase` (the .NET Core equivalent of `ApiController`), action verbs, action methods
- Configuration files of a Web API: `Startup.cs` with dependency injection, `appsettings.json`, `launchSettings.json`

## What's in this project
A .NET Core 3.1 Web API project created with the **API** template, containing the default `ValuesController` with the full set of Read/Write action methods:

| Verb | Route | Purpose |
|---|---|---|
| GET | `/api/values` | Read — returns list of values |
| GET | `/api/values/{id}` | Read — returns a single value |
| POST | `/api/values` | Write — create |
| PUT | `/api/values/{id}` | Write — update |
| DELETE | `/api/values/{id}` | Write — delete |

## How to run
```bash
dotnet restore
dotnet run
```
Then browse to `https://localhost:5001/api/values` (or the port shown in the console) and confirm the GET action method returns:
```json
["value1", "value2"]
```

## Project structure
```
1. WebApi_Handson/
├── Controllers/
│   └── ValuesController.cs
├── Properties/
│   └── launchSettings.json
├── appsettings.json
├── appsettings.Development.json
├── Program.cs
├── Startup.cs
└── WebApiHandson.csproj
```
