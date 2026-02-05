import HeroSlideshow from '@/components/HeroSlideshow';
import AboutSection from '@/components/AboutSection';
import ServicesGrid from '@/components/ServicesGrid';
import LifestyleBreak from '@/components/LifestyleBreak';
import ValuesSection from '@/components/ValuesSection';
import ValidationStrip from '@/components/ValidationStrip';
import FinalCta from '@/components/FinalCta';

export default function HomePage() {
  return (
    <>
      <HeroSlideshow />
      <AboutSection />
      <ServicesGrid />
      <LifestyleBreak />
      <ValuesSection />
      <ValidationStrip />
      <FinalCta />
    </>
  );
}
