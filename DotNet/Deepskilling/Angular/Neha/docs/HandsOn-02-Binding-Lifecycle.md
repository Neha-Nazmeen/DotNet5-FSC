# Hands-On 2 — Data Binding, Lifecycle Hooks & Component Communication

**Status:** Complete

## What was done
- All four binding types demonstrated in `HomeComponent`: interpolation (`portalName`),
  property binding (`[disabled]`), event binding (`(click)="onEnrollClick()"`), two-way binding
  (`[(ngModel)]="searchTerm"`).
- `ngOnInit` / `ngOnDestroy` implemented in `HomeComponent` with console logging.
- `ngOnChanges` implemented in `CourseCardComponent`, logging previous/current `course` values.
- `@Input() course` and `@Output() enrollRequested` wired between `CourseCardComponent` (child)
  and `CourseListComponent` (parent), including `onEnroll()` and the selected-course display.

## Where
`src/app/pages/home/`, `src/app/components/course-card/`, `src/app/pages/course-list/`.
