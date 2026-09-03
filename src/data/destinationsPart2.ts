import { Destination } from './types';

export const DESTINATIONS_PART2: Destination[] = [
  {
    id: 'london',
    name: 'London',
    country: 'United Kingdom',
    region: 'Europe',
    tagline: 'Royal Heritage, Theater Royalty, and Historic Pubs',
    description: 'A layered metropolis where Roman walls, medieval towers, Shakespearean theaters, and cutting-edge financial glass towers coexist along the winding banks of Father Thames.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 51.5074, lon: -0.1278 },
    bestTime: 'May - September',
    rating: 4.88,
    reviewsCount: 3650,
    travelStyles: ['Culture', 'Food', 'Luxury'],
    budgetTier: 'Premium',
    currency: 'GBP (£)',
    language: 'English',
    timezone: 'UTC+0 (GMT)',
    featured: false,
    trending: true,
    famousPlaces: [
      {
        id: 'tower-bridge',
        number: '01',
        name: 'Tower Bridge & Tower of London',
        category: 'Victorian Gothic Icon',
        description: 'The world’s most iconic bascule bridge standing tall beside William the Conqueror’s 1078 fortress, guardian of the glittering Crown Jewels.',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=80',
        location: 'Tower Hamlets & Southwark',
        recommendedDuration: '3 Hours',
        curatorTip: 'Walk the high-level glass floor walkway inside the bridge towers for dizzying views of red double-decker buses crossing below.'
      },
      {
        id: 'big-ben-westminster',
        number: '02',
        name: 'Big Ben & Palace of Westminster',
        category: 'Gothic Parliamentary Seat',
        description: 'The 96-meter Elizabeth Tower and its resonant 13.7-ton bell preside over the Houses of Parliament on the banks of the Thames.',
        image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=1000&q=80',
        location: 'City of Westminster',
        recommendedDuration: '1 - 2 Hours',
        curatorTip: 'Photograph Big Ben from the south side of Westminster Bridge in the archway of St Thomas’ Hospital.'
      },
      {
        id: 'british-museum',
        number: '03',
        name: 'The British Museum & Great Court',
        category: 'Global Civilization Vault',
        description: 'Dedicated to human history, art, and culture beneath Norman Foster’s glass tessellated roof, housing the Rosetta Stone and Parthenon Sculptures.',
        image: 'https://images.unsplash.com/photo-1574610758891-5b809b6e6e2e?auto=format&fit=crop&w=1000&q=80',
        location: 'Bloomsbury',
        recommendedDuration: '3 - 4 Hours',
        curatorTip: 'Admission is free; book a timed slot online to bypass the main entrance line.'
      }
    ],
    travelTips: [
      'Tap your contactless bank card or smartphone on the London Underground; paper tickets cost twice as much.',
      'Major national museums (British Museum, Tate Modern, National Gallery) offer free permanent collection admission.',
      'Stand on the right side of escalators on the Tube at all times.'
    ]
  },
  {
    id: 'rome',
    name: 'Rome',
    country: 'Italy',
    region: 'Europe',
    tagline: 'The Eternal City of Caesars, Popes, and Piazzas',
    description: 'An open-air museum where millennia of imperial majesty, Renaissance palazzos, bubbling fountains, and heavenly pasta trattorias fill every terracotta-hued cobblestone corner.',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 41.9028, lon: 12.4964 },
    bestTime: 'April - May & Sept - Oct',
    rating: 4.92,
    reviewsCount: 3910,
    travelStyles: ['Culture', 'Food', 'Relaxed'],
    budgetTier: 'Moderate',
    currency: 'EUR (€)',
    language: 'Italian',
    timezone: 'UTC+1 (CET)',
    featured: false,
    trending: true,
    famousPlaces: [
      {
        id: 'colosseum',
        number: '01',
        name: 'The Colosseum & Roman Forum',
        category: 'Flavian Amphitheater Wonder',
        description: 'Completed in 80 AD, this elliptical travertine giant could seat 50,000 roaring spectators for gladiatorial combat and wild beast hunts.',
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1000&q=80',
        location: 'Piazza del Colosseo',
        recommendedDuration: '3 Hours',
        curatorTip: 'Book an underground hypogeum and arena floor access ticket to stand where gladiators awaited combat.'
      },
      {
        id: 'vatican-city',
        number: '02',
        name: 'St. Peter’s Basilica & Sistine Chapel',
        category: 'Holy See Papal Treasury',
        description: 'The world’s smallest independent nation showcases Michelangelo’s immortal Sistine Chapel ceiling and the glorious dome of St. Peter’s.',
        image: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=1000&q=80',
        location: 'Vatican City State',
        recommendedDuration: 'Half Day',
        curatorTip: 'Climb the 551 steps to the top of St. Peter’s cupola for Rome’s most breathtaking skyline vista.'
      },
      {
        id: 'trevi-fountain',
        number: '03',
        name: 'Trevi Fountain & Spanish Steps',
        category: 'Baroque Marble Spectacle',
        description: 'Nicola Salvi’s 1762 Baroque masterpiece features Oceanus commanding wild tritons. Tossing a coin with your right hand over your left shoulder guarantees your return to Rome.',
        image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=1000&q=80',
        location: 'Piazza di Trevi',
        recommendedDuration: '1 - 2 Hours',
        curatorTip: 'Visit at 5:30 AM before sunrise when the piazza is completely empty and fountain waters roar in solitude.'
      }
    ],
    travelTips: [
      'Public drinking fountains (nasoni) offer ice-cold, mineral-rich mountain water; carry a refillable water flask.',
      'Order cappuccino only before 11:00 AM; after meals, Italians drink un caffè (espresso).',
      'Shoulders and knees must be covered to enter all Roman churches and the Vatican.'
    ]
  },
  {
    id: 'new-york',
    name: 'New York City',
    country: 'United States',
    region: 'Americas',
    tagline: 'The Electric Capital of Ambition, Theater, and High Line',
    description: 'The city that never sleeps offers unmatched kinetic energy across five boroughs: Broadway marquees, Central Park foliage, skyline rooftop lounges, and legendary corner slice pizzerias.',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 40.7128, lon: -74.006 },
    bestTime: 'Sept - Nov & April - June',
    rating: 4.89,
    reviewsCount: 4430,
    travelStyles: ['Food', 'Culture', 'Luxury', 'Adventure'],
    budgetTier: 'Luxury',
    currency: 'USD ($)',
    language: 'English',
    timezone: 'UTC-5 (EST)',
    featured: false,
    trending: true,
    famousPlaces: [
      {
        id: 'central-park',
        number: '01',
        name: 'Central Park & Bethesda Terrace',
        category: '843-Acre Urban Sanctuary',
        description: 'Olmsted & Vaux’s landscape triumph featuring Bow Bridge, the Ramble woods, Wollman Rink, and rowboats gliding on the lake surrounded by skyline skyscrapers.',
        image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1000&q=80',
        location: 'Manhattan (59th to 110th St)',
        recommendedDuration: 'Half Day',
        curatorTip: 'Rent a rowboat at Loeb Boathouse for quiet views beneath the cast-iron arches of Bow Bridge.'
      },
      {
        id: 'times-square-broadway',
        number: '02',
        name: 'Times Square & Broadway Theater District',
        category: 'Crossroads of the World',
        description: 'Massive high-resolution digital billboards illuminate Manhattan night like midday, surrounded by 41 historic Broadway theaters staging world-premiere musicals.',
        image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=1000&q=80',
        location: 'Midtown Manhattan',
        recommendedDuration: '2 - 3 Hours',
        curatorTip: 'Visit the TKTS booth under the red glass stairs at 47th St at 3:00 PM for same-day 50% discount Broadway theater tickets.'
      },
      {
        id: 'high-line-summit',
        number: '03',
        name: 'The High Line & Summit One Vanderbilt',
        category: 'Elevated Park & Glass Spire',
        description: 'A 1.45-mile public park built on a historic freight rail line elevated above the streets of Chelsea, culminating at the mind-bending mirrored infinity halls of SUMMIT One Vanderbilt.',
        image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?auto=format&fit=crop&w=1000&q=80',
        location: 'Meatpacking to Hudson Yards',
        recommendedDuration: '2 - 3 Hours',
        curatorTip: 'Walk the High Line starting from Gansevoort St northbound, ending at Chelsea Market for lobster rolls and tacos.'
      }
    ],
    travelTips: [
      'Use OMNY on the NYC Subway: simply tap your phone or credit card at any turnstile.',
      'Walk on the right side of sidewalks; step to the side if checking smartphone maps.',
      'Standard dining tipping in restaurants is 18% to 22%.'
    ]
  },
  {
    id: 'singapore',
    name: 'Singapore',
    country: 'Singapore',
    region: 'Asia',
    tagline: 'City in a Garden, Supertrees, and Hawker Heaven',
    description: 'A gleaming, ultra-clean island nation seamlessly integrating tropical rainforests with gravity-defying architecture, world-famous Michelin-starred hawker food centers, and futuristic sustainable sanctuaries.',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1508964942454-1a56651d54ac?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 1.3521, lon: 103.8198 },
    bestTime: 'November - January & June - August',
    rating: 4.93,
    reviewsCount: 3780,
    travelStyles: ['Luxury', 'Food', 'Culture', 'Relaxed'],
    budgetTier: 'Premium',
    currency: 'SGD ($)',
    language: 'English, Mandarin, Malay, Tamil',
    timezone: 'UTC+8 (SGT)',
    featured: false,
    trending: true,
    famousPlaces: [
      {
        id: 'gardens-by-the-bay',
        number: '01',
        name: 'Gardens by the Bay & Supertree Grove',
        category: 'Solar Botanical Biospheres',
        description: '101 hectares of reclaimed waterfront showcasing 50-meter vertical gardens (Supertrees), the cooling Cloud Forest dome with an indoor mountain waterfall, and nightly Garden Rhapsody light shows.',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1000&q=80',
        location: 'Marina Bay',
        recommendedDuration: '3 - 4 Hours',
        curatorTip: 'Watch the free Garden Rhapsody light & sound show at 7:45 PM lying flat on the grass circle beneath the Supertrees.'
      },
      {
        id: 'marina-bay-sands',
        number: '02',
        name: 'Marina Bay Sands SkyPark & Casino',
        category: 'Cantilevered Sky Marvel',
        description: 'Moshe Safdie’s three soaring 55-story hotel towers crowned by the 340-meter SkyPark surfboard, home to the world’s largest rooftop infinity pool suspended 200 meters above the bay.',
        image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1000&q=80',
        location: 'Bayfront Ave',
        recommendedDuration: '2 Hours',
        curatorTip: 'Book drinks at CÉ LA VI rooftop bar for access to identical views without hotel room bookings.'
      },
      {
        id: 'jewel-changi',
        number: '03',
        name: 'Jewel Changi Airport Rain Vortex',
        category: 'Indoor Forest & 40m Waterfall',
        description: 'The world’s tallest indoor waterfall cascades 40 meters down from an oculus in the glass dome ceiling, surrounded by a four-story lush tropical terraced Shiseido Forest Valley.',
        image: 'https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?auto=format&fit=crop&w=1000&q=80',
        location: 'Changi Airport',
        recommendedDuration: '2 Hours',
        curatorTip: 'Arrive at the airport 3 hours prior to your departing flight to enjoy the nightly light & sound show on the waterfall.'
      }
    ],
    travelTips: [
      'Experience authentic culinary magic at Maxwell Food Centre or Lau Pa Sat for Hainanese chicken rice and laksa for ~$5 SGD.',
      'Singapore MRT (metro) is extraordinarily clean and punctual; tap on and off with contactless credit cards.',
      'Chewing gum is illegal to import or sell in Singapore.'
    ]
  }
];
