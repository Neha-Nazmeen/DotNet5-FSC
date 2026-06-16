JavaScript Exercises — Local Community Event Portal

Location: upskilling/js-exercises

Files:
- index.html: Demo and UI
- main.js: All JS tasks implemented (logging, classes, DOM, events, fetch, async/await, form handling)
- events.json: Mock endpoint (fetchable locally)
- styles.css: basic styles

How to test:
1. Open `index.html` in Chrome.
2. Open DevTools Console to see logs ("Welcome to the Community Portal").
3. The page alerts when fully loaded.
4. Events are fetched from `events.json`. Try registering, filtering, and searching.
5. Use the Console: `window._portal` exposes helper functions and the current `events` array for debugging.

Notes:
- Registration simulates a POST via `simulatePostRegistration` using `setTimeout`.
- jQuery example is included to show a click handler when jQuery is present.
- Use DevTools Network tab to inspect fetch for `events.json` and simulate errors.
