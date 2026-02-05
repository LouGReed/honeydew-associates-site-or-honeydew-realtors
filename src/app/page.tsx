import {
  HeroSlideshow,
  Intro,
  Services,
  Process,
  ImageBand,
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

      {/* Featured Image - Full bleed gallery */}
      <ImageBand />

      {/* Validation - Trust signals */}
      <Validation />

      {/* Contact - CTA + Form */}
      <Contact />
    </>
  );
}
