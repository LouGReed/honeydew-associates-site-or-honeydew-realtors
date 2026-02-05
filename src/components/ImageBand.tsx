import { siteConfig } from '@/config/site';
import StickyImagePanel from './StickyImagePanel';

export default function ImageBand() {
  return (
    <>
      {siteConfig.lifestyleImages.map((image, index) => (
        <StickyImagePanel
          key={index}
          src={image.src}
          alt={image.caption}
          caption={image.caption}
          eyebrow="Our Work"
          scrollHeight="medium"
          zIndex={6 - index}
        />
      ))}
    </>
  );
}
