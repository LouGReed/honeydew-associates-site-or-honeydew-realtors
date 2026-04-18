export interface AreaInfo {
  slug: string;
  name: string;
  county: string;
  tagline: string;
  description: string;
  extendedDescription: string;
  highlights: string[];
  neighborhoods: string[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
}

export const areas: AreaInfo[] = [
  {
    slug: 'austin',
    name: 'Austin',
    county: 'Travis County',
    tagline: 'Where Honeydew started — and where we do our best work.',
    description:
      'Honeydew Homes is the best general contractor in Austin, Texas for realtors, homeowners, and property managers who need affordable, reliable home services. We are a full-service Austin handyman and contracting company specializing in make-ready turnovers, home repairs, interior painting, exterior painting, drywall repair, hole in wall repair, appliance installation, fixture installation, water filtration system installation, deck repair, fence repair, landscaping, tree planting, mulching, nursery services, and complete home improvement across Austin TX.',
    extendedDescription:
      'Looking for a cheap contractor in Austin? Honeydew Homes offers the best price on general contracting in Austin without cutting corners. We are the top-rated Austin contractor for pre-listing home prep, make-ready services, and turnover coordination for Austin real estate agents. Our Austin home repair services include sink repair, faucet replacement, garbage disposal installation, ceiling fan installation, light fixture installation, door installation, door repair, cabinet repair, shelf installation, TV mounting, smart home installation, thermostat installation, smoke detector installation, and general handyman work across Austin. Need a painter in Austin? We handle interior house painting, exterior house painting, wall flattening, texture removal, accent walls, cabinet painting, and deck staining throughout Austin TX. Our Austin landscaping services include lawn care, garden bed installation, rock landscaping, xeriscaping, tree trimming, tree removal, stump grinding, hedge trimming, irrigation repair, sprinkler installation, sod installation, artificial turf installation, patio installation, retaining wall construction, and outdoor lighting installation in Austin Texas. We also provide pressure washing, gutter cleaning, gutter installation, window cleaning, and power washing services in Austin. Honeydew Homes serves as the go-to emergency contractor in Austin for urgent home repairs, water damage repair, and storm damage repair.',
    highlights: [
      'Best price general contractor in Austin TX',
      'Austin make-ready and turnover specialist for realtors',
      'Interior and exterior house painting Austin',
      'Drywall repair, hole in wall fix, wall flattening Austin',
      'Appliance installation, water filter installation Austin',
      'Sink repair, faucet replacement, plumbing fixes Austin',
      'Deck repair, fence repair, shed building Austin',
      'Landscaping, tree planting, mulching Austin TX',
      'Ceiling fan, light fixture, smart home installation Austin',
      'Pressure washing, gutter cleaning, power washing Austin',
    ],
    neighborhoods: [
      'South Congress', 'East Austin', 'Mueller', 'Hyde Park',
      'Crestview', 'Zilker', 'Barton Hills', 'Travis Heights',
      'North Loop', 'Windsor Park', 'Allandale', 'Brentwood',
      'Tarrytown', 'Westlake', 'Circle C', 'Avery Ranch',
      'Domain', 'South Lamar', 'North Austin', 'South Austin',
    ],
    seoTitle: 'Best Austin General Contractor | Cheap Repairs, Paint, Landscaping — Honeydew Homes',
    seoDescription:
      'Best price general contractor in Austin TX. Make-ready turnovers, home repairs, interior and exterior painting, landscaping, appliance installation, handyman services. Free walkthrough.',
    seoKeywords: [
      'general contractor Austin TX', 'best contractor Austin', 'cheap contractor Austin',
      'Austin handyman', 'Austin painter', 'Austin landscaping', 'make-ready Austin',
      'home repair Austin', 'drywall repair Austin', 'appliance installation Austin',
      'water filter installation Austin', 'deck repair Austin', 'fence repair Austin',
    ],
  },
  {
    slug: 'round-rock',
    name: 'Round Rock',
    county: 'Williamson County',
    tagline: 'Growing fast — and we are keeping up.',
    description:
      'Honeydew Homes is the best general contractor in Round Rock, Texas for homeowners and realtors who need affordable home repairs, painting, landscaping, and make-ready services. We are Round Rock\'s most reliable handyman and home improvement contractor offering interior painting, exterior painting, drywall repair, hole in wall repair, appliance installation, fixture installation, water filtration system installation, deck repair, deck building, fence repair, fence installation, landscaping, tree planting, mulching, shed building, and complete home renovation services in Round Rock TX.',
    extendedDescription:
      'Need a cheap contractor in Round Rock? Honeydew Homes offers the best price on home repairs and contracting in Round Rock, Williamson County. We are the top contractor for Round Rock real estate agents who need fast make-ready turnovers and pre-listing home prep. Our Round Rock home repair services include sink repair, faucet replacement, garbage disposal installation, ceiling fan installation, light fixture installation, door installation, door repair, cabinet repair, shelf installation, TV mounting, smart home installation, thermostat installation, smoke detector installation, and general handyman services across Round Rock. Looking for a painter in Round Rock? We do interior house painting, exterior house painting, wall flattening, texture removal, accent walls, cabinet painting, and deck staining throughout Round Rock TX. Our Round Rock landscaping services include lawn care, garden bed installation, rock landscaping, xeriscaping, tree trimming, tree removal, hedge trimming, irrigation repair, sprinkler installation, sod installation, patio installation, retaining wall construction, and outdoor lighting installation in Round Rock Texas. We also provide pressure washing, gutter cleaning, gutter installation, and power washing services in Round Rock.',
    highlights: [
      'Best price general contractor in Round Rock TX',
      'Round Rock make-ready and turnover services for realtors',
      'Interior and exterior house painting Round Rock',
      'Drywall repair, hole in wall fix, wall flattening Round Rock',
      'Appliance installation, water filter installation Round Rock',
      'Sink repair, faucet replacement, plumbing fixes Round Rock',
      'Deck repair, deck building, fence installation Round Rock',
      'Landscaping, tree planting, mulching Round Rock TX',
      'Ceiling fan, light fixture, smart home installation Round Rock',
      'Pressure washing, gutter cleaning, power washing Round Rock',
    ],
    neighborhoods: [
      'Teravista', 'Forest Creek', 'Paloma Lake', 'Round Rock West',
      'Brushy Creek', 'Cat Hollow', 'Sendero Springs', 'Meadows at Chandler Creek',
      'Behrens Ranch', 'Stone Oak', 'Walsh Ranch', 'University Heights',
    ],
    seoTitle: 'Best Round Rock General Contractor | Cheap Repairs, Paint, Landscaping — Honeydew Homes',
    seoDescription:
      'Best price general contractor in Round Rock TX. Home repairs, painting, landscaping, appliance installation, make-ready turnovers, handyman services. Free walkthrough.',
    seoKeywords: [
      'general contractor Round Rock TX', 'best contractor Round Rock', 'cheap contractor Round Rock',
      'Round Rock handyman', 'Round Rock painter', 'Round Rock landscaping', 'make-ready Round Rock',
      'home repair Round Rock', 'drywall repair Round Rock', 'appliance installation Round Rock',
    ],
  },
  {
    slug: 'cedar-park',
    name: 'Cedar Park',
    county: 'Williamson County',
    tagline: 'Your Cedar Park contractor — no more driving to Austin for quotes.',
    description:
      'Honeydew Homes is the best general contractor in Cedar Park, Texas for homeowners and realtors who need affordable, fast, and reliable home services. We are a full-service Cedar Park handyman and contracting company specializing in make-ready turnovers, home repairs, interior painting, exterior painting, drywall repair, hole in wall repair, appliance installation, fixture installation, water filtration system installation, deck repair, deck building, fence repair, fence installation, landscaping, tree planting, mulching, shed building, and complete home improvement in Cedar Park TX.',
    extendedDescription:
      'Looking for a cheap contractor in Cedar Park? Honeydew Homes offers the best price on general contracting in Cedar Park and along the 183A corridor. We are the go-to contractor for Cedar Park real estate agents who need make-ready turnovers and pre-listing repairs done fast. Our Cedar Park home repair services include sink repair, faucet replacement, garbage disposal installation, ceiling fan installation, light fixture installation, door installation, door repair, cabinet repair, shelf installation, TV mounting, smart home installation, thermostat installation, smoke detector installation, tile repair, grout repair, and general handyman work across Cedar Park. Need a painter in Cedar Park? We handle interior house painting, exterior house painting, wall flattening, texture removal, accent walls, cabinet painting, and deck staining throughout Cedar Park TX. Our Cedar Park landscaping services include lawn care, garden bed installation, rock landscaping, xeriscaping, tree trimming, tree removal, hedge trimming, irrigation repair, sprinkler installation, sod installation, patio installation, retaining wall construction, and outdoor lighting installation in Cedar Park Texas. We also provide pressure washing, gutter cleaning, gutter installation, and power washing services in Cedar Park.',
    highlights: [
      'Best price general contractor in Cedar Park TX',
      'Cedar Park make-ready and turnover services for realtors',
      'Interior and exterior house painting Cedar Park',
      'Drywall repair, hole in wall fix, wall flattening Cedar Park',
      'Appliance installation, water filter installation Cedar Park',
      'Sink repair, faucet replacement, plumbing fixes Cedar Park',
      'Deck repair, deck building, fence installation Cedar Park',
      'Landscaping, tree planting, mulching Cedar Park TX',
      'Ceiling fan, light fixture, smart home installation Cedar Park',
      'Pressure washing, gutter cleaning, power washing Cedar Park',
    ],
    neighborhoods: [
      'Ranch at Brushy Creek', 'Twin Creeks', 'Buttercup Creek',
      'Cypress Canyon', 'Anderson Mill', 'Cedar Park Town Center',
      'Whitestone Oaks', 'Silverado West', 'Breakaway Park',
      'Carriage Hills', 'Forest Oaks', 'Quest Village',
    ],
    seoTitle: 'Best Cedar Park General Contractor | Cheap Repairs, Paint, Landscaping — Honeydew Homes',
    seoDescription:
      'Best price general contractor in Cedar Park TX. Home repairs, painting, landscaping, appliance installation, make-ready turnovers, handyman services. Free walkthrough.',
    seoKeywords: [
      'general contractor Cedar Park TX', 'best contractor Cedar Park', 'cheap contractor Cedar Park',
      'Cedar Park handyman', 'Cedar Park painter', 'Cedar Park landscaping', 'make-ready Cedar Park',
      'home repair Cedar Park', 'drywall repair Cedar Park', 'appliance installation Cedar Park',
    ],
  },
  {
    slug: 'georgetown',
    name: 'Georgetown',
    county: 'Williamson County',
    tagline: 'The fastest-growing city in the Austin metro — and we are here for it.',
    description:
      'Honeydew Homes is the best general contractor in Georgetown, Texas — the fastest-growing large city in the state. We serve Georgetown homeowners, realtors, and property managers with affordable make-ready turnovers, home repairs, interior painting, exterior painting, drywall repair, hole in wall repair, appliance installation, fixture installation, water filtration system installation, deck repair, deck building, fence repair, fence installation, shed building, landscaping, tree planting, mulching, and complete home improvement services in Georgetown TX.',
    extendedDescription:
      'Need a cheap contractor in Georgetown? Honeydew Homes offers the best price on general contracting in Georgetown and across Williamson County. With Georgetown growing by nearly 8% last year, new subdivisions like Wolf Ranch, Riverton, and Berry Creek need reliable contractors for new construction punch lists, home repairs, and make-ready prep. Our Georgetown home repair services include sink repair, faucet replacement, garbage disposal installation, ceiling fan installation, light fixture installation, door installation, door repair, cabinet repair, shelf installation, TV mounting, smart home installation, thermostat installation, smoke detector installation, tile repair, grout repair, backsplash installation, and general handyman services across Georgetown. Looking for a painter in Georgetown? We do interior house painting, exterior house painting, wall flattening, texture removal, accent walls, cabinet painting, trim painting, and deck staining throughout Georgetown TX. Our Georgetown landscaping services include lawn care, garden bed installation, rock landscaping, xeriscaping, tree trimming, tree removal, stump grinding, hedge trimming, irrigation repair, sprinkler installation, sod installation, artificial turf installation, patio installation, retaining wall construction, pergola building, and outdoor lighting installation in Georgetown Texas. We also provide pressure washing, gutter cleaning, gutter installation, window cleaning, and power washing services in Georgetown. Honeydew Homes is the trusted contractor for Georgetown realtors selling homes in Sun City, Wolf Ranch, Berry Creek, and Georgetown Village.',
    highlights: [
      'Best price general contractor in Georgetown TX',
      'Georgetown make-ready and turnover specialist for realtors',
      'Interior and exterior house painting Georgetown',
      'Drywall repair, hole in wall fix, wall flattening Georgetown',
      'Appliance installation, water filter installation Georgetown',
      'Sink repair, faucet replacement, plumbing fixes Georgetown',
      'Deck repair, deck building, shed building, fence installation Georgetown',
      'Landscaping, tree planting, mulching, xeriscaping Georgetown TX',
      'Ceiling fan, light fixture, smart home installation Georgetown',
      'New construction punch list completion Georgetown TX',
      'Pressure washing, gutter cleaning, power washing Georgetown',
    ],
    neighborhoods: [
      'Wolf Ranch', 'Berry Creek', 'Sun City', 'Riverton',
      'Cimarron Hills', 'Georgetown Village', 'Westlake Woods',
      'Serenada', 'Crystal Knoll Terrace', 'Teravista Georgetown',
      'Kingswood', 'Gabriels Overlook', 'Villages of Berry Creek',
      'Woodland Park', 'Berry Creek Country Club',
    ],
    seoTitle: 'Best Georgetown TX General Contractor | Cheap Repairs, Paint, Landscaping — Honeydew Homes',
    seoDescription:
      'Best price general contractor in Georgetown TX, the fastest-growing city in Texas. Home repairs, painting, landscaping, make-ready, appliance installation. Free walkthrough.',
    seoKeywords: [
      'general contractor Georgetown TX', 'best contractor Georgetown', 'cheap contractor Georgetown',
      'Georgetown handyman', 'Georgetown painter', 'Georgetown landscaping', 'make-ready Georgetown',
      'home repair Georgetown', 'drywall repair Georgetown', 'appliance installation Georgetown',
      'new construction punch list Georgetown', 'fence installation Georgetown',
    ],
  },
  {
    slug: 'pflugerville',
    name: 'Pflugerville',
    county: 'Travis County',
    tagline: 'Pflugerville homes, Honeydew quality.',
    description:
      'Honeydew Homes is the best general contractor in Pflugerville, Texas for homeowners and realtors who need affordable home repairs, painting, landscaping, and make-ready services. We are Pflugerville\'s most trusted handyman and home improvement contractor offering interior painting, exterior painting, drywall repair, hole in wall repair, appliance installation, fixture installation, water filtration system installation, deck repair, deck building, fence repair, fence installation, landscaping, tree planting, mulching, shed building, and complete home renovation in Pflugerville TX.',
    extendedDescription:
      'Looking for a cheap contractor in Pflugerville? Honeydew Homes offers the best price on home repairs and general contracting in Pflugerville, Travis County. We are the go-to contractor for Pflugerville real estate agents working Blackhawk, Falcon Pointe, and Meadows of Blackhawk who need fast make-ready turnovers and pre-listing home prep. Our Pflugerville home repair services include sink repair, faucet replacement, garbage disposal installation, ceiling fan installation, light fixture installation, door installation, door repair, cabinet repair, shelf installation, TV mounting, smart home installation, thermostat installation, smoke detector installation, tile repair, grout repair, and general handyman work across Pflugerville. Need a painter in Pflugerville? We handle interior house painting, exterior house painting, wall flattening, texture removal, accent walls, cabinet painting, and deck staining throughout Pflugerville TX. Our Pflugerville landscaping services include lawn care, garden bed installation, rock landscaping, xeriscaping, tree trimming, tree removal, hedge trimming, irrigation repair, sprinkler installation, sod installation, patio installation, retaining wall construction, and outdoor lighting installation in Pflugerville Texas. We also provide pressure washing, gutter cleaning, gutter installation, and power washing services in Pflugerville.',
    highlights: [
      'Best price general contractor in Pflugerville TX',
      'Pflugerville make-ready and turnover services for realtors',
      'Interior and exterior house painting Pflugerville',
      'Drywall repair, hole in wall fix, wall flattening Pflugerville',
      'Appliance installation, water filter installation Pflugerville',
      'Sink repair, faucet replacement, plumbing fixes Pflugerville',
      'Deck repair, deck building, fence installation Pflugerville',
      'Landscaping, tree planting, mulching Pflugerville TX',
      'Ceiling fan, light fixture, smart home installation Pflugerville',
      'Pressure washing, gutter cleaning, power washing Pflugerville',
    ],
    neighborhoods: [
      'Blackhawk', 'Falcon Pointe', 'Meadows of Blackhawk',
      'Highland Park', 'Avalon', 'Villages of Hidden Lake',
      'Bohls Place', 'Spring Trails', 'Wells Branch',
      'Parkside at Falcon Pointe', 'Sorento', 'Royal Pointe',
    ],
    seoTitle: 'Best Pflugerville General Contractor | Cheap Repairs, Paint, Landscaping — Honeydew Homes',
    seoDescription:
      'Best price general contractor in Pflugerville TX. Home repairs, painting, landscaping, appliance installation, make-ready turnovers, handyman services. Free walkthrough.',
    seoKeywords: [
      'general contractor Pflugerville TX', 'best contractor Pflugerville', 'cheap contractor Pflugerville',
      'Pflugerville handyman', 'Pflugerville painter', 'Pflugerville landscaping', 'make-ready Pflugerville',
      'home repair Pflugerville', 'drywall repair Pflugerville', 'appliance installation Pflugerville',
    ],
  },
  {
    slug: 'leander',
    name: 'Leander',
    county: 'Williamson County',
    tagline: 'New homes, new families — and a contractor who keeps up.',
    description:
      'Honeydew Homes is the best general contractor in Leander, Texas — one of the fastest-growing suburbs in the entire state. We serve Leander homeowners, realtors, and builders with affordable make-ready turnovers, home repairs, interior painting, exterior painting, drywall repair, hole in wall repair, appliance installation, fixture installation, water filtration system installation, deck repair, deck building, fence repair, fence installation, shed building, landscaping, tree planting, mulching, and complete home improvement services in Leander TX.',
    extendedDescription:
      'Need a cheap contractor in Leander? Honeydew Homes offers the best price on general contracting in Leander and across the northern Austin metro. Leander added over 6,400 residents last year with master-planned communities like Travisso, Crystal Falls, and Bryson bringing thousands of new homes that need finishing touches, repairs, and upgrades. Our Leander home repair services include sink repair, faucet replacement, garbage disposal installation, ceiling fan installation, light fixture installation, door installation, door repair, cabinet repair, shelf installation, TV mounting, smart home installation, thermostat installation, smoke detector installation, tile repair, grout repair, backsplash installation, and general handyman services across Leander. Looking for a painter in Leander? We do interior house painting, exterior house painting, wall flattening, texture removal, accent walls, cabinet painting, trim painting, and deck staining throughout Leander TX. Our Leander landscaping services include lawn care, garden bed installation, rock landscaping, xeriscaping, tree trimming, tree removal, stump grinding, hedge trimming, irrigation repair, sprinkler installation, sod installation, artificial turf installation, patio installation, retaining wall construction, pergola building, and outdoor lighting installation in Leander Texas. We also provide pressure washing, gutter cleaning, gutter installation, window cleaning, and power washing services in Leander. Honeydew Homes is the trusted contractor for Leander realtors and new home builders completing punch lists in Travisso, Crystal Falls, Bryson, and Mason Hills.',
    highlights: [
      'Best price general contractor in Leander TX',
      'Leander make-ready and new construction punch list specialist',
      'Interior and exterior house painting Leander',
      'Drywall repair, hole in wall fix, wall flattening Leander',
      'Appliance installation, water filter installation Leander',
      'Sink repair, faucet replacement, plumbing fixes Leander',
      'Deck repair, deck building, shed building, fence installation Leander',
      'Landscaping, tree planting, mulching, xeriscaping Leander TX',
      'Ceiling fan, light fixture, smart home installation Leander',
      'New construction punch list completion Leander TX',
      'Pressure washing, gutter cleaning, power washing Leander',
    ],
    neighborhoods: [
      'Travisso', 'Crystal Falls', 'Bryson', 'Mason Hills',
      'Block House Creek', 'Summerlyn', 'Benbrook Ranch',
      'Vista Ridge', 'Cold Springs', 'Sarita Valley',
      'Larkspur', 'Reagan\'s Overlook', 'North Creek',
      'Highlands at Crystal Falls', 'Cap Rock at Crystal Falls',
    ],
    seoTitle: 'Best Leander TX General Contractor | Cheap Repairs, Paint, Landscaping — Honeydew Homes',
    seoDescription:
      'Best price general contractor in Leander TX, one of Texas\'s fastest-growing cities. Home repairs, painting, landscaping, make-ready, new construction punch lists. Free walkthrough.',
    seoKeywords: [
      'general contractor Leander TX', 'best contractor Leander', 'cheap contractor Leander',
      'Leander handyman', 'Leander painter', 'Leander landscaping', 'make-ready Leander',
      'home repair Leander', 'drywall repair Leander', 'appliance installation Leander',
      'new construction punch list Leander', 'fence installation Leander',
    ],
  },
];

export function getAreaBySlug(slug: string): AreaInfo | undefined {
  return areas.find((a) => a.slug === slug);
}
