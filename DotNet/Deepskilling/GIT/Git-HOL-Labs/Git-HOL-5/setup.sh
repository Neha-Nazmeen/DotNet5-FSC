#!/usr/bin/env bash
# =====================================================================
# Git-HOL-5 : Clean up and Push Back to Remote Git
# =====================================================================
# Run in Git Bash (Windows) or any bash shell (Linux/Mac).
#   chmod +x setup.sh
#   ./setup.sh
#
# This script assumes GitDemo already has a remote named 'origin'
# configured (see Git-HOL-1's README). If it doesn't, set REMOTE_URL
# below or export it before running:
#   export REMOTE_URL="https://github.com/<you>/GitDemo.git"
#   ./setup.sh
# =====================================================================

set -e

cd GitDemo 2>/dev/null || { echo "GitDemo repo not found - run Git-HOL-1..4 first, or clone your remote here."; exit 1; }

echo "== 1. Verify master is in a clean state =="
git status

echo ""
echo "== 2. List all available branches =="
git branch -a

echo ""
echo "== 3. Ensure a remote is configured, then pull the remote repo into master =="
if ! git remote get-url origin >/dev/null 2>&1; then
    if [ -n "$REMOTE_URL" ]; then
        git remote add origin "$REMOTE_URL"
        echo "Added remote origin -> $REMOTE_URL"
    else
        echo "No 'origin' remote configured and no REMOTE_URL provided."
        echo "Set one with: git remote add origin <url>"
        exit 1
    fi
fi

git checkout master
git pull origin master --rebase || git pull origin master --allow-unrelated-histories

echo ""
echo "== 4. Push pending local changes (from Git-T03-HOL_002) to the remote =="
git push origin master

echo ""
echo "== 5. Observe that changes are reflected remotely =="
echo "Fetch again and compare local vs remote HEAD:"
git fetch origin
echo "local  HEAD: $(git rev-parse master)"
echo "remote HEAD: $(git rev-parse origin/master)"
if [ "$(git rev-parse master)" = "$(git rev-parse origin/master)" ]; then
    echo "In sync: local master matches origin/master."
else
    echo "Out of sync - review 'git log master..origin/master' / 'git log origin/master..master'."
fi

cd ..
echo ""
echo "Lab 5 complete. Local master has been pulled, pushed, and verified against origin."
