import { Destination } from './types';

export const DESTINATIONS_PART5: Destination[] = [
  // INDIA
  {
    id: 'delhi',
    name: 'Delhi',
    country: 'India',
    region: 'Asia',
    tagline: 'Imperial Capital of Monuments, Spices, and Millennia of Dynasties',
    description: 'India’s capital is a monumental tapestry where the Mughal ramparts of the Red Fort and medieval minarets of Qutub Minar coexist with grand colonial avenues, bustling spice bazaars, and legendary culinary heritage.',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1597040663450-48283cb99351?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 28.6139, lon: 77.209 },
    bestTime: 'October - March',
    rating: 4.86,
    reviewsCount: 4210,
    travelStyles: ['Culture', 'Food', 'Historical'],
    budgetTier: 'Budget',
    currency: 'INR (₹)',
    language: 'Hindi & English',
    timezone: 'UTC+5:30 (IST)',
    featured: true,
    trending: true,
    famousPlaces: [
      {
        id: 'qutub-minar',
        number: '01',
        name: 'Qutub Minar & Mehrauli Complex',
        category: '12th-Century Victory Tower',
        description: 'A 73-meter fluted red sandstone minaret built in 1192, surrounded by ancient iron pillars and intricate Indo-Islamic archways.',
        image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80',
        location: 'Mehrauli',
        recommendedDuration: '2 - 3 Hours',
        curatorTip: 'Visit early morning for cool air and dramatic shadows across the Alai Darwaza.'
      },
      {
        id: 'humayuns-tomb',
        number: '02',
        name: 'Humayun’s Tomb & Mughal Charbagh',
        category: 'UNESCO Garden Mausoleum',
        description: 'The grand architectural precursor to the Taj Mahal, set within peaceful Persian geometric water gardens and red sandstone pavilions.',
        image: 'https://images.unsplash.com/photo-1597040663450-48283cb99351?auto=format&fit=crop&w=1000&q=80',
        location: 'Nizamuddin East',
        recommendedDuration: '2 Hours',
        curatorTip: 'Sunset golden hour casts a warm amber glow over the white marble dome.'
      },
      {
        id: 'chandni-chowk',
        number: '03',
        name: 'Old Delhi & Chandni Chowk',
        category: 'Mughal Bazaars & Street Cuisine',
        description: 'Bustling historic bazaars filled with antique spice stalls, the red ramparts of the Red Fort, and historic street food at Paranthe Wali Gali.',
        image: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1000&q=80',
        location: 'Old Delhi',
        recommendedDuration: 'Half Day',
        curatorTip: 'Take an electric rickshaw into Khari Baoli, Asia’s largest wholesale spice market.'
      }
    ],
    travelTips: [
      'The Delhi Metro is clean, air-conditioned, and the fastest way to travel between historical landmarks.',
      'Street food at Chandni Chowk and Bengali Market is legendary; choose bustling stalls with high turnover.',
      'Pre-book ASI tickets online using the QR code entrance to skip ticket booth lines.'
    ]
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    country: 'India',
    region: 'Asia',
    tagline: 'City of Dreams, Arabian Sea Seafronts, and Bollywood Energy',
    description: 'A thriving financial and cinematic metropolis where colonial Victorian Gothic architecture rises beside Arabian Sea promenades, bustling street markets, and high-energy nightlife.',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 18.922, lon: 72.8347 },
    bestTime: 'November - February',
    rating: 4.88,
    reviewsCount: 3820,
    travelStyles: ['Food', 'Culture', 'Luxury'],
    budgetTier: 'Moderate',
    currency: 'INR (₹)',
    language: 'Marathi & Hindi',
    timezone: 'UTC+5:30 (IST)',
    trending: true,
    famousPlaces: [
      {
        id: 'gateway-of-india',
        number: '01',
        name: 'Gateway of India & Colaba',
        category: 'Historic Basalt Arch',
        description: 'Majestic 1924 basalt triumphal arch overlooking Mumbai Harbour and the legendary Taj Mahal Palace Hotel.',
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1000&q=80',
        location: 'Apollo Bunder',
        recommendedDuration: '2 Hours',
        curatorTip: 'Catch a harbour ferry from here to explore the 5th-century rock-cut Elephanta Caves.'
      },
      {
        id: 'marine-drive',
        number: '02',
        name: 'Marine Drive & Queen’s Necklace',
        category: 'Arcing Coastal Promenade',
        description: 'A 3.6-kilometer seaside boulevard curving along Netaji Subhash Chandra Bose Road, illuminated like a string of pearls at dusk.',
        image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=1000&q=80',
        location: 'South Mumbai',
        recommendedDuration: 'Evening',
        curatorTip: 'Stroll at dusk and enjoy fresh roasted corn on the cob (bhutta) with lime juice.'
      }
    ],
    travelTips: [
      'Take local trains outside peak hours or use ride-hailing apps for comfortable travel across the city.',
      'Sip Iranian tea and Bun Maska at iconic cafes like Britannia & Co. or Cafe Leopold.'
    ]
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    country: 'India',
    region: 'Asia',
    tagline: 'City of Pearls, Nizam Royal Splendor, and World-Famous Biryani',
    description: 'The historic capital of the Nizams, where centuries-old stone citadels, intricate minarets, and pearl markets blend seamlessly with a high-tech modern metropolis.',
    image: 'https://images.unsplash.com/photo-1609137144822-4217112024fa?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1609137144822-4217112024fa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 17.385, lon: 78.4867 },
    bestTime: 'October - March',
    rating: 4.89,
    reviewsCount: 3120,
    travelStyles: ['Food', 'Culture', 'Historical'],
    budgetTier: 'Budget',
    currency: 'INR (₹)',
    language: 'Telugu & Urdu',
    timezone: 'UTC+5:30 (IST)',
    trending: true,
    famousPlaces: [
      {
        id: 'charminar',
        number: '01',
        name: 'Charminar & Laad Bazaar',
        category: '1591 Monument & Mosque',
        description: 'The iconic four-minaret monument standing at the heart of historic bazaars famed for glass bangles and pearls.',
        image: 'https://images.unsplash.com/photo-1609137144822-4217112024fa?auto=format&fit=crop&w=1000&q=80',
        location: 'Old City',
        recommendedDuration: '2 Hours',
        curatorTip: 'Sip authentic Irani Chai with Osmania biscuits at Nimrah Cafe overlooking the monument.'
      },
      {
        id: 'golconda-fort',
        number: '02',
        name: 'Golconda Fort & Acoustics',
        category: 'Medieval Acoustic Citadel',
        description: 'A fortress of the Qutb Shahi kings, famed for acoustic echoes where a handclap at the entrance echoes 1km away at the hilltop summit.',
        image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=1000&q=80',
        location: 'Ibrahim Bagh',
        recommendedDuration: '3 Hours',
        curatorTip: 'Climb to the Bala Hissar pavilion at sunset for sweeping vistas across the city.'
      }
    ],
    travelTips: [
      'Sample authentic Hyderabadi Dum Biryani at Paradise, Bawarchi, or Cafe Bahar.',
      'Explore Laad Bazaar for lacquer bangles and authentic Basra pearls.'
    ]
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    country: 'India',
    region: 'Asia',
    tagline: 'Silicon Valley of India, Garden City, and Craft Brewery Haven',
    description: 'India’s high-tech innovation capital, celebrated for lush botanical gardens, pleasant year-round elevation, thriving craft beer culture, and vibrant cafe scene.',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616489953149-8e2b86129841?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 12.9716, lon: 77.5946 },
    bestTime: 'Year-Round (October - February ideal)',
    rating: 4.84,
    reviewsCount: 2950,
    travelStyles: ['Relaxed', 'Food', 'Culture'],
    budgetTier: 'Moderate',
    currency: 'INR (₹)',
    language: 'Kannada & English',
    timezone: 'UTC+5:30 (IST)',
    famousPlaces: [
      {
        id: 'lalbagh',
        number: '01',
        name: 'Lalbagh Botanical Garden & Glass House',
        category: '240-Acre Botanical Sanctuary',
        description: 'Commissioned by Hyder Ali in 1760, featuring century-old trees and a Victorian glass house inspired by London’s Crystal Palace.',
        image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80',
        location: 'Mavalli',
        recommendedDuration: '2 Hours',
        curatorTip: 'Visit early in the morning for birdwatching and follow with breakfast at MTR.'
      }
    ],
    travelTips: [
      'The Namma Metro connects major hubs including Indiranagar, MG Road, and Whitefield.',
      'Indiranagar and Koramangala host some of Asia’s finest craft microbreweries.'
    ]
  },
  {
    id: 'chennai',
    name: 'Chennai',
    country: 'India',
    region: 'Asia',
    tagline: 'Cultural Gateway of South India, Classical Arts, and Marina Sands',
    description: 'A coastal metropolis renowned for magnificent Dravidian temple gopurams, classical Carnatic music festivals, aromatic South Indian cuisine, and the second longest natural urban beach on Earth.',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 13.0827, lon: 80.2707 },
    bestTime: 'November - February',
    rating: 4.82,
    reviewsCount: 2640,
    travelStyles: ['Culture', 'Beaches', 'Food'],
    budgetTier: 'Budget',
    currency: 'INR (₹)',
    language: 'Tamil & English',
    timezone: 'UTC+5:30 (IST)',
    famousPlaces: [
      {
        id: 'kapaleeshwarar',
        number: '01',
        name: 'Kapaleeshwarar Temple & Mylapore',
        category: '7th-Century Dravidian Gopuram',
        description: 'Ancient temple of Lord Shiva with an intricately sculpted 37-meter rainbow gopuram towering over vibrant temple ponds.',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80',
        location: 'Mylapore',
        recommendedDuration: '2 Hours',
        curatorTip: 'Explore surrounding streets for bronze statues, fresh jasmine garlands, and hot filter coffee.'
      }
    ],
    travelTips: [
      'Take an evening walk along Marina Beach to catch ocean breezes and local seafood snacks.',
      'December and January host the famous Madras Music Season celebrating classical Carnatic arts.'
    ]
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    country: 'India',
    region: 'Asia',
    tagline: 'The Pink City of Maharajas, Amber Fortresses, and Royal Palaces',
    description: 'The royal capital of Rajasthan, painted in distinctive terracotta pink, famed for majestic hilltop forts, astronomical observatories, and vibrant block-print textiles.',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600100397608-f010f443b781?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 26.9124, lon: 75.7873 },
    bestTime: 'October - March',
    rating: 4.91,
    reviewsCount: 4500,
    travelStyles: ['Culture', 'Luxury', 'Historical'],
    budgetTier: 'Moderate',
    currency: 'INR (₹)',
    language: 'Hindi & Rajasthani',
    timezone: 'UTC+5:30 (IST)',
    featured: true,
    trending: true,
    famousPlaces: [
      {
        id: 'hawa-mahal',
        number: '01',
        name: 'Hawa Mahal — Palace of the Winds',
        category: '953 Honeycomb Lattice Windows',
        description: 'A five-story pink sandstone facade engineered so royal ladies could observe street festivals unseen from behind delicate jharokhas.',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80',
        location: 'Badi Choupad',
        recommendedDuration: '1 - 2 Hours',
        curatorTip: 'Visit Wind View Cafe on the rooftop across the street for a clear perspective of the facade.'
      }
    ],
    travelTips: [
      'Combine Amber Fort, Jaigarh Fort, and Nahargarh Fort on a full-day heritage excursion.',
      'Taste Dal Baati Churma and Ghewar at authentic heritage dining establishments.'
    ]
  },
  {
    id: 'agra',
    name: 'Agra',
    country: 'India',
    region: 'Asia',
    tagline: 'Immortal Epitome of Love, Mughal Forts, and Marble Inlay',
    description: 'Home of the sublime Taj Mahal, this historic city along the Yamuna River showcases the pinnacle of Mughal architecture, sprawling red sandstone forts, and delicate marble craftsmanship.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 27.1767, lon: 78.0081 },
    bestTime: 'October - March',
    rating: 4.95,
    reviewsCount: 5200,
    travelStyles: ['Culture', 'Historical'],
    budgetTier: 'Budget',
    currency: 'INR (₹)',
    language: 'Hindi & English',
    timezone: 'UTC+5:30 (IST)',
    trending: true,
    famousPlaces: [
      {
        id: 'taj-mahal',
        number: '01',
        name: 'The Taj Mahal & Yamuna River',
        category: 'Seven Wonders of the World',
        description: 'Emperor Shah Jahan’s pure white Makrana marble mausoleum for his beloved Mumtaz Mahal, adorned with pietre dure semi-precious inlay.',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80',
        location: 'Dharmapuri',
        recommendedDuration: '3 Hours',
        curatorTip: 'Enter at sunrise through the East Gate for serene reflection pool views before crowds arrive.'
      }
    ],
    travelTips: [
      'The Taj Mahal is closed on Fridays; plan your visit for Saturday through Thursday.',
      'Mehtab Bagh across the Yamuna River offers sunset views of the monument.'
    ]
  },
  {
    id: 'goa',
    name: 'Goa',
    country: 'India',
    region: 'Asia',
    tagline: 'Sun-Drenched Arabian Coastline, Portuguese Churches, and Susegad',
    description: 'India’s premier coastal retreat offers golden beaches, coconut palm groves, 16th-century Portuguese baroque cathedrals, fresh seafood shacks, and a relaxed susegad way of life.',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 15.2993, lon: 74.124 },
    bestTime: 'November - February',
    rating: 4.87,
    reviewsCount: 4100,
    travelStyles: ['Beaches', 'Relaxed', 'Food'],
    budgetTier: 'Moderate',
    currency: 'INR (₹)',
    language: 'Konkani & English',
    timezone: 'UTC+5:30 (IST)',
    featured: true,
    famousPlaces: [
      {
        id: 'palolem-beach',
        number: '01',
        name: 'Palolem Beach & South Goa Bays',
        category: 'Crescent Turquoise Lagoon',
        description: 'A serene crescent beach fringed with coconut palms, colorful beach shacks, and dolphin-spotting boat trips.',
        image: 'https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=1000&q=80',
        location: 'Canacona',
        recommendedDuration: 'Half Day',
        curatorTip: 'Rent a kayak to paddle to hidden Butterfly Beach for snorkeling and secluded sands.'
      }
    ],
    travelTips: [
      'Rent a scooter to explore the scenic coastal roads and Latin Quarter villas.',
      'South Goa offers tranquil beaches, while North Goa is famous for watersports and nightlife.'
    ]
  },
  {
    id: 'kashmir',
    name: 'Kashmir',
    country: 'India',
    region: 'Asia',
    tagline: 'Paradise on Earth, Dal Lake Shikaras, and Snow-Capped Pir Panjal',
    description: 'A Himalayan wonderland of mirror-like alpine lakes, cedar-carved houseboats, lush Mughal gardens, pine valleys, and high-altitude ski slopes.',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 34.0837, lon: 74.7973 },
    bestTime: 'April - October (Spring/Summer) & Dec - Feb (Snow)',
    rating: 4.93,
    reviewsCount: 3600,
    travelStyles: ['Adventure', 'Relaxed', 'Mountains'],
    budgetTier: 'Moderate',
    currency: 'INR (₹)',
    language: 'Kashmiri & Urdu',
    timezone: 'UTC+5:30 (IST)',
    featured: true,
    famousPlaces: [
      {
        id: 'dal-lake',
        number: '01',
        name: 'Dal Lake & Houseboats',
        category: 'Jewel of Srinagar',
        description: 'Mirror-like alpine lake adorned with cedar-carved houseboats and wooden shikaras gliding past floating lotus gardens.',
        image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80',
        location: 'Srinagar',
        recommendedDuration: 'Overnight',
        curatorTip: 'Wake up early for the 5:00 AM floating vegetable market where traders barter from wooden boats.'
      }
    ],
    travelTips: [
      'Book a traditional cedar-carved houseboat on Nigeen or Dal Lake for an unforgettable stay.',
      'Reserve Gulmarg Gondola Phase 2 tickets in advance for high-altitude snowfields.'
    ]
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    country: 'India',
    region: 'Asia',
    tagline: 'Land of Kings, Golden Thar Dunes, and Imposing Desert Forts',
    description: 'The regal desert kingdom of India, encompassing the golden sand dunes of Jaisalmer, the romantic lake palaces of Udaipur, and the indigo houses of Jodhpur.',
    image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 26.9124, lon: 75.7873 },
    bestTime: 'October - March',
    rating: 4.92,
    reviewsCount: 4800,
    travelStyles: ['Culture', 'Historical', 'Adventure'],
    budgetTier: 'Moderate',
    currency: 'INR (₹)',
    language: 'Hindi & Rajasthani',
    timezone: 'UTC+5:30 (IST)',
    famousPlaces: [
      {
        id: 'udaipur-city-palace',
        number: '01',
        name: 'Udaipur City Palace & Lake Pichola',
        category: 'Venice of the East',
        description: 'A majestic white marble palace floating above Lake Pichola with mirrored rooms, cupolas, and panoramic Aravalli hill views.',
        image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1000&q=80',
        location: 'Udaipur',
        recommendedDuration: '2 Days',
        curatorTip: 'Take a sunset boat ride on Lake Pichola for reflections of the illuminated palace walls.'
      }
    ],
    travelTips: [
      'Combine Jaipur, Jodhpur, and Udaipur for the quintessential Golden Triangle desert circuit.',
      'Spend a night under the stars in a luxury tent camp in the Thar Desert.'
    ]
  },

  // FRANCE (Nice, Lyon, Marseille)
  {
    id: 'nice',
    name: 'Nice',
    country: 'France',
    region: 'Europe',
    tagline: 'Queen of the French Riviera, Baie des Anges, and Azure Coastline',
    description: 'The jewel of the Côte d’Azur, blending Italianate Belle Époque architecture with pebble beaches along the Mediterranean and vibrant open-air flower markets.',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 43.7102, lon: 7.262 },
    bestTime: 'May - October',
    rating: 4.88,
    reviewsCount: 2900,
    travelStyles: ['Beaches', 'Luxury', 'Relaxed'],
    budgetTier: 'Premium',
    currency: 'EUR (€)',
    language: 'French',
    timezone: 'UTC+1 (CET)',
    famousPlaces: [
      {
        id: 'promenade-des-anglais',
        number: '01',
        name: 'Promenade des Anglais & Castle Hill',
        category: 'Mediterranean Seafront',
        description: 'The famous palm-lined seaside boulevard curving along the turquoise Baie des Anges with sweeping views from Colline du Château.',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80',
        location: 'Nice Promenade',
        recommendedDuration: '2 Hours',
        curatorTip: 'Climb the steps to Castle Hill at sunset for the quintessential curved bay view.'
      }
    ],
    travelTips: [
      'Take the coastal train to Monaco or Cannes for easy Riviera day trips.',
      'Taste authentic Socca (crispy chickpea pancake) at Cours Saleya.'
    ]
  },

  // UAE (Abu Dhabi)
  {
    id: 'abu-dhabi',
    name: 'Abu Dhabi',
    country: 'United Arab Emirates',
    region: 'Middle East',
    tagline: 'Gleaming White Marble Mosques, Louvre on the Water, and Desert Dunes',
    description: 'The cultural and political capital of the UAE, combining the awe-inspiring Sheikh Zayed Grand Mosque with futuristic museums, mangrove lagoons, and world-class racing circuits.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 24.4539, lon: 54.3773 },
    bestTime: 'November - March',
    rating: 4.91,
    reviewsCount: 3100,
    travelStyles: ['Culture', 'Luxury', 'Relaxed'],
    budgetTier: 'Luxury',
    currency: 'AED (د.إ)',
    language: 'Arabic & English',
    timezone: 'UTC+4 (GST)',
    famousPlaces: [
      {
        id: 'sheikh-zayed-mosque',
        number: '01',
        name: 'Sheikh Zayed Grand Mosque',
        category: 'Pure White Marble Masterpiece',
        description: 'One of the world’s largest mosques, featuring 82 white domes, 24-carat gold chandeliers, and the world’s largest hand-knotted carpet.',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',
        location: 'Al Rawdah',
        recommendedDuration: '2 - 3 Hours',
        curatorTip: 'Visit before sunset to experience the mosque transforming under celestial blue lighting.'
      }
    ],
    travelTips: [
      'Modest attire is strictly required for entering the Grand Mosque; abayas are provided.',
      'Visit Louvre Abu Dhabi on Saadiyat Island to experience Jean Nouvel’s rain of light dome.'
    ]
  },

  // JAPAN (Kyoto, Osaka)
  {
    id: 'kyoto',
    name: 'Kyoto',
    country: 'Japan',
    region: 'Asia',
    tagline: 'Ancient Imperial Heart of Japan, Zen Rock Gardens, and Bamboo Groves',
    description: 'Japan’s ancient imperial capital boasts over 1,600 Buddhist temples, 400 Shinto shrines, historic geisha districts in Gion, and tranquil bamboo forests.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 35.0116, lon: 135.7681 },
    bestTime: 'March - May (Cherry Blossoms) & Oct - Nov (Foliage)',
    rating: 4.96,
    reviewsCount: 4700,
    travelStyles: ['Culture', 'Historical', 'Relaxed'],
    budgetTier: 'Premium',
    currency: 'JPY (¥)',
    language: 'Japanese',
    timezone: 'UTC+9 (JST)',
    featured: true,
    trending: true,
    famousPlaces: [
      {
        id: 'fushimi-inari',
        number: '01',
        name: 'Fushimi Inari-Taisha & 10,000 Torii',
        category: 'Sacred Shinto Mountain Trail',
        description: 'Thousands of vivid vermilion torii gates winding through sacred pine forests up Mount Inari.',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80',
        location: 'Fushimi Ward',
        recommendedDuration: '3 Hours',
        curatorTip: 'Hike past the halfway point for peaceful viewpoints with far fewer visitors.'
      }
    ],
    travelTips: [
      'Purchase an IC card (ICOCA/Suica) for convenient bus and subway travel.',
      'Rent a bicycle to explore peaceful temple paths along the Philosopher’s Walk.'
    ]
  },

  // USA (Los Angeles, San Francisco, Las Vegas, Miami)
  {
    id: 'los-angeles',
    name: 'Los Angeles',
    country: 'United States',
    region: 'Americas',
    tagline: 'Entertainment Capital, Pacific Sunsets, and Golden Coastline',
    description: 'Sprawling Southern California metropolis famous for Hollywood studios, palm-lined avenues, golden Pacific beaches from Malibu to Venice, and world-class culinary scenes.',
    image: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 34.0522, lon: -118.2437 },
    bestTime: 'March - May & September - November',
    rating: 4.85,
    reviewsCount: 3900,
    travelStyles: ['Adventure', 'Beaches', 'Food'],
    budgetTier: 'Premium',
    currency: 'USD ($)',
    language: 'English & Spanish',
    timezone: 'UTC-8 (PST)',
    trending: true,
    famousPlaces: [
      {
        id: 'griffith-observatory',
        number: '01',
        name: 'Griffith Observatory & Hollywood Sign',
        category: 'Hilltop Art Deco Observatory',
        description: 'Perched on Mount Hollywood offering sweeping views across the LA basin, Pacific Ocean, and the Hollywood Sign.',
        image: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&w=1000&q=80',
        location: 'Los Feliz',
        recommendedDuration: '3 Hours',
        curatorTip: 'Arrive before sunset to watch the city transition from dusk to glittering lights.'
      }
    ],
    travelTips: [
      'Renting a car or using ride-hailing is recommended given the sprawling scale of the region.',
      'Plan activities by neighborhood (e.g. Westside, Hollywood, Downtown) to avoid peak traffic.'
    ]
  },

  // ITALY (Venice, Florence)
  {
    id: 'venice',
    name: 'Venice',
    country: 'Italy',
    region: 'Europe',
    tagline: 'City of Canals, Gondolas, and Venetian Gothic Palazzi',
    description: 'An architectural marvel built on 118 small islands connected by over 400 bridges, where marble palaces rise directly out of emerald lagoon waters.',
    image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 45.4408, lon: 12.3155 },
    bestTime: 'April - June & September - October',
    rating: 4.92,
    reviewsCount: 4600,
    travelStyles: ['Culture', 'Historical', 'Relaxed'],
    budgetTier: 'Luxury',
    currency: 'EUR (€)',
    language: 'Italian',
    timezone: 'UTC+1 (CET)',
    featured: true,
    famousPlaces: [
      {
        id: 'st-marks-basilica',
        number: '01',
        name: 'St. Mark’s Square & Grand Canal',
        category: 'Venetian Byzantine Masterpiece',
        description: 'The monumental heart of Venice flanked by the Doge’s Palace, St. Mark’s golden mosaics, and gondolas on the Grand Canal.',
        image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1000&q=80',
        location: 'Piazza San Marco',
        recommendedDuration: '3 Hours',
        curatorTip: 'Take a Vaporetto (water bus) route 1 along the Grand Canal at golden hour.'
      }
    ],
    travelTips: [
      'Wander away from the main thoroughfares into quiet residential sestieri like Cannaregio and Dorsoduro.',
      'Sample Cicchetti (Venetian tapas) with a glass of local Prosecco at traditional Bacari.'
    ]
  },

  // THAILAND (Bangkok, Phuket)
  {
    id: 'bangkok',
    name: 'Bangkok',
    country: 'Thailand',
    region: 'Asia',
    tagline: 'City of Angels, Golden Spires, and Electric Night Markets',
    description: 'A sensory wonderland where glittering Buddhist temples and the Grand Palace stand alongside futuristic mega-malls, bustling canal longtails, and world-renowned street food.',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 13.7563, lon: 100.5018 },
    bestTime: 'November - February',
    rating: 4.89,
    reviewsCount: 4400,
    travelStyles: ['Food', 'Culture', 'Adventure'],
    budgetTier: 'Budget',
    currency: 'THB (฿)',
    language: 'Thai',
    timezone: 'UTC+7 (ICT)',
    featured: true,
    trending: true,
    famousPlaces: [
      {
        id: 'wat-arun',
        number: '01',
        name: 'Wat Arun — Temple of Dawn',
        category: 'Chao Phraya River Landmark',
        description: 'An iconic Khmer-style prang tower decorated in colorful porcelain shards that catch the morning and evening light on the Chao Phraya River.',
        image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1000&q=80',
        location: 'Bangkok Yai',
        recommendedDuration: '2 Hours',
        curatorTip: 'View the illuminated temple at night from a riverfront cafe across the water.'
      }
    ],
    travelTips: [
      'The BTS Skytrain and MRT subway provide fast, traffic-free access across central Bangkok.',
      'Respect dress codes at the Grand Palace and temples: shoulders and knees must be covered.'
    ]
  },

  // EGYPT (Cairo)
  {
    id: 'cairo',
    name: 'Cairo',
    country: 'Egypt',
    region: 'Middle East',
    tagline: 'City of a Thousand Minarets, Great Pyramids, and Nile Feluccas',
    description: 'Egypt’s sprawling capital on the banks of the Nile, where the ancient Giza Plateau and Great Sphinx guard millennia of history beside medieval Islamic alleyways and vibrant souks.',
    image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 30.0444, lon: 31.2357 },
    bestTime: 'October - April',
    rating: 4.87,
    reviewsCount: 3900,
    travelStyles: ['Historical', 'Culture', 'Adventure'],
    budgetTier: 'Budget',
    currency: 'EGP (E£)',
    language: 'Arabic',
    timezone: 'UTC+2 (EET)',
    featured: true,
    famousPlaces: [
      {
        id: 'giza-pyramids',
        number: '01',
        name: 'Great Pyramids of Giza & The Sphinx',
        category: 'Ancient Wonder of the World',
        description: 'The sole surviving wonder of the ancient world, built for Pharaoh Khufu over 4,500 years ago on the edge of the Sahara Desert.',
        image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=1000&q=80',
        location: 'Giza Plateau',
        recommendedDuration: 'Half Day',
        curatorTip: 'Take a camel or horseback ride into the desert behind the pyramids for a panoramic view of all three pyramids aligned.'
      }
    ],
    travelTips: [
      'Explore the Grand Egyptian Museum (GEM) for the comprehensive collection of Tutankhamun treasures.',
      'Sip mint tea at El Fishawy cafe in Khan el-Khalili bazaar, operating continuously for over 200 years.'
    ]
  },

  // TURKEY (Istanbul, Cappadocia)
  {
    id: 'istanbul',
    name: 'Istanbul',
    country: 'Turkey',
    region: 'Europe',
    tagline: 'Where Continents Collide, Byzantine Domes, and Bosphorus Breezes',
    description: 'The historic capital bridging Europe and Asia across the Bosphorus Strait, adorned with the monumental Hagia Sophia, Blue Mosque, and the Grand Bazaar.',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 41.0082, lon: 28.9784 },
    bestTime: 'April - May & September - November',
    rating: 4.93,
    reviewsCount: 4600,
    travelStyles: ['Culture', 'Food', 'Historical'],
    budgetTier: 'Moderate',
    currency: 'TRY (₺)',
    language: 'Turkish',
    timezone: 'UTC+3 (TRT)',
    featured: true,
    trending: true,
    famousPlaces: [
      {
        id: 'hagia-sophia',
        number: '01',
        name: 'Hagia Sophia & Sultanahmet',
        category: '6th-Century Byzantine & Ottoman Marvel',
        description: 'Built as an Eastern Orthodox cathedral in 537 AD, famed for its massive floating dome and golden mosaics.',
        image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1000&q=80',
        location: 'Fatih',
        recommendedDuration: '2 Hours',
        curatorTip: 'Cross the Sultanahmet park to the Blue Mosque directly opposite for a dual architectural perspective.'
      }
    ],
    travelTips: [
      'Take a public ferry from Eminönü to Kadıköy on the Asian side for sunset views of the historic peninsula.',
      'Get an Istanbulkart transit card for seamless access to trams, metros, and ferries.'
    ]
  }
];
