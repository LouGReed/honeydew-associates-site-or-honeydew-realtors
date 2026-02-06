import {
  HeroSlideshow,
  Intro,
  Gallery,
  Services,
  CtaBand,
  Process,
  ImageBand,
  Validation,
  PostValidationBand,
  Contact,
} from '@/components';

export default function HomePage() {
  return (
    <>
      {/* Hero — Full viewport slideshow */}
      <HeroSlideshow />

      {/* Intro — Two-column: copy + vertical Pexels portrait */}
      <Intro />

      {/* Gallery — Work images with Pexels separators interleaved */}
      <Gallery />

      {/* Services — Cards + vertical Pexels sidebar */}
      <Services />

      {/* Mid-page CTA — Decision point */}
      <CtaBand />

      {/* Process — How it works */}
      <Process />

      {/* Featured image — Full bleed break */}
      <ImageBand />

      {/* Validation — Trust signals */}
      <Validation />

      {/* Editorial break — Family BBQ */}
      <PostValidationBand />

      {/* Contact — CTA + Form */}
      <Contact />
    </>
  );
}
