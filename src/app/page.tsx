import {
  HeroSlideshow,
  Intro,
  Services,
  Process,
  ImageBand,
  Gallery,
  Validation,
  Contact,
} from '@/components';

export default function HomePage() {
  return (
    <>
      {/* Hero - Full viewport slideshow */}
      <HeroSlideshow />

      {/* Intro - Centered editorial text */}
      <Intro />

      {/* Gallery - Full-width image sequence */}
      <Gallery />

      {/* Services - What we do */}
      <Services />

      {/* Process - How it works */}
      <Process />

      {/* Featured Image - Full bleed break */}
      <ImageBand />

      {/* Validation - Trust signals */}
      <Validation />

      {/* Contact - CTA + Form */}
      <Contact />
    </>
  );
}
