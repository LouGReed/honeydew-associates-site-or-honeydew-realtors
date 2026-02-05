import { BASE_PATH } from './basePath';

export const siteConfig = {
  businessName: 'Honeydew',
  tagline: 'Austin Make-Ready Partner',
  phone: '(512) 555-0134',
  email: 'hello@honeydew.co',
  housecallProUrl: 'https://book.housecallpro.com/book/HoneyDew-Homes/1a8cf53602dc4a05b78968e265bb487d?v2=true',
  logo: `${BASE_PATH}/img/brand/honeydewlogo.png`,

  services: [
    {
      title: 'Make-Ready + Turnovers',
      description: 'Complete pre-listing preparation so your home photographs beautifully and sells faster.',
    },
    {
      title: 'Punch Lists + Repairs',
      description: 'Efficient execution of inspection items and buyer requests with clear communication.',
    },
    {
      title: 'Paint + Finish Work',
      description: 'Clean lines and neutral tones that let the home speak for itself.',
    },
    {
      title: 'Light Remodels',
      description: 'Targeted updates that move the needle without the timeline of a full renovation.',
    },
  ],

  process: [
    {
      number: '01',
      title: 'Walkthrough + Scope',
      description: 'We meet at the property, understand your timeline, and build a clear scope together.',
    },
    {
      number: '02',
      title: 'Schedule + Execute',
      description: 'Our team handles the work while you focus on your clients. Daily updates, no surprises.',
    },
    {
      number: '03',
      title: 'Final Sweep + Photos',
      description: 'A clean handoff: every detail checked, every surface ready for the photographer.',
    },
  ],

  serviceAreas: ['Austin', 'Round Rock', 'Cedar Park', 'Georgetown', 'Pflugerville'],

  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ],
};

export type SiteConfig = typeof siteConfig;
