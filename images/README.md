# El Patio Restaurant — Image Requirements

All images should be high-quality JPG or WebP format. Place each file in this `/images/` folder,
then update the corresponding section in `index.html` (look for `<!-- REPLACE: ... -->` comments).

---

## Required Images

### 1. Hero Background
- **Filename:** `hero-image.jpg`
- **Dimensions:** 1920 × 1080 px (16:9 landscape)
- **Subject suggestions:**
  - Vibrant, colorful spread of signature dishes (Bandeja Paisa, empanadas, Limonada de Coco)
  - Restaurant interior during a lively Friday/Saturday night (warm lighting, people laughing)
  - Aerial overhead shot of multiple dishes on a table
  - Festive outdoor patio shot with string lights
- **Notes:** Will be used as `background-image` on the hero section. Should be warm, vibrant, and
  richly colored. Avoid very dark or low-contrast images — text overlays must remain readable.
- **How to apply:**
  ```css
  /* In style.css, inside the .hero rule, add: */
  background-image: url('images/hero-image.jpg');
  ```

---

### 2. About Section — Main Image (left card, top)
- **Filename:** `about-1.jpg`
- **Dimensions:** 600 × 800 px (3:4 portrait)
- **Subject suggestions:**
  - Plated Bandeja Paisa — the hero dish, beautifully styled
  - Close-up of a golden empanada with a side of hot sauce
  - Ceviche de Chicharrón in a bowl with citrus and herbs
  - A steaming bowl of Ajiaco with corn and potato
- **Notes:** Displayed in the top-left position on the About section's staggered image grid.
  Warm, food-forward photography. Good natural or warm artificial lighting.
- **How to apply:** Replace the `.about-img--main .img-placeholder` div with:
  ```html
  <img src="images/about-1.jpg" alt="Bandeja Paisa at El Patio" loading="lazy" />
  ```

---

### 3. About Section — Offset Image (right card, bottom)
- **Filename:** `about-2.jpg`
- **Dimensions:** 600 × 800 px (3:4 portrait)
- **Subject suggestions:**
  - Warm, inviting restaurant interior — tables set, string lights, Latin décor
  - Family or group of friends enjoying a meal together at El Patio
  - Owner or staff smiling — personal, authentic feel
  - Weekend night scene — bar area with cocktails, festive energy
- **Notes:** Displayed overlapping the first image, slightly offset. Should complement `about-1.jpg`
  visually. Lifestyle / ambiance photo rather than pure food.
- **How to apply:** Replace the `.about-img--offset .img-placeholder` div with:
  ```html
  <img src="images/about-2.jpg" alt="El Patio restaurant interior" loading="lazy" />
  ```

---

## Optional / Recommended

### 4. Open Graph / Social Share Preview
- **Filename:** `og-image.jpg`
- **Dimensions:** 1200 × 630 px
- **Subject:** Same as hero or best food photo with restaurant name overlaid
- **Notes:** Add to `index.html` `<head>`:
  ```html
  <meta property="og:image" content="https://yourdomain.com/images/og-image.jpg" />
  ```

### 5. Favicon
- **Filename:** `favicon.png` (and optionally `favicon.ico`)
- **Dimensions:** 512 × 512 px (will be auto-scaled)
- **Subject:** Simple logo mark — "EP" initials, a patio/sun icon, or Colombian flag colors
- **Notes:** Add to `index.html` `<head>`:
  ```html
  <link rel="icon" href="images/favicon.png" type="image/png" />
  ```

---

## Photography Tips

- **Lighting:** Natural window light or warm Edison-bulb restaurant lighting works best
- **Style:** Avoid over-filtered Instagram edits — aim for natural, warm, slightly saturated
- **Color palette match:** Red, gold, and green tones will complement the site's Colombian palette
- **Free stock photo sources** (if real photos aren't available yet):
  - [Unsplash](https://unsplash.com) — search "Colombian food", "Latin restaurant", "empanadas"
  - [Pexels](https://pexels.com) — similar searches
  - [Pixabay](https://pixabay.com)

---

*Once real restaurant photos are available, replace the gradient placeholders for maximum impact.*
