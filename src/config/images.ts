/**
 * Honeydew Image Manifest + Sequencing
 *
 * All image paths are relative to /public (served from web root).
 * Hero work images are always prioritized over Pexels imagery.
 */

import { BASE_PATH } from './basePath';

export interface ImageEntry {
  src: string;
  alt: string;
  position?: string; // CSS object-position for art-direction
}

// ─── Hero Slideshow (curated order — deterministic 01→04) ────────────
// Paths are human-readable with spaces; use encodeURI() at render time.
const HERO_DIR =
  `${BASE_PATH}/assets/imagery/Pexel Assets/Honeydew Pexel Assets/Pexel Favorites for Honeydew/slideshow/order`;

export const heroImages: ImageEntry[] = [
  { src: `${HERO_DIR}/01.jpg`, alt: 'Austin home — warm living space', position: 'center' },
  { src: `${HERO_DIR}/02.jpg`, alt: 'Modern kitchen ready for listing', position: 'center' },
  { src: `${HERO_DIR}/03.jpg`, alt: 'Bright interior after make-ready', position: 'center' },
  { src: `${HERO_DIR}/04.jpg`, alt: 'Staged room detail', position: 'center' },
];

// ─── Secondary Work Images (slideshow/scene-setter context) ─────────
export const workSlideImages: ImageEntry[] = [
  { src: `${BASE_PATH}/img/work/work-slide-01.png`, alt: 'Make-ready project in progress', position: 'center' },
  { src: `${BASE_PATH}/img/work/work-slide-02.png`, alt: 'Completed renovation detail', position: 'center' },
];

// ─── Pexels Lifestyle Images (secondary, never above fold) ──────────
export const pexelsImages: ImageEntry[] = [
  { src: `${BASE_PATH}/img/pexels/pexels-shuraeva.jpg`, alt: 'Family in a sunlit home', position: 'center' },
  { src: `${BASE_PATH}/img/pexels/pexels-abayev-5637755.jpg`, alt: 'Moving day excitement', position: 'center' },
  { src: `${BASE_PATH}/img/pexels/pexels-abayev-5638605.jpg`, alt: 'New home walkthrough', position: 'center' },
  { src: `${BASE_PATH}/img/pexels/pexels-ioanamtc.jpg`, alt: 'Bright modern interior', position: 'center' },
  { src: `${BASE_PATH}/img/pexels/pexels-lach-10044378.jpg`, alt: 'Living room lifestyle', position: 'center' },
  { src: `${BASE_PATH}/img/pexels/pexels-lach-10397939.jpg`, alt: 'Home life moment', position: 'center' },
];

// ─── Gallery Images (all pexels favorites for editorial gallery) ────
export const galleryImages: ImageEntry[] = [
  { src: `${BASE_PATH}/img/pexels/gallery-shuraeva.jpg`, alt: 'Family settling into new home' },
  { src: `${BASE_PATH}/img/pexels/gallery-abayev-5637755.jpg`, alt: 'Unpacking in a bright space' },
  { src: `${BASE_PATH}/img/pexels/gallery-abayev-5638605.jpg`, alt: 'Home tour with family' },
  { src: `${BASE_PATH}/img/pexels/gallery-ioanamtc-943.jpg`, alt: 'Minimalist interior detail' },
  { src: `${BASE_PATH}/img/pexels/gallery-ioanamtc-079.jpg`, alt: 'Clean architectural lines' },
  { src: `${BASE_PATH}/img/pexels/gallery-lach-8657206.jpg`, alt: 'Lifestyle moment at home' },
  { src: `${BASE_PATH}/img/pexels/gallery-lach-10044378.jpg`, alt: 'Comfortable living space' },
  { src: `${BASE_PATH}/img/pexels/gallery-lach-10397939.jpg`, alt: 'Warm home interior' },
  { src: `${BASE_PATH}/img/pexels/gallery-karpovich.jpg`, alt: 'Everyday home scene' },
];

// ─── Standout Full-Bleed Images (for feature breaks) ───────────────
export const standoutImages: ImageEntry[] = [
  { src: `${BASE_PATH}/img/standout/standout-01.jpg`, alt: 'Austin neighborhood', position: 'center' },
];

// ─── Validation Logos ───────────────────────────────────────────────
export const validationLogos = [
  { src: `${BASE_PATH}/img/validation/compass.png`, alt: 'Compass', width: 1080, height: 1080, href: 'https://www.compass.com/' },
  { src: `${BASE_PATH}/img/validation/sicara.png`, alt: 'Sicara Design', width: 1600, height: 1600, href: 'https://www.sicaradesign.com/' },
  { src: `${BASE_PATH}/img/validation/texas-realtors.png`, alt: 'Texas Realtors', width: 4096, height: 4096, href: 'https://www.texasrealestate.com/' },
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
