# SEO action - Day 19 - Search intent clarity

Date: 2026-08-10

## Issue found

The homepage and the Hanoi local hub used the same H1: `Lam bien quang cao tai Ha Noi`. The two pages therefore competed for the same broad query, while the hub content was already better suited to a narrower need: choosing a sign solution from a real storefront and installation context.

## Fix

- Repositioned `/lam-bien-quang-cao-ha-noi/` around `Tu van lam bien theo mat bang tai Ha Noi`.
- Updated the title, meta description, Open Graph metadata, social metadata, visible hero, breadcrumb, and Service JSON-LD to match that intent.
- Added a check that fails the SEO build when two indexable pages share the same H1.

## Expected effect

The homepage remains the primary landing page for the broad Hanoi query. The local hub can now earn visibility for a distinct planning need and channel visitors toward the material, price, district, and contact pages that match their storefront.
