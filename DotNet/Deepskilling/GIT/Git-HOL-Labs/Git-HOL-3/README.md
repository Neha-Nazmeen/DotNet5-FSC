# Git-HOL-3: Branching and Merging

## Objectives
- Explain branching and merging
- Explain creating a branch request in GitLab
- Explain creating a merge request in GitLab
- Construct a branch, make changes on it, and merge it back to master (trunk)

## Prerequisites
- Git environment set up (see Git-HOL-1)
- P4Merge tool installed (for visual diffs, Windows)

Estimated time: **30 minutes**

## Files
| File | Purpose |
|---|---|
| `setup.sh` | Creates branch `GitNewBranch`, lists branches, adds/commits a file on the branch, diffs it against master, merges it, prints the log graph, and deletes the branch |

## How to run
```bash
chmod +x setup.sh
./setup.sh
```

The script walks through, in order:
1. **Branching** — `git branch GitNewBranch`, `git branch -a`, `git checkout GitNewBranch`, edit + `git commit`, `git status`
2. **Merging** — `git checkout master`, `git diff master GitNewBranch`, (optional) `git difftool` with P4Merge, `git merge GitNewBranch`, `git log --oneline --graph --decorate`, `git branch -d GitNewBranch`

## Creating a branch/merge request in GitLab (UI steps)
1. Push the branch to the remote: `git push -u origin GitNewBranch`
2. In GitLab, open the project → **Merge requests → New merge request**
3. Choose `GitNewBranch` as source and `master` as target, add a description, and **Create merge request**
4. After review, click **Merge**, then delete the source branch from the UI (or locally with `git branch -d GitNewBranch` as the script does)

## P4Merge visual diff setup (optional, Windows)
```bash
git config --global diff.tool p4merge
git config --global difftool.p4merge.cmd "p4merge \"$LOCAL\" \"$REMOTE\""
git difftool master GitNewBranch
```

## Push to remote
```bash
cd GitDemo
git push origin master
```
