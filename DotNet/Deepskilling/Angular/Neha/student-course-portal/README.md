# Student Course Portal — Angular (v20.0) Hands-On Solutions

Digital Nurture 5.0 — .NET Full Stack Engineer Track. This single Angular project is the cumulative
solution for all 10 hands-on exercises in *Angular_HandsOn.pdf* — each hands-on adds a new layer on
top of the same app, as instructed (no separate project per exercise).

## Setup

```bash
npm install
npm start              # ng serve -> http://localhost:4200
npm run test           # Karma/Jasmine unit tests
npx json-server --watch db.json --port 3000   # mock REST API used by Hands-On 8
```

## Where each hands-on lives

| Hands-On | Topic | Key files |
|---|---|---|
| 1 | Setup, first component | `notes.txt`, `src/app/components/header/` |
| 2 | Binding, lifecycle, @Input/@Output | `pages/home/`, `components/course-card/` |
| 3 | Directives & pipes | `directives/highlight.directive.ts`, `pipes/credit-label.pipe.ts` |
| 4 | Template-driven forms | `pages/enrollment-form/` |
| 5 | Reactive forms | `pages/reactive-enrollment-form/` |
| 6 | Services & DI | `services/`, `components/notification/` |
| 7 | Routing, guards, lazy loading | `app.routes.ts`, `guards/`, `features/enrollment/` |
| 8 | HttpClient, RxJS, interceptors | `services/course.service.ts`, `interceptors/`, `db.json` |
| 9 | NgRx state management | `store/course/`, `store/enrollment/` |
| 10 | Unit testing | every `*.spec.ts` file |

Every folder under `src/app` has its own `README.md` describing its contents. See
`/Angular_HandsOn/YourName/docs/` for a detailed write-up of each hands-on's tasks and outcomes.

## Verification

`npm install`, `ng build` (production bundle + lazily-loaded `/enroll` chunk), and `tsc --noEmit`
against `tsconfig.spec.json` were all run against this exact source tree and completed with **zero
errors**. `ng test` (Karma) needs a Chrome/Chromium binary, which wasn't available in the sandbox
that generated this project — run `npm run test` locally to execute the full Jasmine suite.
