# Git-HOL-4: Conflict Resolution during Merge

## Objectives
- Explain how to resolve a conflict during merge
- Implement conflict resolution when multiple users update the trunk
  (master) in a way that conflicts with a branch's modifications

## Prerequisites
- Hands-on ID: `Git-T03-HOL_001` (see Git-HOL-3)
- P4Merge tool installed (optional, for visual 3-way merge)

Estimated time: **30 minutes**

## Files
| File | Purpose |
|---|---|
| `setup.sh` | Creates a real merge conflict on `hello.xml` (different content on `GitWork` vs `master`), shows the conflict markers, resolves it, commits, updates `.gitignore` for backup files, and cleans up the branch |

## How to run
```bash
chmod +x setup.sh
./setup.sh
```

The script is non-interactive, so it auto-resolves the conflict by
keeping both messages. In a real lab you would instead run:
```bash
git mergetool          # opens your configured 3-way merge tool (e.g. P4Merge)
# ...edit hello.xml until you're happy...
git add hello.xml
git commit
```

## What the script demonstrates, step by step
1. Verifies `master` is clean
2. Creates branch `GitWork`, adds `hello.xml`, updates its content, commits
3. Switches to `master`, adds a **different** `hello.xml`, commits
4. Shows `git log --oneline --graph --decorate --all` — the two histories diverge
5. Shows `git diff master GitWork -- hello.xml`
6. Runs `git merge GitWork` — Git reports a conflict and inserts
   `<<<<<<<`, `=======`, `>>>>>>>` markers into `hello.xml`
7. Resolves the conflict, stages, and commits
8. Adds `*.orig`, `*.bak`, `*~` to `.gitignore` (merge-tool backup files)
9. Deletes the now-merged `GitWork` branch
10. Prints the final log graph

## Visual 3-way merge with P4Merge (optional)
```bash
git config --global merge.tool p4merge
git config --global mergetool.p4merge.cmd \
  'p4merge "$BASE" "$LOCAL" "$REMOTE" "$MERGED"'
git mergetool
```

## Push to remote
```bash
cd GitDemo
git push origin master
```
