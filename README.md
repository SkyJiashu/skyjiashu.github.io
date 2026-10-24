# Jiashu Liao — Research & Engineering Portfolio

Version 2: an evidence-led, responsive personal website. Static HTML, CSS and JavaScript; no framework, API credentials, tracking, external fonts or build service required at runtime.

## Preview

Open `index.html` in a browser, or run `python -m http.server 8000` from this directory and visit `http://localhost:8000`.

## Deploy to the existing GitHub Pages site

Repository: `SkyJiashu/skyjiashu.github.io`.

Upload **all contents of this directory** into the repository root, keeping `assets/` as a subfolder. Replace the existing HTML, CSS, JavaScript, favicon and README. Include `.nojekyll`.

Keep the current Pages configuration: **Deploy from a branch → main → /(root)**. No repository rename or new hosting setup is needed.

After the deployment succeeds, check the page at https://skyjiashu.github.io/ and hard-refresh the browser if cached styles remain.

## Files

```text
index.html
styles.css
script.js
favicon.svg
.nojekyll
README.md
ASSET-CREDITS.md
assets/
  disentangleformer-architecture.jpg
```

Only this site directory belongs in the public repository. The sibling `tools/` folder, local validation reports, and any private source records are not required for publication.

## Editing

- `index.html`: biography, research, authors, links, employment and education.
- `styles.css`: editorial layout, responsive breakpoints, light/dark themes, print styles.
- `script.js`: optional theme preference, mobile navigation and image-error fallback.
- `ASSET-CREDITS.md`: figure provenance and source boundaries.

The page remains readable and navigable with JavaScript disabled. Navigation closes on Escape, outside clicks and link activation; preferences failing to save do not block the site.

## Content policy

Only approved biography, research and public repository material is included. Published work, accepted papers and preprints are explicitly distinguished. The VISTA chart labels its dataset, metric, matched baseline and source scope. It does not imply improvements on every benchmark or end-to-end throughput claims.

Do not add an unpublished project, private experiment logs, a master CV, an unverified code link, a generated portrait, or a synthetic research image as if it were measured evidence.
