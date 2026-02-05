export interface HeroSlide {
  src: string;
  alt: string;
  fit: "cover" | "contain";
  position: string;
}

export const siteConfig = {
  businessName: "Honeydew",
  tagline: "Austin Make-Ready Partner",
  phone: "(512) 555-0134",
  email: "hello@honeydew.co",
  housecallProUrl: "https://housecallpro.com/book/honeydew-homes",

  // Logo
  logo: "/assets/brand/Honey Dew Logos/honeydewfinal.png",

  // Hero slideshow - using slideshow folder images (smaller, optimized)
  heroSlides: [
    {
      src: "/assets/slideshow/slide-home-1.jpg",
      alt: "Modern Austin home interior",
      fit: "cover",
      position: "center",
    },
    {
      src: "/assets/slideshow/slide-family-1.jpg",
      alt: "Family-ready living space",
      fit: "cover",
      position: "center",
    },
    {
      src: "/assets/slideshow/slide-outdoor-2.jpg",
      alt: "Outdoor living area",
      fit: "cover",
      position: "center",
    },
    {
      src: "/assets/slideshow/slide-family-2.jpg",
      alt: "Bright clean interior",
      fit: "cover",
      position: "center",
    },
    {
      src: "/assets/slideshow/slide-work-1.png",
      alt: "Detail work complete",
      fit: "cover",
      position: "center",
    },
  ] as HeroSlide[],

  // Services - studio naming
  services: [
    {
      title: "Make-Ready + Turnovers",
      description: "Complete pre-listing preparation so your home photographs beautifully and sells faster.",
    },
    {
      title: "Punch Lists + Repairs",
      description: "Efficient execution of inspection items and buyer requests with clear communication.",
    },
    {
      title: "Paint + Finish Work",
      description: "Clean lines and neutral tones that let the home speak for itself.",
    },
    {
      title: "Light Remodels",
      description: "Targeted updates that move the needle without the timeline of a full renovation.",
    },
  ],

  // Process steps
  process: [
    {
      number: "01",
      title: "Walkthrough + Scope",
      description: "We meet at the property, understand your timeline, and build a clear scope together.",
    },
    {
      number: "02",
      title: "Schedule + Execute",
      description: "Our team handles the work while you focus on your clients. Daily updates, no surprises.",
    },
    {
      number: "03",
      title: "Final Sweep + Photos",
      description: "A clean handoff: every detail checked, every surface ready for the photographer.",
    },
  ],

  // Validation logos
  validationLogos: [
    { src: "/assets/validation/compass.PNG", alt: "Compass" },
    { src: "/assets/validation/Sicara-Design-logo_400x400.png", alt: "Sicara Design" },
    {
      src: "/assets/validation/take_the_provided_texas_realtors_logo_and_remove_the_background_completely_preserve_the_exact_logo__1yb80vnp4ir24l9ohgfz_3.png",
      alt: "Texas Realtors"
    },
  ],

  // Lifestyle images for featured section
  lifestyleImages: [
    { src: "/assets/slideshow/slide-family-3.jpg", caption: "Family-ready finishes" },
    { src: "/assets/slideshow/slide-outdoor-1.jpg", caption: "Photo-day polish" },
    { src: "/assets/slideshow/slide-work-2.png", caption: "Austin light, inside and out" },
  ],

  // Footer
  footerLinks: {
    navigation: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "Contact", href: "#contact" },
    ],
    serviceAreas: ["Austin", "Round Rock", "Cedar Park", "Georgetown", "Pflugerville"],
  },
};

export type SiteConfig = typeof siteConfig;
