# Hands-On 5 — Reactive Forms (FormBuilder, FormGroup, FormArray, Custom Validators)

**Status:** Complete

## What was done
- `ReactiveEnrollmentFormComponent` built entirely with `FormBuilder.group()`; template binds via
  `[formGroup]` / `formControlName`, no `ngModel`.
- Custom synchronous validator `noCourseCode` rejecting course codes starting with `XX`.
- Custom async validator `simulateEmailCheck` (Promise-based, 800ms delay) flagging `test@` emails
  as taken.
- `FormArray` (`additionalCourses`) with add/remove buttons and a typed `additionalCourses` getter.
- Route registered at `/enroll/reactive`, protected by `unsavedChangesGuard` (Hands-On 7).

## Where
`src/app/pages/reactive-enrollment-form/`.
