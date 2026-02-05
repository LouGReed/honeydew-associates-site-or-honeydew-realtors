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

const BASE = '/assets/imagery/Pexel Assets/Honeydew Pexel Assets';
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

/** Gallery separator after work image 2 */
export const gallerySep1: PexelImage = {
  src: `${BASE}/pexels-falling4utah-1080721.jpg`,
  alt: 'Sunlit home interior',
  width: 6000,
  height: 4000,
  orientation: 'horizontal',
};

/** Gallery separator after work image 4 */
export const gallerySep2: PexelImage = {
  src: `${BASE}/pexels-ron-lach-10398346.jpg`,
  alt: 'Quiet moment at home',
  width: 3928,
  height: 5892,
  orientation: 'vertical',
};

/** Editorial band between Gallery and Services */
export const postGalleryBand: PexelImage = {
  src: `${FAV}/windowlightshadowcinematic.jpg`,
  alt: 'Window light in a quiet interior',
  width: 4926,
  height: 3284,
  orientation: 'horizontal',
};

/** Services section — side figure */
export const servicesFigure: PexelImage = {
  src: `${BASE}/pexels-ioanamtc-12814943.jpg`,
  alt: 'Minimalist home detail',
  width: 3456,
  height: 5184,
  orientation: 'vertical',
};

/** Calm break before Contact section */
export const preContactBand: PexelImage = {
  src: `${FAV}/backyardwillowtree.jpg`,
  alt: 'Serene backyard scene',
  width: 5712,
  height: 4284,
  orientation: 'horizontal',
};
