import {
  HeroSlideshow,
  Intro,
  TrustStrip,
  Gallery,
  Services,
  CtaBand,
  Process,
  ImageBand,
  Validation,
  BookingSection,
} from '@/components';

export default function HomePage() {
  return (
    <>
      {/* Hero — Full viewport slideshow */}
      <HeroSlideshow />

      {/* Intro — Two-column: copy + vertical Pexels portrait */}
      <Intro />

      {/* Trust Strip — Type-only value proposition */}
      <TrustStrip />

      {/* Gallery — Lifestyle images */}
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

      {/* Booking — Final CTA with BBQ image */}
      <BookingSection />
    </>
  );
}
