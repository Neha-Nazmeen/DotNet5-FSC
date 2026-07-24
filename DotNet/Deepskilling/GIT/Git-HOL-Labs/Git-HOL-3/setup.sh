#!/usr/bin/env bash
# =====================================================================
# Git-HOL-3 : Branching and Merging
# =====================================================================
# Run in Git Bash (Windows) or any bash shell (Linux/Mac).
#   chmod +x setup.sh
#   ./setup.sh
# =====================================================================

set -e

echo "== Step 0: Create/re-use a working repository (GitDemo) =="
mkdir -p GitDemo
cd GitDemo
if [ ! -d .git ]; then
    git init
    git commit --allow-empty -m "Initial commit"
fi
# make sure the default branch is called master, to match the lab wording
CURRENT_BRANCH=$(git symbolic-ref --short HEAD)
if [ "$CURRENT_BRANCH" != "master" ]; then
    git branch -m "$CURRENT_BRANCH" master
fi

echo ""
echo "=================== BRANCHING ==================="

echo ""
echo "== 1. Create a new branch 'GitNewBranch' =="
git branch GitNewBranch

echo ""
echo "== 2. List all local and remote branches (note the '*' on current branch) =="
git branch -a

echo ""
echo "== 3. Switch to the new branch, add a file with content =="
git checkout GitNewBranch
echo "This file was added on GitNewBranch" > branch-file.txt

echo ""
echo "== 4. Commit the change on the branch =="
git add branch-file.txt
git commit -m "Add branch-file.txt on GitNewBranch"

echo ""
echo "== 5. Check status =="
git status

echo ""
echo "=================== MERGING ==================="

echo ""
echo "== 1. Switch back to master =="
git checkout master

echo ""
echo "== 2. List command-line differences between master and GitNewBranch =="
git diff master GitNewBranch

echo ""
echo "== 3. Visual diff with P4Merge (if installed) =="
echo "Configure once with:"
echo "  git config --global diff.tool p4merge"
echo "  git config --global difftool.p4merge.cmd \"p4merge \\\"\$LOCAL\\\" \\\"\$REMOTE\\\"\""
echo "Then run: git difftool master GitNewBranch"

echo ""
echo "== 4. Merge GitNewBranch into master =="
git merge GitNewBranch -m "Merge GitNewBranch into master"

echo ""
echo "== 5. Observe the log graph =="
git log --oneline --graph --decorate --all

echo ""
echo "== 6. Delete the branch after merging, then check status =="
git branch -d GitNewBranch
git status
git branch -a

cd ..
echo ""
echo "Lab 3 complete. GitNewBranch was created, committed, merged into master, and deleted."
