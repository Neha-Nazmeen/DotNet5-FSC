Bootstrap 5 Exercises — Complete Assessment

This folder contains a complete set of examples and a scaffold to work through the provided Bootstrap 5 exercises.

Files included:
- `index.html` — CDN-based demo page implementing the exercises (quick open in browser).
- `local.html` — demo page that uses downloaded/npm-based vendor files from `vendor/` (after running `npm install` and `npm run copy:vendor`).
- `package.json` — npm scripts: install dependencies, copy vendor files, and compile Sass.
- `src/scss/_variables.scss` — example variable overrides for customizing Bootstrap (Exercise 19).
- `src/scss/main.scss` — imports variables and Bootstrap SCSS; compiles to `dist/css/custom.css`.
- `scripts/copy-vendor.js` — copies Bootstrap and Bootstrap Icons from `node_modules` to `vendor/`.
- `.gitignore` — ignores node_modules, vendor, dist.

Quick start (CDN):
- Open `index.html` in a browser.

Quick start (local/npm):
1. Open PowerShell in this folder.
2. Run:

```powershell
npm install
npm run copy:vendor
npm run build:sass
```

3. Open `local.html` in a browser.

Requirements coverage is documented inside `index.html` and `src/scss/_variables.scss`.
