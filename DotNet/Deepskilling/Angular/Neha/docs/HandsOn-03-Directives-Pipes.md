# Hands-On 3 — Directives & Pipes

**Status:** Complete

## What was done
- Structural directives: `*ngIf`/else (`isLoading`, `noCourses` template), `*ngFor` with `trackBy`,
  `*ngSwitch` for grade-status badges — all in `CourseListComponent` / `CourseCardComponent`.
- Attribute directives: `[ngClass]` (enrolled/full/expanded states via a `cardClasses` getter) and
  `[ngStyle]` (border colour by grade status) in `CourseCardComponent`.
- Custom attribute directive `appHighlight` with a configurable colour input (`directives/highlight.directive.ts`).
- Custom pure pipe `creditLabel` (`pipes/credit-label.pipe.ts`) with null/zero edge-case handling.

## Where
`src/app/pages/course-list/`, `src/app/components/course-card/`, `src/app/directives/`, `src/app/pipes/`.
