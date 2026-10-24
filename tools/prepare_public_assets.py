"""Build the site's image assets from explicitly approved public sources.

No research workspace is scanned. Existing, unexpected files are never replaced.
"""
from __future__ import annotations

import hashlib
from pathlib import Path
import urllib.error
import urllib.request

SOURCE = "https://arxiv.org/html/2512.04314v1/Img/CVPRNewFigure.jpg"
EXPECTED_SHA256 = "ae2d447353df63a164e9a43e587b6a2951cd184bff225707a9dfc01c51ece4ae"
DESTINATION = Path(__file__).resolve().parents[1] / "skyjiashu.github.io" / "assets" / "disentangleformer-architecture.jpg"


def main() -> None:
    """Retrieve the author's published architecture figure without altering it."""
    if DESTINATION.exists():
        current = hashlib.sha256(DESTINATION.read_bytes()).hexdigest()
        if current != EXPECTED_SHA256:
            raise SystemExit("Existing asset differs; refusing to overwrite it.")
        print(f"Verified existing asset: {DESTINATION.relative_to(DESTINATION.parents[2])}")
        return
    request = urllib.request.Request(SOURCE, headers={"User-Agent": "PortfolioAssetBuilder/2.0"})
    try:
        with urllib.request.urlopen(request, timeout=25) as response:
            data = response.read(2_000_001)
    except (urllib.error.URLError, TimeoutError) as exc:
        raise SystemExit(f"Public asset download failed: {exc}") from exc
    if len(data) > 2_000_000 or not data.startswith(b"\xff\xd8"):
        raise SystemExit("Unexpected asset format or size.")
    digest = hashlib.sha256(data).hexdigest()
    if digest != EXPECTED_SHA256:
        raise SystemExit(f"Source changed; refusing to use unverified bytes: {digest}")
    DESTINATION.parent.mkdir(parents=True, exist_ok=True)
    with DESTINATION.open("xb") as output:
        output.write(data)
    print(f"Built public figure: {len(data)} bytes; SHA256 {digest}")


if __name__ == "__main__":
    main()
