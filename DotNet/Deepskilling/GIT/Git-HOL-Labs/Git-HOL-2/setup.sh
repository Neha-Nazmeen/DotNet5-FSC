#!/usr/bin/env bash
# =====================================================================
# Git-HOL-2 : .gitignore - ignoring unwanted files and folders
# =====================================================================
# Run in Git Bash (Windows) or any bash shell (Linux/Mac).
#   chmod +x setup.sh
#   ./setup.sh
# =====================================================================

set -e

echo "== Step 1: Create/re-use a working repository (GitDemo) =="
mkdir -p GitDemo
cd GitDemo
if [ ! -d .git ]; then
    git init
fi

echo ""
echo "== Step 2: Create a .log file =="
echo "This is a sample log entry $(date)" > sample.log
cat sample.log

echo ""
echo "== Step 3: Create a 'log' folder with a file inside it =="
mkdir -p log
echo "Runtime log inside the log folder" > log/runtime.log

echo ""
echo "== Step 4: Status BEFORE .gitignore (files show as untracked) =="
git status

echo ""
echo "== Step 5: Create/Update .gitignore to ignore *.log files and the log/ folder =="
cat > .gitignore <<'EOF'
# Ignore all files with a .log extension
*.log

# Ignore the entire log folder
log/
EOF

echo ".gitignore content:"
cat .gitignore

echo ""
echo "== Step 6: Status AFTER .gitignore (sample.log and log/ should disappear) =="
git status

echo ""
echo "== Step 7: Stage and commit the .gitignore file itself =="
git add .gitignore
git commit -m "Add .gitignore to exclude .log files and log folder"

echo ""
echo "== Step 8: Final status check - working directory should be clean =="
git status

cd ..
echo ""
echo "Lab 2 complete. .log files and the log/ folder are now ignored by Git."
