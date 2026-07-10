# 5. WebApi Handson — CORS & JWT Authentication

Builds on **4. WebApi_Handson**.

## Objectives covered
- Enabling CORS
- JWT token generation and validation, `[Authorize(Roles = "...")]`

## What was done
1. **CORS** — `services.AddCors(...)` with an `AllowAll` policy, applied via `app.UseCors("AllowAll")` in the pipeline.
2. **JWT** —
   - `Microsoft.AspNetCore.Authentication.JwtBearer` package added.
   - `Jwt:Key` / `Jwt:Issuer` added to `appsettings.json`.
   - `AuthController` (`GET api/Auth/token?userId=..&role=..`) generates a signed JWT via `GenerateJSONWebToken`.
   - `services.AddAuthentication(...).AddJwtBearer(...)` configured with `TokenValidationParameters` in `Startup.cs`; `app.UseAuthentication()` added before `UseAuthorization()`.
   - Swagger updated with a Bearer `SecurityDefinition`/`SecurityRequirement` so tokens can be supplied via the **Authorize** button in the UI.
3. `EmployeeController` — removed `[CustomAuthFilter]` and `[AllowAnonymous]`, replaced with `[Authorize(Roles = "POC,Admin")]` at the controller level. `CustomAuthFilter.cs` is left in `Filters/` for reference but is no longer applied.

## How to run & test
```bash
dotnet restore
dotnet run
```
1. `GET https://localhost:5001/api/Auth/token?userId=1&role=Admin` → copy the returned JWT.
2. In Swagger (`/swagger`), click **Authorize** and paste `Bearer <token>`, or in Postman add header `Authorization: Bearer <token>`.
3. Call `GET/POST/PUT/DELETE https://localhost:5001/api/Emp` — requests without a valid token/role now get `401 Unauthorized`.
