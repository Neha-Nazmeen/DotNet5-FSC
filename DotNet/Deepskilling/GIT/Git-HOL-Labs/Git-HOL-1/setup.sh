#!/usr/bin/env bash
# =====================================================================
# Git-HOL-1 : Git Configuration, Editor Integration, First Commit
# =====================================================================
# Run in Git Bash (Windows) or any bash shell (Linux/Mac).
#   chmod +x setup.sh
#   ./setup.sh
# =====================================================================

set -e

echo "== Step 1: Verify Git is installed =="
git --version

echo ""
echo "== Step 2: Configure user name and email (global) =="
# Replace these with your own details before running, or export
# GIT_USER_NAME / GIT_USER_EMAIL before calling this script.
GIT_USER_NAME="${GIT_USER_NAME:-Your Name}"
GIT_USER_EMAIL="${GIT_USER_EMAIL:-you@example.com}"

git config --global user.name "$GIT_USER_NAME"
git config --global user.email "$GIT_USER_EMAIL"

echo "Configured user.name and user.email:"
git config --global user.name
git config --global user.email

echo ""
echo "== Step 3: Set default editor =="
# On Windows with notepad++ installed and on PATH, uncomment the line below:
#   git config --global core.editor "notepad++.exe -multiInst -notabbar -nosession -noPlugin"
# On Linux/Mac we default to nano so the script runs non-interactively too.
if command -v notepad++.exe >/dev/null 2>&1; then
    git config --global core.editor "notepad++.exe -multiInst -notabbar -nosession -noPlugin"
    echo "notepad++ configured as default editor"
else
    git config --global core.editor "nano"
    echo "notepad++ not found on PATH - defaulted core.editor to 'nano'."
    echo "On Windows: add notepad++'s install folder to your PATH, then re-run"
    echo "  git config --global core.editor \"notepad++.exe -multiInst -notabbar -nosession -noPlugin\""
fi

echo ""
echo "== Verify editor configuration =="
git config --global -e --no-edit 2>/dev/null || true
git config --global core.editor

echo ""
echo "== Step 4: Initialize the GitDemo repository =="
rm -rf GitDemo
mkdir GitDemo
cd GitDemo
git init

echo ""
echo "== Step 5: List hidden files (the .git working directory) =="
ls -la

echo ""
echo "== Step 6: Create welcome.txt with content =="
echo "Welcome to the GitDemo hands-on lab!" > welcome.txt
cat welcome.txt

echo ""
echo "== Step 7: Check status (untracked file) =="
git status

echo ""
echo "== Step 8: Stage the file =="
git add welcome.txt

echo ""
echo "== Step 9: Commit with a multi-line message =="
git commit -m "Add welcome.txt" -m "This is the first commit for the GitDemo lab." \
            -m "It introduces the welcome.txt file to the repository."

echo ""
echo "== Step 10: Confirm status is clean =="
git status

echo ""
echo "== Step 11/12: Add a remote and push/pull =="
echo "Create an empty 'GitDemo' project on GitLab/GitHub first, then run:"
echo "  git remote add origin <your-remote-url>"
echo "  git branch -M master"
echo "  git pull origin master --allow-unrelated-histories"
echo "  git push -u origin master"

cd ..
echo ""
echo "Lab 1 complete. Repository created at ./GitDemo"
