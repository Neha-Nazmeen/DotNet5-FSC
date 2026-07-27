# interceptors

Registered in order in `app.config.ts` via `provideHttpClient(withInterceptors([...]))`.

- `auth.interceptor.ts` — attaches a mock bearer token to every outgoing request (Step 88)
- `loading.interceptor.ts` — shows/hides the global spinner via `LoadingService` (Step 91)
- `error-handler.interceptor.ts` — global 401/500 handling (Step 90)
