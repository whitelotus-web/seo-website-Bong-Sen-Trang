# SEO action - Day 20 - Document cache freshness

Date: 2026-08-10

## Issue found

The global Pages headers overrode the CDN cache policy for every document with a five-minute fresh lifetime and a one-day stale-while-revalidate window. This can delay the custom domain from serving updated title, description, canonical, and structured-data changes immediately after a production deployment.

## Fix

- Removed the global `CDN-Cache-Control` override for HTML documents.
- Retained immutable one-year caching only for `/assets/`, whose CSS and JavaScript URLs are versioned during the build.
- Added a guard to the SEO check so a global HTML cache override cannot be reintroduced accidentally.

## Expected effect

Cloudflare Pages can use its deployment-aware document caching defaults, while assets remain fast. Search engine fetches and visitors receive the current HTML sooner after future SEO updates.
