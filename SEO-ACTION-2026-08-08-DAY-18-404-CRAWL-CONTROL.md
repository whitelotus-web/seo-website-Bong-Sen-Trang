# SEO action - Day 18 - 404 crawl control

Date: 2026-08-08

## Issue found

The site had no top-level `404.html`. Cloudflare Pages therefore treated unmatched requests as single-page application routes and served the homepage with an HTTP 200 response.

Direct checks confirmed that a made-up URL, `/wp-admin/`, and a missing CSS asset all returned HTTP 200 before this fix.

## Fix

- Added a top-level `404.html` with a human-friendly recovery path, absolute asset URLs, and `noindex,follow`.
- Updated the deploy build to include `404.html` in `dist` and version its stylesheet reference with the other HTML files.
- Extended the SEO check to require a 404 page and its `noindex,follow` directive.

## Expected effect

Cloudflare Pages will now serve a genuine HTTP 404 for paths that do not exist instead of serving a duplicate homepage. This reduces the risk of crawl waste and soft-404/duplicate URL signals.

## Verification after deploy

Test a random path and a missing asset on the custom domain. Both should return HTTP 404. Existing service URLs must remain HTTP 200.
