# 4. WebApi Handson — CRUD operations

Builds on **3. WebApi_Handson**.

## Objectives covered
- Full CRUD (Create, Read, Update, Delete) on the `EmployeeController`

## What was done
- `PUT api/Emp/{id}` — returns `400 BadRequest("Invalid employee id")` if `id <= 0` or not found, else updates the record from the `[FromBody]` payload and returns the updated employee.
- `DELETE api/Emp/{id}` — validates the id, removes the record, returns confirmation.
- `GET`/`POST` retained from Hands-on 3.

## How to run
```bash
dotnet restore
dotnet run
```
Swagger: `https://localhost:5001/swagger` · Postman: `https://localhost:5001/api/Emp` (remember the `Authorization: Bearer <token>` header — `CustomAuthFilter` still applies).
