# Hands-On 10 — Unit Testing (Jasmine, Karma, TestBed)

**Status:** Complete

## What was done
- `course-card.component.spec.ts` — creation, @Input rendering, @Output emit (`spyOn` + click),
  `ngOnChanges` logging, and expand-toggle behaviour.
- `course.service.spec.ts` — `HttpClientTestingModule`/`provideHttpClientTesting`, asserts the GET
  request URL, response mapping, and the retry+error path (3 flushed 500 responses).
- `course-list.component.spec.ts` — `provideMockStore` with pre-set selector values; asserts cards
  render from the store and the loading indicator appears when `selectCoursesLoading` is overridden.
- `course.reducer.spec.ts`, `credit-label.pipe.spec.ts`, `highlight.directive.spec.ts`,
  `header.component.spec.ts`, `home.component.spec.ts`, `enrollment-form.component.spec.ts`,
  `reactive-enrollment-form.component.spec.ts` round out coverage across pipes, directives, forms,
  and reducers.

## Where
Every `*.spec.ts` file throughout `src/app/`. Run with `npm run test` (or `ng test --code-coverage`
for the coverage report).
