import { siteConfig } from '@/config/site';
import styles from './BrandLogo.module.css';

interface Props {
  className?: string;
}

/**
 * Reusable brand logo.
 * Single source of truth — swap the file in site.ts and it updates everywhere.
 * Parent controls size via CSS (max-height on the wrapper or img).
 * Pass className to control filter/color treatment per context.
 */
export default function BrandLogo({ className }: Props) {
  return (
    <img
      src={siteConfig.logo}
      alt={siteConfig.businessName}
      width={1024}
      height={1024}
      draggable={false}
      className={`${styles.logo} ${className || ''}`}
    />
  );
}
