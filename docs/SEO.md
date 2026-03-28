# MyPetBook – SEO Guide

This document describes the SEO setup for the Next.js site and how to maintain or improve it.

## What’s Already Implemented

### 1. **Metadata (Next.js App Router)**
- **Root layout** (`src/app/layout.tsx`): `metadataBase`, title template (`%s | MyPetBook`), default description, keywords, authors, Open Graph, Twitter Card, robots, and canonical.
- **Per-route metadata**: Each important page has its own `title`, `description`, and Open Graph fields via either:
  - `export const metadata` in the page (e.g. About, Blog, Features, Terms, Privacy), or
  - A route `layout.tsx` that exports `metadata` (e.g. Pricing, Marketplace, Directory, Contact, Community, For Vets, For Pet Shops).
- **Auth** (`/auth`): Marked with `robots: { index: false, follow: false }` so login/signup are not indexed.

### 2. **Sitemap**
- **File**: `src/app/sitemap.ts`
- **URL**: `https://your-domain.com/sitemap.xml`
- All public pages are listed with priorities and `lastModified` / `changeFrequency`. Auth is intentionally excluded.

### 3. **Robots.txt**
- **File**: `src/app/robots.ts`
- **URL**: `https://your-domain.com/robots.txt`
- Allows all crawlers on `/`, disallows `/api/`, and points to the sitemap.

### 4. **Structured Data (JSON-LD)**
- **Component**: `src/components/JsonLd.tsx`
- Injected in the root layout.
- **Organization**: name, url, logo, description, sameAs (social), contactPoint.
- **WebSite**: name, url, description, publisher, and a `SearchAction` for the directory (e.g. `/directory?q={search_term_string}`).

### 5. **Open Graph & Twitter**
- Default OG/Twitter title, description, and image are set in the root layout.
- Image used: `/opengraph.png` (see “Assets to add” below).

---

## Assets You Should Add

1. **Favicon / app icon**
   - Add `app/icon.png` (or `app/icon.ico`) for the browser tab and PWA.
   - Or put `favicon.ico` / `icon.png` in `public/`. JSON-LD currently references `/icon.png` for the organization logo.

2. **Open Graph image**
   - Add **`public/opengraph.png`** (recommended: **1200×630 px**) so link previews on social and messaging apps look correct.
   - If you prefer the file-based API route, you can add `app/opengraph-image.png` (or a dynamic `opengraph-image.tsx`) and remove the `images` entry from root `metadata` to avoid duplication.

3. **Twitter / OG image**
   - The same `opengraph.png` is used for Twitter. If you want a different one, set `metadata.twitter.images` in the root layout.

---

## Environment Variable

- **`NEXT_PUBLIC_SITE_URL`**: Set this in Vercel (and locally) to your production URL (e.g. `https://mypetbook.app`).
- Used for: `metadataBase`, sitemap URLs, robots.txt sitemap URL, and JSON-LD `url` / `logo` / search target.

---

## Optional Improvements

1. **Blog posts**: When you have dynamic blog routes (e.g. `/blog/[slug]`), add `generateMetadata` and include each post in the sitemap (and optionally add `Article` or `BlogPosting` JSON-LD).
2. **Canonical URLs**: The root layout sets a default canonical. For pages that can be reached by multiple URLs, set `metadata.alternates.canonical` in that route’s layout or page.
3. **Local business / FAQs**: For the directory or contact page, you can add more JSON-LD (e.g. `LocalBusiness`, `FAQPage`) in the relevant layout or page.
4. **Social links**: Update the `sameAs` array in `src/components/JsonLd.tsx` with your real Twitter, Facebook, LinkedIn, etc. when available.
5. **Analytics**: Use Vercel Analytics or add Google Search Console + Google Analytics (or similar) and verify the domain; no code changes are required for the current SEO setup.

---

## Verifying SEO

- **Sitemap**: Open `https://your-domain.com/sitemap.xml` and confirm all public pages are listed.
- **Robots**: Open `https://your-domain.com/robots.txt` and check the sitemap URL.
- **Structured data**: Use [Google Rich Results Test](https://search.google.com/test/rich-results) or the “Structured data” report in Search Console.
- **Previews**: Use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) and [Twitter Card Validator](https://cards-dev.twitter.com/validator) (or similar) to check OG/Twitter previews.
- **Indexing**: In Google Search Console, submit the sitemap URL and monitor “Coverage” and “Enhancements” (e.g. mobile usability, structured data).

---

## Summary

The site is set up for solid SEO on Vercel: unique metadata per page, sitemap, robots.txt, JSON-LD (Organization + WebSite), and sensible defaults for OG/Twitter. Add `NEXT_PUBLIC_SITE_URL`, `public/opengraph.png`, and an app/icon or favicon, then verify with the tools above.
