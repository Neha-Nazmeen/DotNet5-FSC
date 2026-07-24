# Git Hands-On Labs (Git-HOL 1–5)

Five self-contained Git hands-on labs, each derived from a source Word
document. Every lab folder has:
- **`setup.sh`** — a runnable Bash script that performs every step in the lab automatically
- **`README.md`** — objectives, prerequisites, how to run, and how to push to a remote

| Folder | Topic | Est. time |
|---|---|---|
| `Git-HOL-1` | Git configuration, notepad++ editor integration, first repo & commit | 30 min |
| `Git-HOL-2` | `.gitignore` — ignoring `.log` files and folders | 20 min |
| `Git-HOL-3` | Branching and merging | 30 min |
| `Git-HOL-4` | Resolving merge conflicts | 30 min |
| `Git-HOL-5` | Cleaning up and pushing back to remote | 10 min |

## Requirements
- Git Bash (Windows) or any Bash shell (Linux/Mac)
- Git installed and on your `PATH`
- (Optional) Notepad++ for Lab 1, P4Merge for Labs 3–4
- A free GitHub or GitLab account for the push/pull steps (do **not** use company credentials)

## Quick start — run everything in order
```bash
# From inside this Git-HOL-Labs folder:
export GIT_USER_NAME="Your Name"
export GIT_USER_EMAIL="you@example.com"

cd Git-HOL-1 && chmod +x setup.sh && ./setup.sh && cd ..
cd Git-HOL-2 && chmod +x setup.sh && ./setup.sh && cd ..
cd Git-HOL-3 && chmod +x setup.sh && ./setup.sh && cd ..
cd Git-HOL-4 && chmod +x setup.sh && ./setup.sh && cd ..
cd Git-HOL-5 && chmod +x setup.sh && ./setup.sh && cd ..
```

Each script is independent — it creates its own local `GitDemo` folder
inside its lab directory the first time it runs, then re-uses it on
subsequent runs. Read each lab's own README for the exact commands and
what to expect on screen.

## Pushing any lab's repo to GitHub/GitLab
1. Create an empty repository on GitHub/GitLab (no README/license, to avoid history conflicts).
2. Inside that lab's `GitDemo` folder:
   ```bash
   git remote add origin https://github.com/<your-username>/GitDemo.git
   git branch -M master
   git push -u origin master
   ```
3. For later labs that build on the same repo (e.g. Lab 5), just make sure
   `origin` is already configured — the script will detect and reuse it,
   or you can pass it explicitly:
   ```bash
   export REMOTE_URL="https://github.com/<your-username>/GitDemo.git"
   ./setup.sh
   ```
4. To pull the latest remote state at any time:
   ```bash
   git pull origin master
   ```

## Recommended order of execution
Run the labs in numeric order (1 → 5) since later labs assume the Git
configuration and repository conventions set up in earlier ones
(e.g. Lab 5's "clean up and push" step is meant to run after Lab 4's
conflict has been resolved and committed).
