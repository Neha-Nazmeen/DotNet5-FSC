HTML5 Exercises — Local Community Event Portal

Location: `upskilling/html5-exercises`

Files:
- `index.html` — main demo implementing tasks 1–10
- `styles.css` — styles for layout and interactions
- `script.js` — JS for events, storage, geolocation, and media events
- `help.html` — external help doc link target

How to test:
1. Open `index.html` in Chrome.
2. Inspect Document Structure using DevTools (Elements tab).
3. Use Console to see logs and debug.
4. Try registering (form), double-click gallery images, test geolocation, and try leaving the page with unsaved changes to see beforeunload warning.

Notes:
- Add a video file at `media/promo.mp4` if you want the oncanplay message to trigger.
- The app uses `localStorage` to remember preferred event type and `sessionStorage` for last change time.
