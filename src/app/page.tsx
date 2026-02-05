import {
  HeroSlideshow,
  Services,
  Process,
  Validation,
  ImageBand,
  Contact,
} from '@/components';

export default function HomePage() {
  return (
    <>
      {/* Hero - Full viewport slideshow */}
      <HeroSlideshow />

      {/* Services - What we do */}
      <Services />

      {/* Process - How it works */}
      <Process />

      {/* Validation - Trust signals */}
      <Validation />

      {/* Featured Image - Full bleed */}
      <ImageBand />

      {/* Contact - CTA + Form */}
      <Contact />
    </>
  );
}
