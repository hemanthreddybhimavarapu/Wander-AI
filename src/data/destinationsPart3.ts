import { Destination } from './types';

export const DESTINATIONS_PART3: Destination[] = [
  {
    id: 'barcelona',
    name: 'Barcelona',
    country: 'Spain',
    region: 'Europe',
    tagline: 'Gaudí’s Dreamscape, Gothic Quarters, and Mediterranean Energy',
    description: 'A sun-drenched Catalan capital where Antoni Gaudí’s surreal modernist architecture meets golden Mediterranean beaches, vibrant tapas bars, and lively tree-shaded boulevards.',
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 41.3851, lon: 2.1734 },
    bestTime: 'May - June & September - October',
    rating: 4.87,
    reviewsCount: 3540,
    travelStyles: ['Culture', 'Food', 'Beaches', 'Relaxed'],
    budgetTier: 'Moderate',
    currency: 'EUR (€)',
    language: 'Spanish & Catalan',
    timezone: 'UTC+1 (CET)',
    featured: false,
    trending: true,
    famousPlaces: [
      {
        id: 'basilica-sagrada-familia',
        number: '01',
        name: 'Basílica de la Sagrada Família',
        category: 'Modernist Temple Masterpiece',
        description: 'Antoni Gaudí’s awe-inspiring basilica under construction since 1882. Its forest of branching columns and stained-glass nave creates a cathedral of dancing rainbow light.',
        image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1000&q=80',
        location: 'Eixample District',
        recommendedDuration: '2 - 3 Hours',
        curatorTip: 'Book a late afternoon entry (around 4:30 PM) when the setting sun pours scarlet and amber rays through the Nativity facade windows.'
      },
      {
        id: 'park-guell',
        number: '02',
        name: 'Park Güell & Monumental Zone',
        category: 'Mosaic Fantasy Garden',
        description: 'Perched on Carmel Hill, this surreal park boasts organic stone viaducts, gingerbread gatehouses, and the famous trencadís mosaic salamander (El Drac).',
        image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1000&q=80',
        location: 'Gràcia District',
        recommendedDuration: '2 Hours',
        curatorTip: 'Sit on the undulating mosaic serpentine bench at sunset for a panorama across the city down to the Mediterranean.'
      },
      {
        id: 'gothic-quarter-born',
        number: '03',
        name: 'Barri Gòtic & El Born',
        category: 'Medieval Alleyways & Tapas',
        description: 'A labyrinthine network of narrow Roman and medieval stone alleys, secluded plazas, artisan leather workshops, and centuries-old vermuterías.',
        image: 'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?auto=format&fit=crop&w=1000&q=80',
        location: 'Ciutat Vella',
        recommendedDuration: 'Half Day',
        curatorTip: 'Discover Plaça de Sant Felip Neri at dusk for haunting stillness and fountain echoes away from La Rambla.'
      }
    ],
    travelTips: [
      'Lunch is traditionally served between 2:00 PM and 4:00 PM; dinner rarely begins before 9:00 PM.',
      'Be alert to pickpockets along La Rambla and Metro stations; keep phones and bags zipped.',
      'A T-casual metro card provides 10 rides across zone 1 and can be used on buses and funiculars.'
    ]
  },
  {
    id: 'sydney',
    name: 'Sydney',
    country: 'Australia',
    region: 'Oceania',
    tagline: 'Harbour Sails, Golden Surf, and Sun-Drenched Lifestyle',
    description: 'Australia’s shining jewel wraps around the world’s most magnificent natural harbor. From the billowing white sails of the Opera House to the world-famous breaks of Bondi Beach, Sydney is an outdoor paradise.',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: -33.8688, lon: 151.2093 },
    bestTime: 'September - November & March - May',
    rating: 4.86,
    reviewsCount: 3120,
    travelStyles: ['Beaches', 'Adventure', 'Food', 'Relaxed'],
    budgetTier: 'Premium',
    currency: 'AUD ($)',
    language: 'English',
    timezone: 'UTC+10 (AEST)',
    featured: false,
    trending: false,
    famousPlaces: [
      {
        id: 'sydney-opera-house',
        number: '01',
        name: 'Sydney Opera House & Bennelong Point',
        category: 'UNESCO Architectural Icon',
        description: 'Jørn Utzon’s 20th-century triumph sits poised on the harbor like billowing yacht sails clad in over one million Swedish self-cleaning ceramic tiles.',
        image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1000&q=80',
        location: 'Bennelong Point',
        recommendedDuration: '2 Hours',
        curatorTip: 'Sip a sunset flat white or Australian sparkling wine at the open-air Opera Bar right at water’s edge.'
      },
      {
        id: 'sydney-harbour-bridge',
        number: '02',
        name: 'Sydney Harbour Bridge & Pylon Lookout',
        category: 'The Coathanger Steel Arch',
        description: 'The world’s tallest steel arch bridge spans 503 meters across Port Jackson, connecting the Sydney CBD with the North Shore.',
        image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1000&q=80',
        location: 'The Rocks & Milsons Point',
        recommendedDuration: '2 - 3 Hours',
        curatorTip: 'Do the BridgeClimb at twilight for views of city lights switching on across the harbor.'
      },
      {
        id: 'bondi-to-coogee',
        number: '03',
        name: 'Bondi to Coogee Coastal Walk',
        category: 'Pacific Ocean Clifftop Trail',
        description: 'A 6-kilometer ocean clifftop trail weaving past Bondi Icebergs ocean pool, Tamarama surf beach, Bronte baths, and dramatic sandstone sea cliffs.',
        image: 'https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?auto=format&fit=crop&w=1000&q=80',
        location: 'Eastern Suburbs',
        recommendedDuration: '3 Hours',
        curatorTip: 'Stop for breakfast at Bronte Beach and swim in the heritage rock pool before finishing at Coogee.'
      }
    ],
    travelTips: [
      'Take the iconic green and yellow public ferry from Circular Quay to Manly for the world’s most scenic $9 public transit trip.',
      'Always swim between the red and yellow flags at all ocean surf beaches.',
      'Tap your contactless credit card for all ferries, trains, and light rail; weekend fare caps apply.'
    ]
  },
  {
    id: 'swiss-alps',
    name: 'Swiss Alps',
    country: 'Switzerland',
    region: 'Europe',
    tagline: 'Glacial Spires, Alpine Meadows, and High-Altitude Serenity',
    description: 'The pinnacle of European mountaineering: dramatic jagged granite peaks, crystalline turquoise glacial lakes, historic cogwheel railways, and pristine car-free chalet villages nestled beneath the Matterhorn.',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 46.56, lon: 7.98 },
    bestTime: 'Dec - April (Ski) & July - Sept (Hiking)',
    rating: 4.96,
    reviewsCount: 2890,
    travelStyles: ['Adventure', 'Relaxed', 'Luxury'],
    budgetTier: 'Luxury',
    currency: 'CHF (Fr.)',
    language: 'German, French, Italian',
    timezone: 'UTC+1 (CET)',
    featured: false,
    trending: false,
    famousPlaces: [
      {
        id: 'matterhorn-zermatt',
        number: '01',
        name: 'The Matterhorn & Gornergrat Railway',
        category: '4,478m Pyramidal Peak',
        description: 'The world’s most photographed mountain peak looms over the car-free mountain village of Zermatt. The Gornergrat cogwheel railway climbs to 3,089 meters.',
        image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80',
        location: 'Zermatt, Valais',
        recommendedDuration: 'Full Day',
        curatorTip: 'Disembark at Rotenboden station to photograph the Matterhorn’s mirror reflection on the still surface of Riffelsee lake.'
      },
      {
        id: 'jungfraujoch',
        number: '02',
        name: 'Jungfraujoch — Top of Europe',
        category: 'Highest Railway Station in Europe',
        description: 'At 3,454 meters, step out onto the Aletsch Glacier — Europe’s longest river of ice — and explore hand-carved ice palace tunnels deep inside the mountain.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
        location: 'Bernese Oberland',
        recommendedDuration: 'Full Day',
        curatorTip: 'Take the ultra-modern Eiger Express tricable gondola from Grindelwald Terminal to shave 45 minutes off the ascent.'
      },
      {
        id: 'lauterbrunnen-valley',
        number: '03',
        name: 'Lauterbrunnen Valley & Staubbach Falls',
        category: 'Valley of 72 Waterfalls',
        description: 'A dramatic glacial trough flanked by 300-meter vertical limestone cliffs where Staubbach Falls plunges like a misty white ribbon above traditional Swiss chalets.',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80',
        location: 'Interlaken Region',
        recommendedDuration: 'Half Day',
        curatorTip: 'Take the cable car up to Mürren, a quiet car-free village with front-row panoramic views of the Eiger, Mönch, and Jungfrau peaks.'
      }
    ],
    travelTips: [
      'Invest in a Swiss Travel Pass if traveling between regions; it covers all trains, buses, lake boats, and 500+ museums.',
      'Mountain weather can change in minutes; always carry thermal layers and waterproof outer shells when hiking.',
      'Tap water in Switzerland is alpine glacial quality and delicious from any mountain fountain.'
    ]
  },
  {
    id: 'kerala',
    name: 'Kerala',
    country: 'India',
    region: 'Asia',
    tagline: 'God’s Own Country, Tranquil Backwaters, and Ayurvedic Bliss',
    description: 'A tropical paradise along India’s Malabar Coast fringed by palm-lined canals, tranquil backwaters, fragrant spice plantations in the Western Ghats, and ancient Ayurvedic holistic healing sanctuaries.',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1609384795362-e9a939e6a9fd?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 9.9312, lon: 76.2673 },
    bestTime: 'September - March',
    rating: 4.91,
    reviewsCount: 3040,
    travelStyles: ['Relaxed', 'Culture', 'Food', 'Adventure'],
    budgetTier: 'Moderate',
    currency: 'INR (₹)',
    language: 'Malayalam & English',
    timezone: 'UTC+5:30 (IST)',
    featured: false,
    trending: true,
    famousPlaces: [
      {
        id: 'alleppey-backwaters',
        number: '01',
        name: 'Alleppey (Alappuzha) Houseboat Cruise',
        category: 'Venice of the East',
        description: 'Drift along a 900-kilometer labyrinth of tranquil palm-shaded canals and Vembanad Lake aboard a traditional thatched Kettuvallam wooden houseboat with private onboard chef.',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80',
        location: 'Alappuzha District',
        recommendedDuration: 'Overnight (1 - 2 Days)',
        curatorTip: 'Opt for an overnight cruise with a stop at a village canal island to taste fresh Karimeen Pollichathu (pearl spot fish wrapped in banana leaf).'
      },
      {
        id: 'munnar-tea-hills',
        number: '02',
        name: 'Munnar Tea Plantations & Eravikulam',
        category: 'Misty Mountain Highlands',
        description: '1,600 meters up in the Western Ghats, rolling hills are blanketed in emerald tea bushes and mist, home to the endangered Nilgiri Tahr and Anamudi peak.',
        image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=80',
        location: 'Idukki District',
        recommendedDuration: '2 Days',
        curatorTip: 'Visit Kolukkumalai — the world’s highest tea plantation — at sunrise via 4x4 jeep.'
      },
      {
        id: 'fort-kochi',
        number: '03',
        name: 'Fort Kochi & Chinese Fishing Nets',
        category: 'Colonial Spice Port',
        description: 'A storied coastal enclave where Portuguese churches, Dutch palaces, and Jewish synagogues meet the massive cantilevered shore-operated Chinese fishing nets (Cheena Vala).',
        image: 'https://images.unsplash.com/photo-1609384795362-e9a939e6a9fd?auto=format&fit=crop&w=1000&q=80',
        location: 'Kochi Harbour',
        recommendedDuration: '1 - 2 Days',
        curatorTip: 'Attend an authentic evening Kathakali classical dance drama performance with elaborate green makeup.'
      }
    ],
    travelTips: [
      'Book a government-certified Ayurvedic wellness spa treatment (Abhyanga or Shirodhara) for authentic rejuvenation.',
      'Taste traditional Kerala Sadhya feast served on a fresh banana leaf eaten with your right hand.',
      'Carry light cotton clothing and mosquito repellent, particularly during sunset boat cruises.'
    ]
  }
];
