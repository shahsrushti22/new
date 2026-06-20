# Image Grid Guide — Responsive Grids, Images, and Best Practices

This document explains how to build responsive image grids (galleries, project grids) plus detailed guidance on using images effectively: responsive image markup (srcset / picture), lazy-loading, accessibility, performance optimization, and Tailwind-specific utilities for layouts.

---

## 1. Grid basics (CSS grid concepts)

- A grid organizes items in rows and columns. Key properties:
  - container: `display: grid;`
  - `grid-template-columns`: define columns (e.g., `repeat(3, 1fr)`)
  - `gap` (grid-gap): spacing between items
  - `grid-auto-rows`: control automatic row sizing
- For responsive layouts, use media queries or breakpoint utilities (Tailwind `sm:`, `md:`).

Example plain CSS:

- 3 column grid on desktop, 2 on tablet, 1 on mobile:
  .grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 1rem; }
  @media (min-width: 640px) { .grid { grid-template-columns: repeat(2, 1fr); } }
  @media (min-width: 1024px) { .grid { grid-template-columns: repeat(3, 1fr); } }

---

## 2. Tailwind utilities for grids

Tailwind provides utility classes that make grids concise:

- `grid` — sets display: grid
- `grid-cols-1`, `grid-cols-2`, `grid-cols-3`, ... — fixed column counts
- `sm:grid-cols-2`, `md:grid-cols-3` — responsive variants
- `gap-4`, `gap-x-6`, `gap-y-4` — spacing between grid items
- `col-span-2`, `row-span-2` — make an item span multiple columns/rows
- `auto-rows-fr` / `auto-rows-min` — for controlling row heights (configured with `grid-auto-rows` in Tailwind via plugin or custom utilities)

Tailwind example (3 / 2 / 1 responsive grid):

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- grid items -->
</div>

Use `aspect-[ratio]` (Tailwind v3+ or plugin) or `aspect-ratio` utilities to keep images consistent.

---

## 3. Image markup: <img>, srcset, sizes, and <picture>

Always provide carefully chosen `srcset` and `sizes` for responsive images. This allows the browser to download the appropriately sized image for device and viewport.

Basic `img` with srcset example:

<img
  src="assets/images/project-800.jpg"
  srcset="assets/images/project-400.jpg 400w, assets/images/project-800.jpg 800w, assets/images/project-1200.jpg 1200w"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  alt="Project screenshot"
  class="w-full h-48 object-cover rounded-lg"
  loading="lazy">

- `srcset` lists available sources with their intrinsic widths.
- `sizes` tells the browser how much space the image will take in the layout.
- The browser picks the best file to download.

`<picture>` for WebP + fallback:

<picture>
  <source type="image/webp" srcset="assets/images/project-800.webp 800w, assets/images/project-1200.webp 1200w">
  <source type="image/jpeg" srcset="assets/images/project-800.jpg 800w, assets/images/project-1200.jpg 1200w">
  <img src="assets/images/project-800.jpg" alt="Project screenshot" class="w-full h-48 object-cover rounded-lg" loading="lazy">
</picture>

This serves WebP-capable browsers modern formats while providing JPEG fallback.

---

## 4. Aspect ratio and object-fit

- Use `object-fit: cover` to crop images and preserve aspect ratio while filling the container.
- Tailwind utilities: `object-cover`, `object-contain` and size classes like `h-48`.
- Use the `aspect-w-*` / `aspect-h-*` utilities or the `aspect-ratio` plugin to maintain consistent image rectangles.

Example using Tailwind (assuming aspect-ratio plugin or built-in):

<div class="aspect-w-16 aspect-h-9">
  <img src="..." alt="..." class="object-cover rounded-lg" loading="lazy" />
</div>

If aspect utilities are unavailable, give fixed height plus `object-cover`.

---

## 5. Lazy-loading and performance

- Use `loading="lazy"` on `<img>` to defer offscreen images.
- Consider IntersectionObserver for custom lazy-loading to show placeholders until images load.
- Optimize images:
  - Resize to only the maximum needed widths.
  - Compress with tools like Squoosh, ImageOptim, or use automated tools in build (sharp, imagemin).
  - Generate WebP and AVIF for modern browsers.
- Use CDNs (Cloudinary, Imgix) to serve responsive images and convert formats on the fly.

Quick LQIP placeholder pattern:
- Provide a very small blurred base64 inline image as placeholder (background) while the full image loads.

---

## 6. Accessibility

- Always include meaningful `alt` text describing the image or its role (if purely decorative, `alt=""`).
- For gallery items, make keyboard navigation possible (tabindex or buttons) and provide focus styles.
- Include captions when context is required: use `<figure>` and `<figcaption>`.

Example:

<figure class="">
  <img src="assets/images/proj.jpg" alt="Dashboard showing revenue charts" class="w-full h-48 object-cover rounded-lg" loading="lazy">
  <figcaption class="text-sm text-gray-500 mt-2">Revenue dashboard — React, D3</figcaption>
</figure>

---

## 7. Example: full Tailwind image grid with captions

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <figure class="bg-white rounded-lg overflow-hidden shadow">
    <img src="assets/images/project-800.jpg" alt="E-commerce storefront" class="w-full h-48 object-cover" loading="lazy">
    <figcaption class="p-4">
      <h4 class="font-semibold">E-commerce</h4>
      <p class="text-sm text-gray-500">Storefront with payments</p>
    </figcaption>
  </figure>
  <!-- repeat items -->
</div>

Notes: replace `img` with `<picture>` and `srcset` for real projects.

---

## 8. Lightbox / modal for previews

- For larger previews, open a modal with the full-size image and keyboard controls (Esc to close, arrows to move).
- Libraries: GLightbox, PhotoSwipe, or implement a simple modal with `position: fixed` overlay.

Accessibility tips:
- Trap focus inside the modal while open.
- Restore focus to the triggering element on close.
- Provide descriptive alt or aria-labels in the modal.

---

## 9. Example: using srcset + Tailwind grid (practical checklist)

1. Prepare images at multiple widths: 400, 800, 1200.
2. Place them in `assets/images/` with descriptive names.
3. Use `picture` or `srcset` + `sizes` to deliver the right file.
4. Use Tailwind grid utilities for responsive layout.
5. Add `loading="lazy"` and `alt` attributes.
6. Compress and test using Lighthouse for performance.

---

## 10. Tools & resources

- Image optimization: Squoosh, ImageOptim, sharp, imagemin
- CDNs with transformations: Cloudinary, Imgix, Fastly Image Optimizer
- Lightbox libraries: PhotoSwipe, GLightbox, LightGallery
- Tailwind docs: https://tailwindcss.com/docs/gap
- Responsive images spec: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images

---

This guide should give you all the building blocks to create beautiful, responsive image grids with accessible markup and optimized delivery. Use Tailwind utilities to compose grids quickly and prefer responsive `srcset`/`picture` patterns in production.