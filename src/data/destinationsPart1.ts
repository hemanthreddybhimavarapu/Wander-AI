import { Destination } from './types';

export const DESTINATIONS_PART1: Destination[] = [
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    region: 'Europe',
    tagline: 'The City of Light and Timeless Hauteur',
    description: 'Paris radiates architectural splendor, world-class gastronomy, and luminous boulevards. From morning cafe rituals along the Seine to the golden glow of the Eiffel Tower, the French capital is an unhurried lesson in living well.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520939817895-060bdef4df1a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 48.8566, lon: 2.3522 },
    bestTime: 'April - June & Sept - Nov',
    rating: 4.9,
    reviewsCount: 3840,
    travelStyles: ['Culture', 'Luxury', 'Food', 'Relaxed'],
    budgetTier: 'Luxury',
    currency: 'EUR (€)',
    language: 'French',
    timezone: 'UTC+1 (CET)',
    featured: true,
    trending: true,
    famousPlaces: [
      {
        id: 'eiffel-tower',
        number: '01',
        name: 'The Eiffel Tower & Champ de Mars',
        category: 'Iconic Iron Monument',
        description: 'Gustave Eiffel’s 330-meter wrought-iron lattice masterpiece rises proudly beside the River Seine. At twilight, 20,000 bulbs illuminate in a breathtaking hourly sparkle display.',
        image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1000&q=80',
        location: 'Champ de Mars, 7th Arrondissement',
        recommendedDuration: '2 - 3 Hours',
        curatorTip: 'Ascend via the stairs to the second level for unhurried panoramic views, then toast with champagne at the summit.'
      },
      {
        id: 'louvre-museum',
        number: '02',
        name: 'Musée du Louvre & Cour Napoléon',
        category: 'Royal Palace & Art Treasury',
        description: 'The world’s largest art museum houses over 35,000 masterpieces beneath I.M. Pei’s glass pyramid, including the enigmatic Mona Lisa and the majestic Winged Victory of Samothrace.',
        image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1000&q=80',
        location: 'Rue de Rivoli, 1st Arrondissement',
        recommendedDuration: '3 - 4 Hours',
        curatorTip: 'Enter via the subterranean Carrousel du Louvre entrance on Friday evenings when crowds disperse and golden gallery lighting turns cinematic.'
      },
      {
        id: 'montmartre-sacre-coeur',
        number: '03',
        name: 'Montmartre & Basilique du Sacré-Cœur',
        category: 'Bohemian Hillside Sanctuary',
        description: 'Perched on the city’s highest hill, Montmartre weaves romantic cobblestone alleyways, historic cabarets, and the gleaming travertine dome of the Sacré-Cœur basilica overlooking the Parisian panorama.',
        image: 'https://images.unsplash.com/photo-1509299349698-dd22323b5963?auto=format&fit=crop&w=1000&q=80',
        location: '18th Arrondissement',
        recommendedDuration: 'Half Day',
        curatorTip: 'Divert off Place du Tertre to Rue de l’Abreuvoir and Maison Rose for authentic village silence away from tour groups.'
      }
    ],
    travelTips: [
      'Validate your Navigo Easy metro passes before descending onto platforms.',
      'Always greet shopkeepers with a polite "Bonjour Madame" or "Bonjour Monsieur" upon entering.',
      'Reservations for celebrated neo-bistros should be booked 3 weeks in advance.'
    ]
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    region: 'Asia',
    tagline: 'Hyper-Modern Neon Meets Sacred Edo Quietude',
    description: 'Tokyo is an electrifying collision of futuristic robotics, neon canyons, Michelin-starred back-alleys, and ancient cedar-shrouded Shinto shrines. Experience supreme Japanese hospitality (omotenashi) at every street corner.',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 35.6762, lon: 139.6503 },
    bestTime: 'March - May & Oct - Nov',
    rating: 4.95,
    reviewsCount: 4210,
    travelStyles: ['Culture', 'Food', 'Adventure', 'Luxury'],
    budgetTier: 'Premium',
    currency: 'JPY (¥)',
    language: 'Japanese',
    timezone: 'UTC+9 (JST)',
    featured: true,
    trending: true,
    famousPlaces: [
      {
        id: 'shibuya-crossing',
        number: '01',
        name: 'Shibuya Scramble & Sky Observatory',
        category: 'Urban Crossroads & Sky Deck',
        description: 'Up to 3,000 people traverse this legendary intersection on a single green light. 230 meters overhead, the rooftop Shibuya SKY offers unobstructed 360-degree views stretching to Mount Fuji.',
        image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1000&q=80',
        location: 'Shibuya Ward',
        recommendedDuration: '2 Hours',
        curatorTip: 'Book the sunset entry window for Shibuya SKY 4 weeks in advance for dusk light turning into an illuminated ocean of neon.'
      },
      {
        id: 'senso-ji-temple',
        number: '02',
        name: 'Sensō-ji Buddhist Temple & Asakusa',
        category: 'Ancient Buddhist Sanctuary',
        description: 'Founded in 645 AD, Tokyo’s oldest temple features the iconic Kaminarimon thunder gate, massive scarlet lanterns, and the vibrant Nakamise shopping arcade filled with handcrafted treats.',
        image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1000&q=80',
        location: 'Asakusa, Taito Ward',
        recommendedDuration: '2 - 3 Hours',
        curatorTip: 'Visit before 8:00 AM or after 9:00 PM when the grounds are quiet and temple eaves are dramatic under golden uplighting.'
      },
      {
        id: 'shinjuku-gyoen',
        number: '03',
        name: 'Shinjuku Gyoen National Garden',
        category: 'Imperial Oasis',
        description: '144 pristine acres combining traditional Japanese landscaped ponds, French formal flowerbeds, and English landscape gardens right in the heart of towering Shinjuku skyscrapers.',
        image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1000&q=80',
        location: 'Shinjuku Ward',
        recommendedDuration: 'Half Day',
        curatorTip: 'Enter through the Sendagaya Gate for serene footpaths with fewer tourists.'
      }
    ],
    travelTips: [
      'Acquire a digital Suica or Pasmo transit card on your Apple/Google Wallet before landing.',
      'Carry cash (yen notes); many traditional ramen-ya and izakayas operate ticket vending machines.',
      'Do not eat or drink while walking down the street; finish at the storefront or vending machine.'
    ]
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    region: 'Asia',
    tagline: 'Island of the Gods, Emerald Terraces, and Coastal Zen',
    description: 'Bali seduces travelers with mist-shrouded volcano peaks, cascading jungle valleys, clifftop Hindu temples, and world-renowned surf breaks. Immerse your senses in healing sound baths, spiritual cleansing rituals, and sunset beach clubs.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: -8.4095, lon: 115.1889 },
    bestTime: 'April - October (Dry Season)',
    rating: 4.88,
    reviewsCount: 3190,
    travelStyles: ['Relaxed', 'Adventure', 'Culture', 'Beaches'],
    budgetTier: 'Moderate',
    currency: 'IDR (Rp)',
    language: 'Indonesian & Balinese',
    timezone: 'UTC+8 (WITA)',
    featured: false,
    trending: true,
    famousPlaces: [
      {
        id: 'tegallalang-terraces',
        number: '01',
        name: 'Tegallalang Rice Terraces & Subak',
        category: 'UNESCO Hydraulic Landscape',
        description: 'Dramatic stepped rice paddies carved into verdant hillsides, fed by the ancient 9th-century Subak cooperative irrigation system and crowned with coconut palms.',
        image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1000&q=80',
        location: 'Ubud, Gianyar',
        recommendedDuration: '2 - 3 Hours',
        curatorTip: 'Arrive at 6:30 AM when morning golden rays pierce through palm fronds creating cathedral sunbeams over the mist.'
      },
      {
        id: 'uluwatu-temple',
        number: '02',
        name: 'Pura Luhur Uluwatu & Clifftop Kecak',
        category: 'Sea Temple & Fire Dance',
        description: 'Perched precariously 70 meters above crashing Indian Ocean waves on a sheer limestone cliff, this sacred sea temple hosts nightly hypnotic Kecak fire dance performances at sunset.',
        image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1000&q=80',
        location: 'South Kuta, Badung',
        recommendedDuration: 'Evening (3 Hours)',
        curatorTip: 'Secure Kecak dance tickets online 2 days in advance; beware of cheeky temple monkeys eyeing sunglasses.'
      },
      {
        id: 'tanah-lot',
        number: '03',
        name: 'Pura Tanah Lot Sea Temple',
        category: 'Offshore Sea Sanctum',
        description: 'An ancient rock formation temple sculpted by relentless tides, surrounded by sea waves at high tide and accessible on foot during low tide.',
        image: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=1000&q=80',
        location: 'Tabanan Regency',
        recommendedDuration: '2 Hours',
        curatorTip: 'Watch sunset from the cliffside terraces on the north side with chilled young coconut water.'
      }
    ],
    travelTips: [
      'Rent a private car with local driver for ~$45 USD per full day rather than riding motorbikes in traffic.',
      'Wear a sarong and sash when entering any temple complex (usually provided at entrance).',
      'Drink only bottled or filtered water; avoid tap water.'
    ]
  },
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'United Arab Emirates',
    region: 'Middle East',
    tagline: 'Miracle in the Dunes and Architectural Extravaganza',
    description: 'Rising daringly from Arabian desert sands, Dubai is a metropolis of world records: the world’s tallest tower, largest choreographed fountain, artificial archipelagoes, and Michelin-starred culinary dining.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 25.2048, lon: 55.2708 },
    bestTime: 'November - March',
    rating: 4.85,
    reviewsCount: 2980,
    travelStyles: ['Luxury', 'Adventure', 'Food'],
    budgetTier: 'Luxury',
    currency: 'AED (د.إ)',
    language: 'Arabic & English',
    timezone: 'UTC+4 (GST)',
    featured: false,
    trending: true,
    famousPlaces: [
      {
        id: 'burj-khalifa',
        number: '01',
        name: 'Burj Khalifa & The Dubai Fountain',
        category: '828m Sky Piercing Wonder',
        description: 'The tallest structure ever built by human hands soars 828 meters into Arabian clouds. Below, the 30-acre lake comes alive with choreographed light and water jets shooting 140 meters high.',
        image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1000&q=80',
        location: 'Downtown Dubai',
        recommendedDuration: '2 - 3 Hours',
        curatorTip: 'Book the Level 148 At the Top SKY ticket for fast-track elevators and private lounge terrace service.'
      },
      {
        id: 'palm-jumeirah',
        number: '02',
        name: 'Palm Jumeirah & Atlantis The Royal',
        category: 'Artificial Ocean Archipelago',
        description: 'A palm-tree-shaped engineering marvel in the Persian Gulf, lined with billionaire villas, ultra-luxury resorts, and infinity sky pools suspended 90 meters above the sea.',
        image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=80',
        location: 'Jumeirah Coastline',
        recommendedDuration: 'Half Day',
        curatorTip: 'Visit The View at The Palm on Level 52 for a bird’s eye perspective of the fronds stretching into the turquoise Gulf.'
      },
      {
        id: 'museum-of-the-future',
        number: '03',
        name: 'Museum of the Future',
        category: 'Torus Architectural Feat',
        description: 'A stainless-steel torus adorned with Arabic calligraphy poetry penned by HH Sheikh Mohammed bin Rashid Al Maktoum, exploring humanity’s next 50 years of space and biological innovation.',
        image: 'https://images.unsplash.com/photo-1634979149798-e9a116d14233?auto=format&fit=crop&w=1000&q=80',
        location: 'Sheikh Zayed Road',
        recommendedDuration: '2 Hours',
        curatorTip: 'Tickets sell out months in advance; book your timed entry the moment flights are confirmed.'
      }
    ],
    travelTips: [
      'Take the automated Dubai Metro Gold Class cabin for pristine elevated views of Sheikh Zayed Road skyscrapers.',
      'Friday afternoon through Saturday evening is the peak weekend social calendar.',
      'Dress modestly in traditional souks and religious spaces; lightweight linen clothing is ideal.'
    ]
  }
];
