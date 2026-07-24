# Git-HOL-2: .gitignore

## Objectives
- Explain `.gitignore`
- Explain how to ignore unwanted files using `.gitignore`
- Implement `.gitignore` to ignore unwanted files and folders

## Prerequisites
- Git environment set up (see Git-HOL-1)
- `notepad++` configured as default editor
- A local Git repository with a remote on GitLab/GitHub

Estimated time: **20 minutes**

## Task
Create a `.log` file and a `log` folder in the working directory of Git.
Update `.gitignore` so that on committing, these are ignored. Verify with
`git status` that the working directory, local repository, and remote
repository stay in sync.

## Files
| File | Purpose |
|---|---|
| `setup.sh` | Creates `sample.log` and a `log/` folder, shows `git status` before ignoring them, writes `.gitignore`, then shows `git status` again to prove they're ignored, and commits `.gitignore` |

## How to run
```bash
chmod +x setup.sh
./setup.sh
```

Watch the two `git status` outputs in the terminal:
- **Before** `.gitignore`: `sample.log` and `log/` appear as *untracked*.
- **After** `.gitignore`: they no longer appear at all.

## Push to remote
```bash
cd GitDemo
git push origin master
```

## Verifying manually
```bash
git status --ignored   # explicitly list ignored files/folders
git check-ignore -v sample.log log/runtime.log   # shows which .gitignore rule matched
```
