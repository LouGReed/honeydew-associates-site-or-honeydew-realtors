import { BASE_PATH } from './basePath';

const SMS_PHONE_DISPLAY = '(512) 716-9176';
const SMS_PHONE_E164 = '+15127169176';
const SMS_BODY = "Hi Honeydew — I'd like to schedule a walk-through.";

export const siteConfig = {
  businessName: 'Honeydew',
  tagline: "Austin's Make-Ready + Home Services Partner",
  phone: '(512) 716-9176',
  email: 'honeydewzack@gmail.com',
  smsPhone: SMS_PHONE_DISPLAY,
  smsPhoneE164: SMS_PHONE_E164,
  smsBody: SMS_BODY,
  smsHref: `sms:${SMS_PHONE_E164}?&body=${encodeURIComponent(SMS_BODY)}`,
  housecallProUrl: 'https://book.housecallpro.com/book/Honeydew-Homes/1a8cf53602dc4a05b78968e265bb487d?v2=true',
  logo: `${BASE_PATH}/img/brand/honeydewlogo.png`,

  services: [
    {
      title: 'Make-Ready + Turnovers',
      description: 'Get a home listing ready before it hits the market.',
    },
    {
      title: 'Repairs + Punch Lists',
      description: "The stuff that's been on your list is now on our Honeydew List. We'll knock it out.",
    },
    {
      title: 'Paint + Wall Repair',
      description: 'Wall flattening, interior/exterior paint.',
    },
    {
      title: 'Installs + Improvements',
      description: 'Appliances, fixtures, water filtration systems.',
    },
    {
      title: 'Landscaping + Nursery Services',
      description: 'Get landscaping, mulching, tree selection and planting done in one place.',
    },
  ],

  process: [
    {
      number: '01',
      title: 'Walkthrough',
      description: 'We meet at the property and agree on a clear scope and timeline together.',
    },
    {
      number: '02',
      title: 'Transparent Quoting',
      description: 'We build a line-item quote, customized to your budget. No surprises.',
    },
    {
      number: '03',
      title: 'Execute',
      description: 'Our team handles the work with daily updates. When a job calls for it, we bring in trusted plumbing and landscaping specialists.',
    },
    {
      number: '04',
      title: 'Final Sweep + Walkthrough',
      description: 'A clean handoff, every detail checked.',
    },
  ],

  serviceAreas: ['Austin', 'Round Rock', 'Cedar Park', 'Georgetown', 'Pflugerville'],

  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Book', href: '#book' },
  ],
};

export type SiteConfig = typeof siteConfig;
