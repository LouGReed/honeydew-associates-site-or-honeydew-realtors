export interface HeroSlide {
  src: string;
  fit: "cover" | "contain";
  position: string;
  overlayStrength: number;
}

export const siteConfig = {
  businessName: "Honeydew Homes",
  phone: "(512) 555-0134",
  email: "hello@honeydew-homes.com",
  housecallProUrl: "https://housecallpro.com/book/honeydew-homes",

  // Logo paths
  logo: "/assets/brand/Honey Dew Logos/honeydewfinal.png",
  logoAlt: "/assets/brand/Honey Dew Logos/Untitled design (19).png",

  // Hero slideshow images
  heroSlides: [
    {
      src: "/assets/slideshow/slide-work-1.png",
      fit: "cover",
      position: "center",
      overlayStrength: 0.25,
    },
    {
      src: "/assets/slideshow/slide-family-1.jpg",
      fit: "cover",
      position: "center",
      overlayStrength: 0.3,
    },
    {
      src: "/assets/slideshow/slide-work-2.png",
      fit: "cover",
      position: "center",
      overlayStrength: 0.2,
    },
    {
      src: "/assets/slideshow/slide-family-2.jpg",
      fit: "cover",
      position: "center",
      overlayStrength: 0.3,
    },
    {
      src: "/assets/slideshow/slide-outdoor-2.jpg",
      fit: "cover",
      position: "center",
      overlayStrength: 0.25,
    },
    {
      src: "/assets/slideshow/slide-family-3.jpg",
      fit: "cover",
      position: "center",
      overlayStrength: 0.3,
    },
  ] as HeroSlide[],

  // Lifestyle break image
  lifestyleBreakImage: "/assets/lifestyle-break.jpg",

  // Values section background image
  valuesImage: "/assets/imagery/hero/_2jpynof175jqd0qqtvlf_1.png",

  // Validation/trust logos
  validationLogos: [
    {
      src: "/assets/validation/compass.PNG",
      alt: "Compass Real Estate",
    },
    {
      src: "/assets/validation/take_the_provided_texas_realtors_logo_and_remove_the_background_completely_preserve_the_exact_logo__1yb80vnp4ir24l9ohgfz_3.png",
      alt: "Texas Realtors",
    },
    {
      src: "/assets/validation/Sicara-Design-logo_400x400.png",
      alt: "Sicara Design",
    },
  ],

  // Services list
  services: [
    {
      title: "Make-Ready Services",
      description: "Pre-listing work to help homes show clean, complete, and cared for.",
    },
    {
      title: "Repairs & Punch Lists",
      description: "Efficient fixes with attention to detail and respect for the property.",
    },
    {
      title: "Paint & Finish Work",
      description: "Clean lines and finishes that photograph well.",
    },
    {
      title: "Light Remodels",
      description: "Targeted updates that improve function and first impressions.",
    },
    {
      title: "Pre-Sale Touch-Ups",
      description: "Final details that make a home feel finished.",
    },
  ],

  // Footer navigation
  footerNav: {
    about: [
      { label: "Our Story", href: "/#about" },
      { label: "Values", href: "/#values" },
    ],
    services: [
      { label: "Make-Ready", href: "/#services" },
      { label: "Repairs", href: "/#services" },
      { label: "Paint & Finish", href: "/#services" },
    ],
    contact: [
      { label: "Get in Touch", href: "/contact" },
      { label: "Book Online", href: "https://housecallpro.com/book/honeydew-homes" },
    ],
    serviceAreas: [
      "Austin",
      "Round Rock",
      "Cedar Park",
      "Georgetown",
      "Pflugerville",
    ],
  },
};

export type SiteConfig = typeof siteConfig;
