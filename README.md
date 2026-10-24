# Jiashu Liao · Personal Portfolio

A lightweight, accessible, responsive portfolio for AI research and engineering.

## Deployment (GitHub Pages)

Repository target: SkyJiashu/skyjiashu.github.io (repository name should be lowercase for a user Pages site).

Your existing repository currently appears as SkyJiashu/SkyJiashu.github.io. Check **Settings → General → Repository name** and rename its repository component to skyjiashu.github.io before deploying, as GitHub documents lowercase usernames in Pages repository names. GitHub usernames/URL casing may still render flexibly; do not change your account username.

1. Upload **the contents of this folder** to the repository root (not the folder itself).
2. GitHub → repository **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch main and folder /(root), then save.
5. Visit https://skyjiashu.github.io/ when publishing completes.

Static site: no npm, build system, paid hosting, or API credentials required. index.html is the entry point. The .nojekyll file disables Jekyll processing.

## Editing the website

- index.html: all text, project links, affiliations and page metadata.
- styles.css: design, responsiveness and light/dark themes.
- script.js: theme toggle, mobile navigation, and copyright year.
- favicon.svg: simple monogram; does not use third-party assets.

## Publication checklist

- Check names, titles, dates, affiliations and paper status against current sources.
- Verify every paper and repository URL works.
- Decide whether the public-facing university email and research claims are suitable.
- Do **not** upload the 14-page Master CV, internal research blueprints, project credentials, or private experiment logs.
- Add a role-specific, publicly safe CV later if you want a download button.
- Do not describe code as released if the corresponding public repository is not available.
- Validate responsive layout and keyboard navigation after deploying.

## Notes

The initial website includes published/accepted work, a public preprint, and an openly accessible repository. Unreleased engineering projects are intentionally not listed as individual projects until approved for public description.

## Existing public repositories considered

- Codex_Loop_Harness is an open governance and workflow toolkit, so a concise public description is included.
- SwitchCodexPlus is not featured by default: its public README describes sensitive credential handling and permissive execution configuration, which merits security review before recommending it to others.
