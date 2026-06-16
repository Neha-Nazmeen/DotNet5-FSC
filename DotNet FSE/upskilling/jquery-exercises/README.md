jQuery Exercises

Files:
- index.html - demo page. Includes CDN jQuery and a local fallback `vendor/jquery-local.js`.
- vendor/jquery-local.js - minimal fallback shim when CDN is unavailable (subset of jQuery API for exercises).
- js/app.js - implements all exercises.
- styles.css - small styles for demo.

How to test:
- Open `index.html` in a browser. If you want to test the local fallback, disconnect from the network and reload: the page will use `vendor/jquery-local.js`.

Notes:
- The local shim is minimal; some jQuery-only methods (like .fadeIn/.fadeOut chaining) are simulated or skipped.
- Use DevTools (Console) to see console logs (exercise 1 bonus logs "Hello World!").
