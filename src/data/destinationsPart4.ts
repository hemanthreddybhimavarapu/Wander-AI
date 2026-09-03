import { Destination } from './types';

export const DESTINATIONS_PART4: Destination[] = [
  {
    id: 'madrid',
    name: 'Madrid',
    country: 'Spain',
    region: 'Europe',
    tagline: 'Imperial Boulevards, Golden Art Triangle, and Endless Tapas Nights',
    description: 'Spain’s vibrant capital pairs grand neoclassical architecture with world-renowned art sanctuaries at the Prado and Reina Sofía. By dusk, historic plazas and vermouth taverns spill onto cobblestone sidewalks in celebration of the good life.',
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 40.4168, lon: -3.7038 },
    bestTime: 'April - May & September - October',
    rating: 4.88,
    reviewsCount: 3240,
    travelStyles: ['Culture', 'Food', 'Relaxed'],
    budgetTier: 'Moderate',
    currency: 'EUR (€)',
    language: 'Spanish',
    timezone: 'UTC+1 (CET)',
    featured: false,
    trending: true,
    famousPlaces: [
      {
        id: 'royal-palace-madrid',
        number: '01',
        name: 'Palacio Real de Madrid',
        category: 'Grand Bourbon Royal Palace',
        description: 'Western Europe’s largest functioning royal palace features 3,418 lavish rooms filled with frescoes by Tiepolo, Stradivarius violins, and the Royal Armory.',
        image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1000&q=80',
        location: 'Calle de Bailén',
        recommendedDuration: '2 - 3 Hours',
        curatorTip: 'Stroll through the Sabatini Gardens at golden hour for sunset reflections on the palace facade.'
      },
      {
        id: 'prado-museum',
        number: '02',
        name: 'Museo Nacional del Prado',
        category: 'Golden Triangle Masterpieces',
        description: 'One of the world’s premier art galleries, housing definitive collections of Velázquez (Las Meninas), Goya, El Greco, and Hieronymus Bosch.',
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1000&q=80',
        location: 'Paseo del Prado',
        recommendedDuration: '3 Hours',
        curatorTip: 'Admission is free Monday to Saturday from 6:00 PM to 8:00 PM; line up by 5:15 PM.'
      },
      {
        id: 'el-retiro-park',
        number: '03',
        name: 'El Retiro Park & Crystal Palace',
        category: 'UNESCO Royal Green Oasis',
        description: '350 acres of pristine royal gardens with a majestic rowing lake and the cast-iron and glass Palacio de Cristal hosting contemporary art installations.',
        image: 'https://images.unsplash.com/photo-1576085898323-218337e3e43c?auto=format&fit=crop&w=1000&q=80',
        location: 'Retiro District',
        recommendedDuration: '2 Hours',
        curatorTip: 'Rent a wooden rowboat on the central pond or visit the rose garden (La Rosaleda) in May.'
      }
    ],
    travelTips: [
      'Madrileños take merienda (afternoon snack like churros con chocolate at San Ginés) around 6:00 PM.',
      'Metro de Madrid is clean, safe, and air-conditioned; a 10-journey Multi card is economical.',
      'Most shops close for Sunday afternoons, while restaurants thrive late into the night.'
    ]
  },
  {
    id: 'seoul',
    name: 'Seoul',
    country: 'South Korea',
    region: 'Asia',
    tagline: 'K-Wave Pulsar, Ancient Joseon Palaces, and 24-Hour Night Markets',
    description: 'A dynamic metropolis where high-speed bullet trains and futuristic LED skyscrapers rise alongside 600-year-old royal palaces, tranquil Hanok villages, and electric street-food alleys.',
    image: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1546874177-9e664107314e?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 37.5665, lon: 126.978 },
    bestTime: 'September - November & April - May',
    rating: 4.94,
    reviewsCount: 3890,
    travelStyles: ['Culture', 'Food', 'Adventure', 'Luxury'],
    budgetTier: 'Premium',
    currency: 'KRW (₩)',
    language: 'Korean',
    timezone: 'UTC+9 (KST)',
    featured: true,
    trending: true,
    famousPlaces: [
      {
        id: 'gyeongbokgung-palace',
        number: '01',
        name: 'Gyeongbokgung Palace & Changing of Guards',
        category: 'Grand Joseon Royal Seat',
        description: 'Built in 1395, the largest of the Five Grand Palaces features the Hyangwonjeong pavilion floating on a lotus pond against the dramatic crags of Mount Bugaksan.',
        image: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1000&q=80',
        location: 'Jongno-gu',
        recommendedDuration: '3 Hours',
        curatorTip: 'Rent a traditional Hanbok from a nearby studio; admission to all royal palaces is 100% free if wearing Hanbok!'
      },
      {
        id: 'bukchon-hanok-village',
        number: '02',
        name: 'Bukchon Hanok Village',
        category: 'Traditional Wooden Alleyways',
        description: 'A preserved residential neighborhood of hundreds of traditional Korean tiled-roof houses (hanoks) dating back to the Joseon Dynasty, overlooking modern Seoul towers.',
        image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=1000&q=80',
        location: 'Between Gyeongbokgung & Changdeokgung',
        recommendedDuration: '2 Hours',
        curatorTip: 'Visit early in the morning (before 9:00 AM) and maintain silence as local residents live in these historic houses.'
      },
      {
        id: 'n-seoul-tower',
        number: '03',
        name: 'N Seoul Tower & Namsan Park',
        category: 'Panoramic Mountain Spire',
        description: 'Perched atop Mount Namsan at 480 meters above sea level, offering 360-degree vistas across the Han River, famous for millions of colorful Padlocks of Love.',
        image: 'https://images.unsplash.com/photo-1546874177-9e664107314e?auto=format&fit=crop&w=1000&q=80',
        location: 'Yongsan-gu',
        recommendedDuration: '2 Hours',
        curatorTip: 'Take the Namsan cable car up at dusk and hike down the illuminated city wall path.'
      }
    ],
    travelTips: [
      'Get a T-money transit card from any convenience store for seamless subway, bus, and taxi payments.',
      'Google Maps has limited walking directions in South Korea due to national security map laws; install Naver Map or KakaoMap.',
      'Tipping is not customary in Korea and can even cause confusion; exceptional service is already included.'
    ]
  }
];
