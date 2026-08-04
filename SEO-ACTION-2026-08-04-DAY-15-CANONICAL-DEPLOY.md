# SEO day 15 - Canonical and production deployment safeguards

Date: 2026-08-04

## Purpose

Protect the primary SEO domain `https://lambienquangcaohanoi.io.vn/` while Google is still consolidating the new domain and indexing the site.

## Changes made

- Corrected `npm run deploy:cloudflare` so it deploys to Cloudflare Pages production. The prior `--branch=main` flag creates a branch preview for this Direct Upload project, which is not the desired publishing path for the custom domain.
- Strengthened `npm run check:seo` so it now fails when:
  - a page canonical URL is not the exact URL for that page;
  - `sitemap.xml` includes a URL outside the official domain;
  - a sitemap URL has no matching page;
  - a published page is missing from the sitemap;
  - `sitemap.xml` contains duplicate URLs.

## Why this matters

The site already has a healthy sitemap submission and a growing set of indexed URLs. The immediate technical SEO priority is keeping every future deployment consistent: one official domain, one canonical URL per page, and one complete sitemap.

## External Cloudflare task still required

The old `lam-bien-quang-cao-bong-sen-trang.pages.dev` hostname remains publicly reachable. It should be redirected at account level using a Cloudflare Bulk Redirect:

`https://lam-bien-quang-cao-bong-sen-trang.pages.dev/*`

to

`https://lambienquangcaohanoi.io.vn/:splat`

Use status `301`, preserve the path and preserve query parameters. This is an account-level Cloudflare setting, not an `_redirects` file rule.
