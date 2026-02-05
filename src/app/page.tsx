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
      <HeroSlideshow />
      <section id="about">
        <Services />
      </section>
      <Process />
      <Validation />
      <ImageBand />
      <Contact />
    </>
  );
}
