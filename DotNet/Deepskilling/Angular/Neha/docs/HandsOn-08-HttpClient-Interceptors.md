# Hands-On 8 — HTTP Client, Observables & Interceptors

**Status:** Complete

## What was done
- `CourseService` refactored to use `HttpClient` (`GET`/`POST`/`PUT`/`DELETE`) against a JSON Server
  mock backend (`db.json`, run with `json-server --watch db.json --port 3000`).
- RxJS operator chain: `map` (filter zero-credit courses), `tap` (logging side effect only),
  `retry(2)`, `catchError` (rethrows a friendly error message).
- `switchMap` demonstrated in `EnrollmentService.getStudentsByCourse` usage pattern, cancelling
  the previous in-flight request when a new course is selected.
- Three interceptors registered via `provideHttpClient(withInterceptors([...]))`:
  `authInterceptor` (adds a mock bearer token), `loadingInterceptor` (drives `LoadingService` with
  `finalize`), `errorHandlerInterceptor` (401 → redirect, 500 → log/notify).
- `db.json` seeded with a realistic dataset: 12 courses, 5 students, 12 enrollments (linking
  students to courses), and 4 notifications — enough sample data to exercise GET/POST/PUT/DELETE
  and drive the enrolled/available-course numbers shown on the dashboard.

## Where
`src/app/services/course.service.ts`, `src/app/interceptors/`, `src/app/services/loading.service.ts`,
`student-course-portal/db.json`.
