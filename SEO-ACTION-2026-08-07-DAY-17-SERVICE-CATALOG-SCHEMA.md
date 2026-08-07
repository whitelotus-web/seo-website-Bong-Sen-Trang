# SEO action - Day 17 - Service catalog schema

Date: 2026-08-07

## Purpose

Clarify the actual Hanoi services offered by Bong Sen Trang for Google and other search engines without creating duplicate landing pages or adding unsupported claims.

## Implemented

- Added a stable `@id` for the homepage `LocalBusiness` entity.
- Reworked the homepage `OfferCatalog` into eight specific services. Each service now points to its canonical, indexable landing page and declares Hanoi as the service area.
- Included only services that already have a matching page on the website:
  - Signage installation
  - Aluminium letter signs
  - LED lightbox signs
  - LED blade signs
  - Storefront window decals
  - Reception logo backdrops
  - Restaurant menu signs
  - Sign repair
- Extended `npm run check:jsonld` so future edits fail if the homepage service catalog or one of the eight service URLs disappears.

## Expected effect

This is a consistency and entity-understanding improvement. It helps search engines connect the local business with the existing high-intent service pages; it does not guarantee a rich result or an immediate ranking increase.

## Next focus

Allow Google time to recrawl the custom-domain homepage and service pages. Continue improving pages only from real customer questions, project evidence, and Search Console query data instead of publishing more near-duplicate location pages.
