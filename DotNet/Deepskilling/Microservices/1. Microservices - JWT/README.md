# JWT Auth Demo — ASP.NET Core Web API

Solution for **Question 1: Implement JWT Authentication in ASP.NET Core Web API**.

This project demonstrates:
1. An ASP.NET Core Web API project (.NET 8) with a `User` model and a `/login` endpoint.
2. JWT token generation on successful login.
3. A protected endpoint secured with `[Authorize]`.

## Project structure

```
JwtAuthDemo/
├── Controllers/
│   ├── AuthController.cs      # POST api/auth/login -> issues JWT
│   └── SecureController.cs    # GET api/secure/data  -> requires [Authorize]
├── Models/
│   ├── User.cs                # User entity
│   ├── LoginModel.cs          # Login request DTO
│   └── UserStore.cs           # In-memory demo "database" of users
├── Properties/
│   └── launchSettings.json
├── appsettings.json           # Jwt:Key / Issuer / Audience / DurationInMinutes
├── appsettings.Development.json
├── Program.cs                 # JWT bearer + Swagger configuration
├── JwtAuthDemo.csproj
└── .gitignore
```

## Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/download) installed
- Any HTTP client (Swagger UI, Postman, curl, etc.)

## Getting started

1. Unzip the project and open a terminal in the `JwtAuthDemo` folder.
2. Restore and run:

   ```bash
   dotnet restore
   dotnet run
   ```

3. The console will print the URL the app is listening on (e.g. `http://localhost:5223`).
   Open `http://localhost:5223/swagger` in a browser to use the interactive Swagger UI.

## Demo users

The project ships with two hard-coded users (see `Models/UserStore.cs`) purely for
demonstration. **Never store plain-text passwords in a real application** — use a proper
hash (BCrypt, PBKDF2, ASP.NET Core Identity, etc.) instead.

| Username | Password    | Role  |
|----------|-------------|-------|
| admin    | Admin@123   | Admin |
| john     | John@123    | User  |

## Testing the API

### 1. Log in to get a token

```bash
curl -X POST http://localhost:5223/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{ "username": "admin", "password": "Admin@123" }'
```

Response:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiresInMinutes": 60
}
```

### 2. Call the protected endpoint

Without a token:

```bash
curl -i http://localhost:5223/api/secure/data
```
→ `401 Unauthorized`

With a valid token:

```bash
curl http://localhost:5223/api/secure/data \
  -H "Authorization: Bearer <paste-token-here>"
```
→
```json
{ "message": "This is protected data.", "user": "admin" }
```

### Using Swagger UI

1. Open `/swagger`.
2. Call `POST /api/auth/login` with one of the demo users and copy the `token` value.
3. Click the **Authorize** button (top right), enter `Bearer <token>`, and click **Authorize**.
4. Call `GET /api/secure/data` — it should now return `200 OK` instead of `401`.

## Configuration

JWT settings live in `appsettings.json`:

```json
"Jwt": {
  "Key": "ThisIsASecretKeyForJwtToken_ChangeMeInProduction_MakeItLongAndRandom",
  "Issuer": "MyAuthServer",
  "Audience": "MyApiUsers",
  "DurationInMinutes": 60
}
```

⚠️ **For production**, replace `Jwt:Key` with a long, random secret stored in a secure
location (environment variable, Azure Key Vault, AWS Secrets Manager, user-secrets, etc.),
never commit real secrets to source control.

## Notes / next steps

This project only covers Question 1. It also includes a small extra touch (Swagger's
"Authorize" button and a custom 401 JSON response) to make the token flow easy to test
end-to-end. If you'd like, the remaining exercises can be added on top of this same
project:

- **Question 2** – the `SecureController` endpoint above already covers this.
- **Question 3** – add an `AdminController` with `[Authorize(Roles = "Admin")]` and
  include a role claim (already added) when generating the token.
- **Question 4** – add the `OnAuthenticationFailed` event handling for expired tokens
  (a starter version is already wired up in `Program.cs`).
