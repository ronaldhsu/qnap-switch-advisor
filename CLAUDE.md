# QNAP Switch Advisor - Claude Instructions

## Project Overview
This is a static web application for QNAP switch selection guidance.
- **Main file**: `index.html` (single-file web app)
- **GitHub repo**: https://github.com/ronaldhsu/qnap-switch-advisor
- **GitHub Pages**: Deployed automatically on push to `main` branch

## Working Directory
Always work in: `C:/Ronald/Project/Github/Q-Project/qnap-switch-advisor`

## Git Workflow
After making any changes to files in this project, ALWAYS:
1. Stage the changes: `git add <changed files>`
2. Commit with a descriptive message
3. Push to GitHub: `git push origin main`

This triggers the GitHub Actions workflow to deploy to GitHub Pages automatically.

## GitHub Authentication
- Username: `ronaldhsu`
- Credentials stored in git credential manager
- **Note**: Pushing `.github/workflows/` requires a PAT with `workflow` scope

## Commit Message Format
```
<type>: <short description>

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
```
Types: `feat`, `fix`, `update`, `refactor`, `docs`

## File Structure
```
qnap-switch-advisor/
├── index.html          # Main application (single file)
├── README.md           # Project documentation
├── .gitignore          # Git ignore rules
├── CLAUDE.md           # This file
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Pages deployment workflow
```
