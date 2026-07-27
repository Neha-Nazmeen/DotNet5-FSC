# Angular_HandsOn / YourName

Digital Nurture 5.0 — .NET Full Stack Engineer Track — Angular (v20.0) Hands-On Exercise Book
submission. All 10 hands-on exercises are implemented as **one cumulative project** (Student Course
Portal), per the submission guidelines — no separate project per exercise.

> Rename this `YourName` folder to your actual name before pushing to your GitHub repository.

## Contents

- **`student-course-portal/`** — the complete Angular application. See its own `README.md` for
  setup instructions and a hands-on → file mapping table. Every subfolder inside `src/app/` also has
  its own `README.md` explaining its contents.
- **`docs/`** — one Markdown file per hands-on (`HandsOn-01-Setup.md` … `HandsOn-10-Unit-Testing.md`)
  describing the tasks completed, the expected outcome, and exactly where each is implemented.

## Difficulty coverage

| Level | Hands-On | Covered |
|---|---|---|
| Beginner | 1, 2, 3 | ✅ Setup, components, bindings, directives, pipes |
| Intermediate | 4, 5, 6, 7 | ✅ Forms, validation, services, DI, routing, guards |
| Advanced | 8, 9, 10 | ✅ HttpClient, interceptors, NgRx, RxJS, unit testing |

## Running it

```bash
cd student-course-portal
npm install
npm start                                        # http://localhost:4200
npx json-server --watch db.json --port 3000      # required for Hands-On 8 (HTTP calls)
npm run test                                     # Jasmine/Karma unit tests (Hands-On 10)
```
