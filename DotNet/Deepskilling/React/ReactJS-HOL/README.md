# ReactJS Hands-On Labs

This repository contains 10 independent, ready-to-run React applications, each built from a corresponding hands-on-lab (HOL) Word document. Every numbered folder is a self-contained project with its own `package.json`.

## Folder structure

| Folder | App | Topic |
|---|---|---|
| `ReactJS-HOL-1` | myfirstreact | React setup & create-react-app basics |
| `ReactJS-HOL-2` | StudentApp | Class components |
| `ReactJS-HOL-3` | scorecalculatorapp | Function components, props, CSS |
| `ReactJS-HOL-4` | blogapp | Component lifecycle, fetch API |
| `ReactJS-HOL-5` | CohortDashboardApp | CSS Modules |
| `ReactJS-HOL-9` | cricketapp | ES6 (map/filter/arrow/destructuring/spread) |
| `ReactJS-HOL-10` | officespacerentalapp | JSX, elements, attributes, inline CSS |
| `ReactJS-HOL-11` | eventexamplesapp | Event handling, synthetic events |
| `ReactJS-HOL-12` | ticketbookingapp | Conditional rendering (login/logout) |
| `ReactJS-HOL-13` | bloggerapp | Conditional rendering techniques, lists & keys |

## Prerequisites (install once)

- **Node.js LTS + npm** → https://nodejs.org/en/download/
- **Visual Studio Code** (recommended editor) → https://code.visualstudio.com/
- **Git** → https://git-scm.com/downloads

Verify installation:
```bash
node -v
npm -v
git --version
```

## How to run any single app

Each numbered folder holds one React app in a subfolder (e.g. `ReactJS-HOL-1/myfirstreact`).

```bash
cd ReactJS-HOL-1/myfirstreact
npm install      # downloads dependencies (only needed once per app)
npm start         # starts the dev server at http://localhost:3000
```

Repeat the same 2 commands inside any other `ReactJS-HOL-N/<app-folder>` to run that lab.

To stop the dev server: `Ctrl + C` in the terminal.

To create an optimized production build instead of running the dev server:
```bash
npm run build
```

## Running all 10 apps quickly (optional helper)

From the repo root, a one-liner to install dependencies for every app:
```bash
for d in ReactJS-HOL-*/*/; do (cd "$d" && npm install); done
```
Then start any individual app as shown above. (Only run one dev server at a time on port 3000, or pass a different port: `PORT=3001 npm start`.)

## Pushing this repository to GitHub

1. Create a new empty repository on GitHub (no README/license, so it stays empty).
2. From the root of this extracted folder (`ReactJS-HOL/`), run:

```bash
git init
git add .
git commit -m "Initial commit: ReactJS Hands-On Labs 1-5, 9-13"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

Replace `<your-username>/<your-repo-name>` with your actual GitHub repo URL.

If you'd rather push each lab as its own repository, run the same `git init/add/commit/remote/push` sequence from inside each `ReactJS-HOL-N/<app-folder>` instead of the root.

## Notes

- `node_modules` and `build` folders are intentionally **not** included (see `.gitignore` in each app) — `npm install` regenerates them locally.
- Each `ReactJS-HOL-N` folder has its own `README.md` describing that specific lab and how to run it.
- HOL-4 (blogapp) fetches live data from `https://jsonplaceholder.typicode.com/posts` — an internet connection is required when running that app.
