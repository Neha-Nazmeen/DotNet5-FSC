# Hands-On 4 — Template-Driven Forms & Validation

**Status:** Complete

## What was done
- `EnrollmentFormComponent` built with `#enrollForm="ngForm"` and `[(ngModel)]` on every field
  (studentName, studentEmail, courseId, preferredSemester, agreeToTerms).
- Built-in validators (`required`, `minlength`, `email`, `requiredTrue`-equivalent checkbox) with
  contextual, touched-based error messages per field.
- `ng-valid`/`ng-invalid` + `ng-touched` CSS styling (red/green borders) in global `styles.css`.
- Success message shown after valid submission; Reset button calls `enrollForm.resetForm()`.
- Route registered at `/enroll` (now served via the lazy-loaded enrollment feature, Hands-On 7).

## Where
`src/app/pages/enrollment-form/`.
