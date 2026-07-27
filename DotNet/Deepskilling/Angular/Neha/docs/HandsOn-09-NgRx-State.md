# Hands-On 9 — State Management (NgRx Store, Actions, Reducers, Effects, Selectors)

**Status:** Complete

## What was done
- `provideStore(...)`, `provideEffects(...)`, `provideStoreDevtools(...)` registered in `app.config.ts`.
- `store/course/`: actions (`loadCourses`/Success/Failure), a pure reducer, memoised selectors
  (`selectAllCourses`, `selectCoursesLoading`, `selectCoursesError`), and a `CourseEffects` effect
  that calls `CourseService` and dispatches success/failure.
- `CourseListComponent` now reads from the store (`courses$ = store.select(selectAllCourses)`) and
  dispatches `loadCourses()` in `ngOnInit`, rendering via the `async` pipe.
- `store/enrollment/`: actions/reducer for `enrolledCourseIds`, plus a **cross-slice selector**
  (`selectEnrolledCourses`) combining course and enrollment state.

## Where
`src/app/store/course/`, `src/app/store/enrollment/`, `src/app/pages/course-list/`.
