import {
  HeroSlideshow,
  Validation,
  Services,
  Process,
  ImageBand,
  Contact,
} from '@/components';

export default function HomePage() {
  return (
    <>
      {/* Hero - Sticky z-index 10 */}
      <HeroSlideshow />

      {/* Validation - Sticky z-index 9 */}
      <Validation />

      {/* Services - Sticky z-index 8 */}
      <Services />

      {/* Process - Sticky z-index 7 */}
      <Process />

      {/* ImageBand - 3 Sticky panels z-index 6, 5, 4 */}
      <ImageBand />

      {/* Contact - Sticky z-index 3 */}
      <Contact />
    </>
  );
}
