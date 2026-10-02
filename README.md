# Amit Photography — Free Photography Website

A clean, responsive photography portfolio that works on phones, tablets, laptops and desktops.

## What you get

- Elegant responsive design
- Home / hero section
- Filterable gallery
- Full-screen photo viewer
- Portrait / Travel / Nature / Events categories
- About section
- Contact form that opens the visitor's email app
- No database required
- No paid software required
- Easy content management through `config.js`
- Works with GitHub Pages, Cloudflare Pages or Netlify

## Change your website

Open `config.js`. The easiest things to change are:

1. `name` — your photography/business name
2. `tagline` — short slogan
3. `intro` — home-page introduction
4. `about` — About section
5. `email` — your real email address
6. `gallery` — add/remove photographs

Each gallery photo looks like this:

```js
{title:"Golden Hour",category:"Portraits",location:"Auckland, New Zealand",image:"YOUR-IMAGE-URL"}
```

Keep the categories exactly as they appear in `categories`.

## Free publishing

### Option A — GitHub Pages
1. Create a free GitHub account.
2. Create a public repository, for example `amit-photography`.
3. Upload all files from this folder.
4. In the repository, open Settings → Pages.
5. Select deployment from the main branch.
6. GitHub will give you a free website address.

You can edit `config.js` later from GitHub's web interface on a phone, tablet, laptop or desktop.

### Option B — Cloudflare Pages
Upload/connect this folder as a static site. It does not need a database or build process.

## Photos

For a serious photography site, replace the demo Unsplash image URLs with your own hosted image URLs. Keep web images around 1600–2400px wide and compress them to WebP/JPEG so the gallery stays fast.

## Important

The website itself is completely static and does not collect visitor data. The contact button uses the visitor's own email application (`mailto:`), so there is no paid email service or backend.

If you later want a true browser-based admin dashboard where you can upload photos, create albums and edit text from your phone without touching code, the next version can use a free CMS/backend. That is a separate setup because it requires authentication and persistent storage.
