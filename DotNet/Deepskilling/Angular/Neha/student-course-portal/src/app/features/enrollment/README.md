# features/enrollment

`enrollment.routes.ts` defines the `/enroll` and `/enroll/reactive` routes, imported lazily so this
chunk is only downloaded the first time a user visits `/enroll`. The reactive form route is also
protected by `unsavedChangesGuard`.
