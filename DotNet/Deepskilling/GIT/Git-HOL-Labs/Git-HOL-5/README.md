# Git-HOL-5: Clean Up and Push Back to Remote Git

## Objectives
- Explain how to clean up and push back to remote Git
- Execute the steps involved in cleaning up and pushing back to a remote Git repository

## Prerequisites
- Hands-on ID: `Git-T03-HOL_002` (see Git-HOL-4)
- A `GitDemo` repository with an `origin` remote already configured
  (see Git-HOL-1)

Estimated time: **10 minutes**

## Files
| File | Purpose |
|---|---|
| `setup.sh` | Verifies a clean `master`, lists branches, pulls the latest remote state, pushes pending local commits, then verifies local and remote are in sync |

## How to run
```bash
chmod +x setup.sh
./setup.sh
```

If `GitDemo` doesn't have a remote configured yet, set one first:
```bash
export REMOTE_URL="https://github.com/<your-username>/GitDemo.git"
./setup.sh
```

## What the script does, step by step
1. `git status` — confirm the working directory is clean
2. `git branch -a` — list local and remote-tracking branches
3. `git pull origin master` — bring in any remote changes
4. `git push origin master` — push local commits up to the remote
5. `git fetch origin` then compares `git rev-parse master` vs
   `git rev-parse origin/master` to confirm both point at the same commit

## Manual equivalent (Git Bash)
```bash
cd GitDemo
git status
git branch -a
git pull origin master
git push origin master
git log --oneline --graph --decorate --all
```
