# Hands-On 6 — Services & Dependency Injection

**Status:** Complete

## What was done
- `CourseService` (`providedIn: 'root'`) — singleton with `getCourses`/`getCourseById`/`addCourse`
  (later refactored to HttpClient in Hands-On 8). `Course` interface extracted to `models/course.model.ts`.
- `EnrollmentService` — injects `CourseService` (service-to-service DI); tracks enrolled course IDs.
- `AuthService` — simple `isLoggedIn` flag consumed by the route guard.
- `NotificationComponent` demonstrates **component-level** providers (`providers: [NotificationService]`
  in the `@Component` decorator) — a separate instance scoped to that component, unlike the root
  singletons above.

## Where
`src/app/services/`, `src/app/models/course.model.ts`, `src/app/components/notification/`.
