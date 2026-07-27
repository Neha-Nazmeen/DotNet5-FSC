# store/course

- `course.actions.ts` — `loadCourses`, `loadCoursesSuccess`, `loadCoursesFailure`
- `course.reducer.ts` — pure reducer managing `{ courses, loading, error }`
- `course.selectors.ts` — memoised selectors (`selectAllCourses`, `selectCoursesLoading`, `selectCoursesError`)
- `course.effects.ts` — `loadCourses$` effect calling `CourseService` and dispatching success/failure
