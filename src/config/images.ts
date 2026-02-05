/**
 * Honeydew Image Manifest + Sequencing
 *
 * All image paths are relative to /public (served from web root).
 * Hero work images are always prioritized over Pexels imagery.
 */

export interface ImageEntry {
  src: string;
  alt: string;
  position?: string; // CSS object-position for art-direction
}

// ─── Hero Work Images (their actual work, highest priority) ─────────
export const heroImages: ImageEntry[] = [
  { src: '/img/hero/hero-01.png', alt: 'Freshly finished Austin home interior', position: 'center' },
  { src: '/img/hero/hero-02.png', alt: 'Modern kitchen turnover complete', position: 'center' },
  { src: '/img/hero/hero-03.png', alt: 'Clean bright living space ready for listing', position: 'center' },
  { src: '/img/hero/hero-04.png', alt: 'Detail work on Austin property', position: 'center' },
  { src: '/img/hero/hero-05.png', alt: 'Pre-listing preparation complete', position: 'center 30%' },
  { src: '/img/hero/hero-06.png', alt: 'Staged home ready for photographer', position: 'center' },
];

// ─── Secondary Work Images (slideshow/scene-setter context) ─────────
export const workSlideImages: ImageEntry[] = [
  { src: '/img/work/work-slide-01.png', alt: 'Make-ready project in progress', position: 'center' },
  { src: '/img/work/work-slide-02.png', alt: 'Completed renovation detail', position: 'center' },
];

// ─── Pexels Lifestyle Images (secondary, never above fold) ──────────
export const pexelsImages: ImageEntry[] = [
  { src: '/img/pexels/pexels-shuraeva.jpg', alt: 'Family in a sunlit home', position: 'center' },
  { src: '/img/pexels/pexels-abayev-5637755.jpg', alt: 'Moving day excitement', position: 'center' },
  { src: '/img/pexels/pexels-abayev-5638605.jpg', alt: 'New home walkthrough', position: 'center' },
  { src: '/img/pexels/pexels-ioanamtc.jpg', alt: 'Bright modern interior', position: 'center' },
  { src: '/img/pexels/pexels-lach-10044378.jpg', alt: 'Living room lifestyle', position: 'center' },
  { src: '/img/pexels/pexels-lach-10397939.jpg', alt: 'Home life moment', position: 'center' },
];

// ─── Gallery Images (all pexels favorites for editorial gallery) ────
export const galleryImages: ImageEntry[] = [
  { src: '/img/pexels/gallery-shuraeva.jpg', alt: 'Family settling into new home' },
  { src: '/img/pexels/gallery-abayev-5637755.jpg', alt: 'Unpacking in a bright space' },
  { src: '/img/pexels/gallery-abayev-5638605.jpg', alt: 'Home tour with family' },
  { src: '/img/pexels/gallery-ioanamtc-943.jpg', alt: 'Minimalist interior detail' },
  { src: '/img/pexels/gallery-ioanamtc-079.jpg', alt: 'Clean architectural lines' },
  { src: '/img/pexels/gallery-lach-8657206.jpg', alt: 'Lifestyle moment at home' },
  { src: '/img/pexels/gallery-lach-10044378.jpg', alt: 'Comfortable living space' },
  { src: '/img/pexels/gallery-lach-10397939.jpg', alt: 'Warm home interior' },
  { src: '/img/pexels/gallery-karpovich.jpg', alt: 'Everyday home scene' },
];

// ─── Standout Full-Bleed Images (for feature breaks) ───────────────
export const standoutImages: ImageEntry[] = [
  { src: '/img/standout/standout-01.jpg', alt: 'Austin neighborhood', position: 'center' },
  { src: '/img/standout/standout-02.jpg', alt: 'Home exterior at golden hour', position: 'center' },
];

// ─── Validation Logos ───────────────────────────────────────────────
export const validationLogos = [
  { src: '/img/validation/compass.png', alt: 'Compass' },
  { src: '/img/validation/sicara.png', alt: 'Sicara Design' },
  { src: '/img/validation/texas-realtors.png', alt: 'Texas Realtors' },
];

// ─── Sequencing Utilities ──────────────────────────────────────────

/**
 * Hero rotation: work-only images, repeated 2 full cycles
 * before any pexels would be shown. For the hero, we only
 * use the 6 work images and loop them.
 */
export function getHeroRotation(): ImageEntry[] {
  return [...heroImages];
}

/**
 * Intercut rotation: alternating work → pexels → work → pexels
 * Work pool: hero images first, then work slide images.
 * Pexels pool: pexels slideshow images.
 */
export function getIntercutRotation(): ImageEntry[] {
  const workPool = [...heroImages, ...workSlideImages];
  const pexPool = [...pexelsImages];
  const result: ImageEntry[] = [];

  const maxLen = Math.max(workPool.length, pexPool.length);
  for (let i = 0; i < maxLen; i++) {
    if (i < workPool.length) result.push(workPool[i]);
    if (i < pexPool.length) result.push(pexPool[i]);
  }

  return result;
}
