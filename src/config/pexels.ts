/**
 * Pexels Editorial Placements
 *
 * Single source of truth for all Pexels lifestyle images used as
 * supporting photography throughout the site. Orientation is derived
 * from actual pixel dimensions measured at build time.
 *
 * Paths are human-readable (contain spaces) — use encodeURI() at render.
 */

export type Orientation = 'horizontal' | 'vertical';

export interface PexelImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  orientation: Orientation;
}

import { BASE_PATH } from './basePath';

const BASE = `${BASE_PATH}/assets/imagery/Pexel Assets/Honeydew Pexel Assets`;
const FAV = `${BASE}/Pexel Favorites for Honeydew`;

// ─── Assigned Placements ──────────────────────────────────────────

/** Intro section — right column portrait */
export const introPortrait: PexelImage = {
  src: `${FAV}/momandkidsbreakfast.jpg`,
  alt: 'Family morning at home',
  width: 3890,
  height: 5835,
  orientation: 'vertical',
};

/** Gallery two-fecta — left (vertical) */
export const twoFectaLeft: PexelImage = {
  src: `${FAV}/fatherandkidsplaying.jpg`,
  alt: 'Father and kids playing at home',
  width: 2274,
  height: 3411,
  orientation: 'vertical',
};

/** Gallery two-fecta — right (vertical) */
export const twoFectaRight: PexelImage = {
  src: `${FAV}/grillingfood.jpg`,
  alt: 'Grilling food outdoors',
  width: 5461,
  height: 8192,
  orientation: 'vertical',
};

/** Services section — side figure */
export const servicesFigure: PexelImage = {
  src: `${BASE}/pexels-ioanamtc-12814943.jpg`,
  alt: 'Minimalist home detail',
  width: 3456,
  height: 5184,
  orientation: 'vertical',
};

