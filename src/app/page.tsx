import {
  HeroSlideshow,
  Intro,
  Gallery,
  EditorialImage,
  Services,
  Process,
  ImageBand,
  Validation,
  Contact,
} from '@/components';
import { postGalleryBand, preContactBand } from '@/config/pexels';

export default function HomePage() {
  return (
    <>
      {/* Hero — Full viewport slideshow */}
      <HeroSlideshow />

      {/* Intro — Two-column: copy + vertical Pexels portrait */}
      <Intro />

      {/* Gallery — Work images with Pexels separators interleaved */}
      <Gallery />

      {/* Editorial band (H) — transition to services */}
      <EditorialImage image={postGalleryBand} />

      {/* Services — Cards + vertical Pexels sidebar */}
      <Services />

      {/* Process — How it works */}
      <Process />

      {/* Featured image — Full bleed break */}
      <ImageBand />

      {/* Validation — Trust signals */}
      <Validation />

      {/* Editorial band (H) — calm break before contact */}
      <EditorialImage image={preContactBand} caption="On-site coordination" />

      {/* Contact — CTA + Form */}
      <Contact />
    </>
  );
}
