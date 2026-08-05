# SEO day 16 - Faster mobile hero image

Date: 2026-08-05

## Audit finding

Lighthouse mobile identified the homepage hero background as the Largest Contentful Paint element.

- LCP: about 3.5 seconds in the local Lighthouse run.
- The hero image was a 1,600 x 1,200 JPEG at 394,639 bytes.
- Lighthouse estimated about 133 KiB could be saved by using a modern image format.

## Change

- Added a WebP version of the actual Bếp Bà Sơn Hội An project image at 224,902 bytes.
- Preloaded WebP as the high-priority homepage image.
- Updated the hero CSS to prefer WebP and retain JPEG as a fallback.
- Added content-hashed query versions to the CSS and JavaScript files in deploy output so browsers do not remain stuck on a previous immutable cached stylesheet after a future release.

## Expected result

The homepage should paint its largest visual sooner on mobile connections while preserving the same visible image, page layout, metadata and social sharing image.

## Verification after build

- SEO check must remain clean for all pages.
- JSON-LD must remain valid.
- Live Lighthouse should no longer flag the hero image for modern-format savings.
