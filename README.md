# Jiashu Liao — Research & Engineering Portfolio · V3

A static portfolio with five source-grounded research pages and real publication figures.

## Deploy

Upload the CONTENTS of this folder to the root of `SkyJiashu/skyjiashu.github.io`.
`index.html` must appear at the root, alongside `assets/` and `research/`.
Keep GitHub Pages set to `main` / `/(root)`. Do not upload the outer release folder or the ZIP itself.
The `.nojekyll` file is included; enable hidden files in your file picker if needed.

## Public website files

- `index.html`: portfolio homepage; original V2 biography, experience, education and engineering sections retained.
- `styles.css`, `script.js`, `favicon.svg`: unchanged V2 base assets.
- `research.css`, `gallery.js`: scoped research-page styles and accessible figure enlargement.
- `research/`: VISTA, DisentangleFormer, Mask Rotate / RMAGAN, FRGAN, and ASN.
- `assets/papers/`: 16 local source figures, each with a preview and a full-size lossless WebP.
- `ASSET-CREDITS.md`: figure source, numbering and rights notices.

## External images

Three DisentangleFormer figures are referenced from the author's arXiv v1 source.
They are NOT bundled in this deployment ZIP and need Internet access. Their original image URLs
were retrieved successfully through the connected research workspace. Offline rendering shows a
source-link fallback instead. All 16 images extracted from the supplied PDFs/PNGs are local.
There are no remote font, JavaScript, CSS, analytics or tracking dependencies.

The release includes no full institutional/publisher PDFs, no private research projects, no tokens
and no 14-page master CV. Figure excerpts are supplied for the author's portfolio; IEEE notices
are retained and are not replaced by a blanket open-source licence.

## Maintenance

Use `Project & figures` to reach the corresponding research page. Images are lazy-loaded and
can be enlarged with a mouse or keyboard. Escape closes the figure viewer and restores focus.
Without JavaScript, figure links still open the image. CSS/JS references use content-hash
query strings; update the version whenever the referenced asset changes.

The HTML, figures and captions are hand-curated; no experimental results were generated or
retouched. See ASSET-CREDITS.md for image transformations and original sources.
