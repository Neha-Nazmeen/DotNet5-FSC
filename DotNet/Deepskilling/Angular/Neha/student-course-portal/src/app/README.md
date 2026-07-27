# src/app

Root of the Student Course Portal application (standalone Angular 20, no NgModules except the lazy
enrollment feature's route file). See `/Angular_HandsOn/YourName/README.md` at the project root for
the full hands-on-by-hands-on breakdown.

- `app.config.ts` — application-wide providers (Router, HttpClient + interceptors, NgRx Store/Effects/DevTools)
- `app.routes.ts` — top-level route table (Hands-On 7)
- `app.component.*` — root shell component hosting the header and `<router-outlet>`
