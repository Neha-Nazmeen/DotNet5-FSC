# Git-HOL-1: Git Configuration & First Commit

## Objectives
- Familiarize with Git commands: `git init`, `git status`, `git add`, `git commit`, `git push`, `git pull`
- Set up global Git configuration (user name/email)
- Integrate `notepad++.exe` with Git and set it as the default editor
- Add a file to a source-code repository

## Prerequisites
- Git Bash client installed
- A free GitHub/GitLab account (do **not** use company/Cognizant credentials)

Estimated time: **30 minutes**

## Files
| File | Purpose |
|---|---|
| `setup.sh` | Runs every step of the lab automatically: configures Git, sets the editor, creates the `GitDemo` repo, adds `welcome.txt`, stages and commits it |

## How to run

1. Open **Git Bash** (Windows) or a terminal (Linux/Mac) in this folder.
2. (Optional) set your identity so the script doesn't use placeholders:
   ```bash
   export GIT_USER_NAME="Jane Doe"
   export GIT_USER_EMAIL="jane.doe@example.com"
   ```
3. Make the script executable and run it:
   ```bash
   chmod +x setup.sh
   ./setup.sh
   ```
4. The script will:
   - Verify Git is installed (`git --version`)
   - Set `git config --global user.name` / `user.email`
   - Configure `notepad++.exe` as the editor if it's on your `PATH` (Windows), otherwise falls back to `nano`
   - Create and `git init` a new `GitDemo` folder
   - Create `welcome.txt`, run `git status`, `git add`, and a multi-line `git commit`

## Push to a remote (GitHub/GitLab)

1. Create an empty repository named **GitDemo** on GitHub or GitLab (no README/license, so histories don't conflict).
2. Inside the `GitDemo` folder created by the script:
   ```bash
   git remote add origin https://github.com/<your-username>/GitDemo.git
   git branch -M master
   git push -u origin master
   ```
3. To pull changes made remotely (e.g. edited on the web UI):
   ```bash
   git pull origin master
   ```

## Notepad++ notes (Windows only)
If Git Bash can't find `notepad++`, add its install directory
(e.g. `C:\Program Files\Notepad++`) to your **PATH** environment variable
(Control Panel → System → Advanced system settings → Environment Variables),
then reopen Git Bash and re-run:
```bash
git config --global core.editor "notepad++.exe -multiInst -notabbar -nosession -noPlugin"
git config --global -e   # verify: opens notepad++ with your global config
```
