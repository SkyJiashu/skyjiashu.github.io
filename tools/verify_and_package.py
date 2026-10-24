"""Validate local static-site boundaries and build an allowlisted deployment ZIP."""
from __future__ import annotations

from collections import Counter
from hashlib import sha256
from html.parser import HTMLParser
import json
from pathlib import Path
import subprocess
from urllib.parse import unquote, urlsplit
from zipfile import ZIP_DEFLATED, ZipFile

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "skyjiashu.github.io"
FILES = (
    "index.html", "styles.css", "script.js", "favicon.svg", ".nojekyll",
    "README.md", "ASSET-CREDITS.md", "assets/disentangleformer-architecture.jpg",
)


class Inspector(HTMLParser):
    """Collect local links and accessibility-relevant markup."""
    def __init__(self) -> None:
        super().__init__()
        self.ids: list[str] = []
        self.local_assets: list[str] = []
        self.anchors: list[str] = []
        self.missing_alt: list[str] = []
        self.unsafe_blank: list[str] = []

    def handle_starttag(self, tag: str, attributes: list[tuple[str, str | None]]) -> None:
        attrs = dict(attributes)
        if attrs.get("id"):
            self.ids.append(str(attrs["id"]))
        if tag == "img" and not attrs.get("alt"):
            self.missing_alt.append(str(attrs.get("src")))
        if tag == "a" and attrs.get("target") == "_blank":
            if "noopener" not in str(attrs.get("rel", "")).split():
                self.unsafe_blank.append(str(attrs.get("href")))
        for attribute in ("src", "href"):
            reference = attrs.get(attribute)
            if not reference:
                continue
            if reference.startswith("#"):
                self.anchors.append(reference[1:])
            else:
                parsed = urlsplit(reference)
                if not parsed.scheme and not parsed.netloc:
                    self.local_assets.append(unquote(parsed.path))


def main() -> None:
    """Run offline checks and package only the public website files."""
    checks: dict[str, bool] = {}
    checks["all_expected_files_present"] = all((SITE / name).is_file() for name in FILES)
    text = (SITE / "index.html").read_text(encoding="utf-8")
    inspector = Inspector()
    inspector.feed(text)
    checks["unique_html_ids"] = all(count == 1 for count in Counter(inspector.ids).values())
    checks["local_assets_resolve"] = all((SITE / name).is_file() for name in inspector.local_assets)
    checks["anchor_targets_resolve"] = set(inspector.anchors) <= set(inspector.ids)
    checks["images_have_alt_text"] = not inspector.missing_alt
    checks["new_tabs_have_noopener"] = not inspector.unsafe_blank
    checks["no_private_project_names_in_html"] = not any(
        name in text for name in ("AGOS", "AgentSMS", "MusicForYou", "YouziQuant")
    )
    checks["old_decorative_panel_removed"] = all(
        term not in text for term in ("hero-panel", "panel-art", "orbit-outer", "V×L")
    )
    checks["metric_scope_retained"] = all(
        term in text for term in ("Buffy", "64.60%", "87.39%", "+22.79", "FaceNet", "one dataset and metric")
    )
    checks["public_figure_hash_matches"] = sha256((SITE / FILES[-1]).read_bytes()).hexdigest() == (
        "ae2d447353df63a164e9a43e587b6a2951cd184bff225707a9dfc01c51ece4ae"
    )
    syntax = subprocess.run(["node", "--check", str(SITE / "script.js")], capture_output=True, text=True, timeout=10)
    checks["javascript_syntax"] = syntax.returncode == 0
    manifest = {name: sha256((SITE / name).read_bytes()).hexdigest() for name in FILES}
    report = {"checks": checks, "sha256": manifest, "browser_testing": "Recorded separately; these are static/offline checks."}
    (ROOT / "validation.json").write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
    if not all(checks.values()):
        raise SystemExit(json.dumps(checks, indent=2))
    archive = ROOT / "SkyJiashu-Portfolio-V2-deploy.zip"
    with ZipFile(archive, "w", compression=ZIP_DEFLATED) as output:
        for name in FILES:
            output.write(SITE / name, arcname=name)
    print(json.dumps({"checks": checks, "archive": archive.name, "file_count": len(FILES), "sha256": manifest}, indent=2))


if __name__ == "__main__":
    main()
