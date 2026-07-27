# Hands-On 7 — Routing, Guards, Lazy Loading & Route Data

**Status:** Complete

## What was done
- Full route table in `app.routes.ts`: `/`, `/courses`, `/courses/:id` (nested under
  `CoursesLayoutComponent`), `/profile`, `/enroll` (lazy), and a `**` wildcard to `NotFoundComponent`.
- `CourseDetailComponent` reads the `:id` route param via `ActivatedRoute.snapshot.paramMap`.
- Query params: search term synced to `/courses?search=...` and read back on init.
- `/enroll` lazily loaded via `loadChildren: () => import('./features/enrollment/enrollment.routes')`.
- `authGuard` (`CanActivateFn`) protects `/profile` and `/enroll`.
- `unsavedChangesGuard` (`CanDeactivateFn`) protects the reactive enrollment form from accidental
  navigation away with unsaved (dirty) changes.

## Where
`src/app/app.routes.ts`, `src/app/pages/course-detail/`, `src/app/pages/courses-layout/`,
`src/app/features/enrollment/`, `src/app/guards/`.
