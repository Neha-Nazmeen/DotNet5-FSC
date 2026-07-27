# store/enrollment

- `enrollment.actions.ts` — `enrollInCourse`, `unenrollFromCourse`, `setEnrolledCourses`
- `enrollment.reducer.ts` — pure reducer managing `enrolledCourseIds: number[]`
- `enrollment.selectors.ts` — `selectEnrolledIds` plus the cross-slice `selectEnrolledCourses`
