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

      {/* Services - What we do */}
      <Services />

      {/* Process - How it works */}
      <Process />

      {/* Featured Image - Full bleed break */}
      <ImageBand />

      {/* Gallery - Portfolio / Work */}
      <Gallery />

      {/* Validation - Trust signals */}
      <Validation />

      {/* Contact - CTA + Form */}
      <Contact />
    </>
  );
}
