# V2 browser validation

Validated on 24 October 2026 using Chromium / Playwright.

## Test method and limits

The browser runner disallowed local HTTP and file URL navigation. The tests therefore rendered the site's HTML and CSS using `page.set_content`, then loaded the same JavaScript source. The published website has not been updated or re-tested online.

The public figure's original JPEG bytes, dimensions and SHA-256 were independently verified in the Tunnel workspace. The browser suite exercised the missing-image fallback; it did not claim to test a live image request. The delivered website includes the real local image file, not a placeholder.

HTML SHA-256: `b90acbcb2d123ad0eb59cb8a15bd27b5341ae721c83c70a0ca37dc081aa3ca78`.

JavaScript SHA-256: `f366ba829de45b13ea077fbc28c7a282ce987e4516311b257dd38642bf7a909e`.

## Results

- Viewport widths: 320, 360, 390, 540, 768, 1024 and 1440 pixels.
- Light and dark mode at each width: 14 combinations, all passed.
- No horizontal document overflow at the tested sizes.
- No JavaScript runtime exceptions observed.
- Theme toggle and method-details expansion passed.
- Mobile menu opens, focuses its first link, closes on Escape and returns focus to its toggle.
- Selecting a navigation link closes the mobile menu.
- With JavaScript disabled, content and navigation remain available.
- Reduced-motion preference disables smooth scrolling.
- Denied localStorage does not interrupt rendering or interactions.
- Result bars use 64.60% and 87.39% of a full 0–100% scale.
- Image failure leaves the original-source link available instead of a broken-image icon.

No full WCAG certification, cross-browser certification, exhaustive external-link audit, or live GitHub Pages deployment is implied by these checks.
