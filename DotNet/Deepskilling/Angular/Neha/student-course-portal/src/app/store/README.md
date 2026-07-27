# store (NgRx)

State management for the portal (Hands-On 9).

- `course/` — actions, reducer, selectors, and effects for loading courses over HTTP
- `enrollment/` — actions, reducer, and selectors for tracking enrolled course IDs, including a
  cross-slice selector (`selectEnrolledCourses`) that joins course + enrollment state
