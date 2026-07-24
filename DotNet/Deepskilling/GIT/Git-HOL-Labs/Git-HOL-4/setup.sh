#!/usr/bin/env bash
# =====================================================================
# Git-HOL-4 : Conflict Resolution during Merge
# =====================================================================
# Run in Git Bash (Windows) or any bash shell (Linux/Mac).
#   chmod +x setup.sh
#   ./setup.sh
# NOTE: This script intentionally creates a merge conflict and then
#       resolves it automatically (favoring the branch version, with a
#       merge marker cleanup) so the whole lab can run non-interactively.
#       Read the comments to see what you'd do by hand in Git Bash.
# =====================================================================

set -e

echo "== 0. Verify master is in a clean state =="
mkdir -p GitDemo
cd GitDemo
if [ ! -d .git ]; then
    git init
    git commit --allow-empty -m "Initial commit"
fi
CURRENT_BRANCH=$(git symbolic-ref --short HEAD)
if [ "$CURRENT_BRANCH" != "master" ]; then
    git branch -m "$CURRENT_BRANCH" master
fi
git status

echo ""
echo "== 1. Create branch 'GitWork' and add hello.xml =="
git checkout -b GitWork
cat > hello.xml <<'EOF'
<greeting>
  <message>Hello from GitWork branch - version A</message>
</greeting>
EOF
git add hello.xml
git commit -m "Add hello.xml on GitWork"

echo ""
echo "== 2/3. Update hello.xml content on GitWork, check status, commit =="
cat > hello.xml <<'EOF'
<greeting>
  <message>Hello from GitWork branch - version A (updated)</message>
</greeting>
EOF
git status
git add hello.xml
git commit -m "Update hello.xml on GitWork"

echo ""
echo "== 4. Switch to master =="
git checkout master

echo ""
echo "== 5/6/7. Add a DIFFERENT hello.xml on master, commit =="
cat > hello.xml <<'EOF'
<greeting>
  <message>Hello from master branch - version B</message>
</greeting>
EOF
git add hello.xml
git commit -m "Add hello.xml on master with different content"

echo ""
echo "== 8. Observe the log (both branches diverge) =="
git log --oneline --graph --decorate --all

echo ""
echo "== 9. Diff between master and GitWork =="
git diff master GitWork -- hello.xml

echo ""
echo "== 10. Visual diff with P4Merge (optional) =="
echo "  git difftool master GitWork -- hello.xml   # requires p4merge configured"

echo ""
echo "== 11. Merge GitWork into master (this WILL conflict) =="
set +e
git merge GitWork -m "Merge GitWork into master"
MERGE_STATUS=$?
set -e

echo ""
echo "== 12. Observe the conflict markers Git wrote into hello.xml =="
if [ $MERGE_STATUS -ne 0 ]; then
    echo "--- hello.xml with conflict markers ---"
    cat hello.xml
    echo "----------------------------------------"

    echo ""
    echo "== 13. Resolve with a 3-way merge tool =="
    echo "By hand you'd run:  git mergetool   (opens P4Merge/vimdiff/etc.)"
    echo "This script resolves automatically, keeping BOTH messages for demo purposes:"
    cat > hello.xml <<'EOF'
<greeting>
  <message>Hello from master branch - version B</message>
  <message>Hello from GitWork branch - version A (updated)</message>
</greeting>
EOF

    echo ""
    echo "== 14. Commit the resolved conflict =="
    git add hello.xml
    git commit -m "Resolve merge conflict between master and GitWork"
else
    echo "No conflict occurred (histories were already compatible)."
fi

echo ""
echo "== 15. Status + add backup files to .gitignore =="
git status
cat > .gitignore <<'EOF'
# Backup files created by merge tools / editors
*.orig
*.bak
*~
EOF

echo ""
echo "== 16. Commit the .gitignore update =="
git add .gitignore
git commit -m "Ignore merge/editor backup files"

echo ""
echo "== 17. List all available branches =="
git branch -a

echo ""
echo "== 18. Delete the branch that was merged into master =="
git branch -d GitWork

echo ""
echo "== 19. Final log graph =="
git log --oneline --graph --decorate

cd ..
echo ""
echo "Lab 4 complete. The conflict in hello.xml was created, observed, and resolved."
