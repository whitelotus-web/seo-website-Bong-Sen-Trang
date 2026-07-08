# SEO action 2026-07-08 - Them favicon chuan

## Muc tieu

- Hien logo/icon cua website tren tab trinh duyet va tin hieu site identity.
- Dung duong dan favicon root de trinh duyet va Google de nhan dien hon.

## Da thuc hien

- Tao `/favicon.ico`.
- Tao `/favicon-16x16.png`, `/favicon-32x32.png`, `/favicon-48x48.png`.
- Tao `/apple-touch-icon.png`.
- Tao `/android-chrome-192x192.png`, `/android-chrome-512x512.png`.
- Tao `/site.webmanifest`.
- Cap nhat tat ca template/trang HTML sang icon root:
  - `/favicon.ico`
  - `/favicon-32x32.png`
  - `/favicon-16x16.png`
  - `/apple-touch-icon.png`
  - `/site.webmanifest`

## Kiem tra

- `npm run build`: pass
- `npm run check:seo`: pass, 286 pages
- `npm run check:jsonld`: pass, 287 blocks
- Live:
  - `https://lambienquangcaohanoi.io.vn/favicon.ico`: 200
  - `https://lambienquangcaohanoi.io.vn/favicon-32x32.png`: 200
