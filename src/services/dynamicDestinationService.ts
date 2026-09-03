import { Destination, FamousPlace } from '../data/types';
import { DESTINATIONS } from '../data/destinationsData';
import { fetchWeather } from './weatherService';
import { searchDestinationImage } from './imageService';

const CACHE_KEY_PREFIX = 'wanderai_dynamic_dest_';

// Curated lookup dictionary for instant landmark knowledge across popular worldwide cities
const KNOWN_LANDMARKS: Record<string, { places: FamousPlace[]; tagline: string; bestTime: string; currency: string; language: string; timezone: string; styles: string[] }> = {
  delhi: {
    tagline: 'Imperial Capital of Monuments, Spices, and Millennia of Dynasties',
    bestTime: 'October - March',
    currency: 'INR (₹)',
    language: 'Hindi & English',
    timezone: 'UTC+5:30 (IST)',
    styles: ['Culture', 'Food', 'Historical'],
    places: [
      { id: 'del-1', number: '01', name: 'Qutub Minar & Mehrauli Complex', category: '12th Century Victory Tower', description: 'A 73-meter fluted red sandstone minaret built in 1192, surrounded by ancient iron pillars and intricate Indo-Islamic archways.', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80', location: 'Mehrauli', recommendedDuration: '2 - 3 Hours', curatorTip: 'Visit in early morning for cool breeze and magnificent shadows across the Alai Darwaza.' },
      { id: 'del-2', number: '02', name: 'Humayun’s Tomb & Mughal Charbagh', category: 'UNESCO Garden Mausoleum', description: 'The grand architectural precursor to the Taj Mahal, set within peaceful Persian geometric water gardens and red sandstone pavilions.', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80', location: 'Nizamuddin East', recommendedDuration: '2 Hours', curatorTip: 'Photography is phenomenal during golden hour as the marble dome glows amber.' },
      { id: 'del-3', number: '03', name: 'Old Delhi & Chandni Chowk', category: 'Walled Mughal Heritage & Cuisine', description: 'Bustling historic bazaars filled with antique spice stalls, the red ramparts of the Red Fort, and historic street food at Paranthe Wali Gali.', image: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1000&q=80', location: 'Old Delhi', recommendedDuration: 'Half Day', curatorTip: 'Take an electric rickshaw to Khari Baoli, Asia’s largest wholesale spice market.' }
    ]
  },
  mumbai: {
    tagline: 'City of Dreams, Arabian Sea Seafronts, and Bollywood Glamour',
    bestTime: 'November - February',
    currency: 'INR (₹)',
    language: 'Marathi & Hindi',
    timezone: 'UTC+5:30 (IST)',
    styles: ['Food', 'Culture', 'Luxury'],
    places: [
      { id: 'mum-1', number: '01', name: 'Gateway of India & Colaba', category: 'Historic Basalt Arch', description: 'Majestic 1924 basalt triumphal arch overlooking Mumbai Harbour and the legendary Taj Mahal Palace Hotel.', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1000&q=80', location: 'Apollo Bunder', recommendedDuration: '2 Hours', curatorTip: 'Take a harbor ferry to the 5th-century rock-cut Elephanta Caves.' },
      { id: 'mum-2', number: '02', name: 'Marine Drive & Queen’s Necklace', category: 'Arcing Coastal Promenade', description: 'A 3.6-kilometer seaside boulevard curving along Netaji Subhash Chandra Bose Road, illuminated like a string of pearls at dusk.', image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=1000&q=80', location: 'South Mumbai', recommendedDuration: 'Evening', curatorTip: 'Enjoy roasted corn on the cob (bhutta) with lime while watching the Arabian Sea sunset.' },
      { id: 'mum-3', number: '03', name: 'Chhatrapati Shivaji Maharaj Terminus', category: 'Victorian Gothic UNESCO Station', description: 'An exuberant synthesis of Victorian Italianate Gothic Revival and classical Indian palace architecture with stone domes and gargoyles.', image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1000&q=80', location: 'Fort', recommendedDuration: '1 Hour', curatorTip: 'Admire the illuminated facade at night when the station is lit up in vibrant colors.' }
    ]
  },
  hyderabad: {
    tagline: 'City of Pearls, Nizam Royal Splendor, and World-Famous Biryani',
    bestTime: 'October - March',
    currency: 'INR (₹)',
    language: 'Telugu, Urdu & Hindi',
    timezone: 'UTC+5:30 (IST)',
    styles: ['Food', 'Culture', 'Historical'],
    places: [
      { id: 'hyd-1', number: '01', name: 'Charminar & Laad Bazaar', category: '1591 Monument & Mosque', description: 'The four-minaret symbol of Hyderabad standing in the heart of historic bazaars famed for glass bangles and pearls.', image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80', location: 'Old City', recommendedDuration: '2 Hours', curatorTip: 'Sip authentic Irani Chai with Osmania biscuits at Nimrah Cafe right beside the monument.' },
      { id: 'hyd-2', number: '02', name: 'Golconda Fort & Sound-Light Show', category: 'Medieval Acoustic Citadel', description: 'A medieval fortress of the Qutb Shahi kings, famed for acoustic echoes where a handclap at the entrance can be heard 1km away at the summit.', image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=1000&q=80', location: 'Ibrahim Bagh', recommendedDuration: '3 Hours', curatorTip: 'Hike to the highest pavilion (Bala Hissar) for an epic skyline vista across Hyderabad.' },
      { id: 'hyd-3', number: '03', name: 'Chowmahalla Palace', category: 'Palace of the Asaf Jahi Nizams', description: 'Opulent ceremonial palace with crystal chandeliers, grand marble courtyards, and vintage Rolls Royce car collections.', image: 'https://images.unsplash.com/photo-1616489953149-8e2b86129841?auto=format&fit=crop&w=1000&q=80', location: 'Khilwat', recommendedDuration: '2 Hours', curatorTip: 'Don’t miss the vintage clock tower that has been ticking continuously for over 250 years.' }
    ]
  },
  bengaluru: {
    tagline: 'Silicon Valley of India, Garden City, and Craft Brewery Capital',
    bestTime: 'Throughout the Year (Pleasant Elevation)',
    currency: 'INR (₹)',
    language: 'Kannada & English',
    timezone: 'UTC+5:30 (IST)',
    styles: ['Relaxed', 'Food', 'Culture'],
    places: [
      { id: 'blr-1', number: '01', name: 'Lalbagh Botanical Garden & Glass House', category: '240-Acre Royal Botanical Haven', description: 'Commissioned by Hyder Ali in 1760, featuring century-old trees and a Victorian glass house inspired by London’s Crystal Palace.', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80', location: 'Mavalli', recommendedDuration: '2 Hours', curatorTip: 'Visit early morning for serene birdwatching and filter coffee at Mavalli Tiffin Room (MTR).' },
      { id: 'blr-2', number: '02', name: 'Bangalore Palace', category: 'Tudor-Style Royal Residence', description: 'Inspired by England’s Windsor Castle, featuring fortified towers, battlements, woodcarvings, and Tudor interiors.', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80', location: 'Vasanth Nagar', recommendedDuration: '2 Hours', curatorTip: 'Take the audio tour detailing the Wodeyar dynasty history and private hunting trophies.' },
      { id: 'blr-3', number: '03', name: 'Cubbon Park & Vidhana Soudha', category: 'Neo-Dravidian Legislative Palace', description: '300 acres of green canopy bordering the monumental granite neo-Dravidian legislature building Vidhana Soudha.', image: 'https://images.unsplash.com/photo-1616489953149-8e2b86129841?auto=format&fit=crop&w=1000&q=80', location: 'Central Bengaluru', recommendedDuration: '2 Hours', curatorTip: 'Vidhana Soudha is stunningly illuminated on Sunday evenings and public holidays.' }
    ]
  },
  chennai: {
    tagline: 'Cultural Gateway of South India, Carnatic Arts, and Marina Sands',
    bestTime: 'November - February',
    currency: 'INR (₹)',
    language: 'Tamil & English',
    timezone: 'UTC+5:30 (IST)',
    styles: ['Culture', 'Beaches', 'Food'],
    places: [
      { id: 'maa-1', number: '01', name: 'Kapaleeshwarar Temple & Mylapore', category: '7th Century Dravidian Gopuram', description: 'Ancient temple of Lord Shiva with an intricately sculpted 37-meter rainbow gopuram towering over lively temple ponds.', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80', location: 'Mylapore', recommendedDuration: '2 Hours', curatorTip: 'Walk the surrounding mada streets for bronze deity statues, jasmine garlands, and piping hot filter coffee.' },
      { id: 'maa-2', number: '02', name: 'Marina Beach Promenade', category: 'Second Longest Natural Urban Beach', description: 'A 13-kilometer golden sand shoreline stretching along the Bay of Bengal, alive with kite flyers, seafood stalls, and sea breeze.', image: 'https://images.unsplash.com/photo-1600256698659-1df34327350c?auto=format&fit=crop&w=1000&q=80', location: 'Marina Promenade', recommendedDuration: 'Evening', curatorTip: 'Try freshly fried fish (meen varuval) from local beach-shack cooks.' },
      { id: 'maa-3', number: '03', name: 'San Thome Basilica', category: 'Neo-Gothic Cathedral over Apostle Tomb', description: 'A gleaming white 16th-century Portuguese cathedral built over the tomb of St. Thomas the Apostle.', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80', location: 'Santhome', recommendedDuration: '1 Hour', curatorTip: 'Visit the underground crypt museum containing relics from the Roman era.' }
    ]
  },
  jaipur: {
    tagline: 'The Pink City of Maharajas, Amber Fortresses, and Royal Palaces',
    bestTime: 'October - March',
    currency: 'INR (₹)',
    language: 'Hindi & Rajasthani',
    timezone: 'UTC+5:30 (IST)',
    styles: ['Culture', 'Luxury', 'Historical'],
    places: [
      { id: 'jai-1', number: '01', name: 'Hawa Mahal — Palace of the Winds', category: '953 Honeycomb Lattice Windows', description: 'A five-story pink sandstone facade engineered so royal ladies could observe street festivals unseen from behind delicate jharokhas.', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80', location: 'Badi Choupad', recommendedDuration: '1 - 2 Hours', curatorTip: 'Head to the Wind View Cafe across the street on the second floor for direct photography framing.' },
      { id: 'jai-2', number: '02', name: 'Amber Palace & Maota Lake', category: 'Hilltop Rajput Fortress', description: 'A colossal 16th-century fortress on the Aravalli hills featuring the breathtaking Sheesh Mahal mirror palace.', image: 'https://images.unsplash.com/photo-1600100397608-f010f443b781?auto=format&fit=crop&w=1000&q=80', location: 'Amer', recommendedDuration: '3 Hours', curatorTip: 'Light candles in the Sheesh Mahal to watch thousands of convex mirrors reflect starry constellations.' },
      { id: 'jai-3', number: '03', name: 'City Palace & Jantar Mantar', category: 'Royal Residence & Astronomical Observatory', description: 'The sprawling residence of the Maharaja of Jaipur alongside the world’s largest stone sundial at Jantar Mantar.', image: 'https://images.unsplash.com/photo-1603228254119-e6a5d095be56?auto=format&fit=crop&w=1000&q=80', location: 'Old City', recommendedDuration: '2 - 3 Hours', curatorTip: 'Book the private Chandra Mahal tour to see the Peacock Courtyard and royal living chambers.' }
    ]
  },
  agra: {
    tagline: 'Immortal Epitome of Love, Mughal Forts, and Marble Inlay',
    bestTime: 'October - March',
    currency: 'INR (₹)',
    language: 'Hindi & English',
    timezone: 'UTC+5:30 (IST)',
    styles: ['Culture', 'Historical'],
    places: [
      { id: 'agr-1', number: '01', name: 'The Taj Mahal & Yamuna River', category: 'Seven Wonders of the World', description: 'Emperor Shah Jahan’s pure white Makrana marble mausoleum for his beloved Mumtaz Mahal, adorned with pietre dure semi-precious inlay.', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80', location: 'Dharmapuri', recommendedDuration: '3 Hours', curatorTip: 'Enter through the East Gate at 5:45 AM at sunrise before tour buses arrive for tranquil reflection pool views.' },
      { id: 'agr-2', number: '02', name: 'Agra Fort', category: 'Massive Red Sandstone Imperial Citadel', description: 'The grand seat of the Mughal Empire spanning 94 acres with the Khas Mahal and Musamman Burj tower where Shah Jahan gazed at the Taj Mahal.', image: 'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=1000&q=80', location: 'Rakabganj', recommendedDuration: '2 Hours', curatorTip: 'Stand on the octagonal balcony of Musamman Burj for a direct framed view of the Taj Mahal across the Yamuna.' },
      { id: 'agr-3', number: '03', name: 'Mehtab Bagh — Moonlight Garden', category: 'Charbagh Sunset Vista', description: 'Mughal riverfront gardens aligned precisely with the Taj Mahal on the opposite bank of the Yamuna River.', image: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1000&q=80', location: 'Nagla Devjit', recommendedDuration: '1 - 2 Hours', curatorTip: 'The finest sunset photo point where the Taj Mahal turns golden without any crowds inside your frame.' }
    ]
  },
  goa: {
    tagline: 'Sun-Drenched Arabian Coastline, Portuguese Churches, and Susegad',
    bestTime: 'November - February',
    currency: 'INR (₹)',
    language: 'Konkani, English & Hindi',
    timezone: 'UTC+5:30 (IST)',
    styles: ['Beaches', 'Relaxed', 'Food'],
    places: [
      { id: 'goa-1', number: '01', name: 'Basilica of Bom Jesus & Old Goa', category: '1605 UNESCO Baroque Basilica', description: 'A revered church enshrining the sacred mortal remains of St. Francis Xavier with silver caskets and carved basalt pillars.', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80', location: 'Old Goa', recommendedDuration: '2 Hours', curatorTip: 'Combine with Se Cathedral across the plaza, home to the Great Golden Bell.' },
      { id: 'goa-2', number: '02', name: 'Palolem Beach & Butterfly Beach', category: 'Crescent Turquoise Lagoon', description: 'A tranquil crescent beach in South Goa fringed with coconut palms, colorful beach shacks, and dolphin-spotting boats.', image: 'https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=1000&q=80', location: 'Canacona, South Goa', recommendedDuration: 'Half Day', curatorTip: 'Rent a kayak to paddle to hidden Butterfly Beach for snorkeling and secluded sands.' },
      { id: 'goa-3', number: '03', name: 'Fontainhas — Latin Quarter', category: 'Pastel Portuguese Colonial Heritage', description: 'Vibrant narrow streets lined with 18th-century yellow, blue, and terracotta villas with red-tiled roofs and wrought-iron balconies in Panaji.', image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1000&q=80', location: 'Panaji', recommendedDuration: '2 Hours', curatorTip: 'Visit an authentic Goan bakery like Confeitaria 31 De Janeiro for fresh Bebinca layered pudding.' }
    ]
  },
  kashmir: {
    tagline: 'Paradise on Earth, Dal Lake Shikaras, and Snow-Capped Pir Panjal',
    bestTime: 'April - October (Gardens) & Dec - Feb (Snow)',
    currency: 'INR (₹)',
    language: 'Kashmiri, Urdu & Hindi',
    timezone: 'UTC+5:30 (IST)',
    styles: ['Adventure', 'Relaxed', 'Mountains'],
    places: [
      { id: 'kas-1', number: '01', name: 'Dal Lake & Houseboats', category: 'Jewel of Srinagar', description: 'Mirror-like alpine lake adorned with cedar-carved houseboats and wooden shikaras gliding past floating lotus gardens.', image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80', location: 'Srinagar', recommendedDuration: 'Overnight', curatorTip: 'Wake up at 5:00 AM for the floating vegetable market where traders barter from wooden boats amidst morning mist.' },
      { id: 'kas-2', number: '02', name: 'Gulmarg Gondola & Apharwat Peak', category: 'Asia’s Highest Cable Car', description: 'A world-class ski resort where a two-stage gondola lifts passengers to 4,200 meters into alpine snowfields.', image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1000&q=80', location: 'Baramulla', recommendedDuration: 'Full Day', curatorTip: 'Book Stage 2 gondola tickets online weeks in advance to reach the high-altitude Apharwat summit.' },
      { id: 'kas-3', number: '03', name: 'Pahalgam & Betaab Valley', category: 'Valley of Shepherds & Lidder River', description: 'Pristine mountain meadows flanked by pine forests and snow peaks where the Lidder river rushes through green vales.', image: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1000&q=80', location: 'Anantnag', recommendedDuration: 'Full Day', curatorTip: 'Take a pony trek up to Baisaran meadow, locally nicknamed Mini Switzerland.' }
    ]
  },
  rajasthan: {
    tagline: 'Land of Kings, Golden Thar Dunes, and Imposing Desert Forts',
    bestTime: 'October - March',
    currency: 'INR (₹)',
    language: 'Hindi & Rajasthani',
    timezone: 'UTC+5:30 (IST)',
    styles: ['Culture', 'Historical', 'Adventure'],
    places: [
      { id: 'raj-1', number: '01', name: 'Jaisalmer Golden Fort & Thar Desert', category: 'Living Sandstone Citadel', description: 'A massive 12th-century living fortress rising like a golden mirage from the Thar Desert with thousands of residents living inside.', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80', location: 'Jaisalmer', recommendedDuration: '2 Days', curatorTip: 'Camp under the stars in Sam Sand Dunes with traditional folk musicians and campfire tea.' },
      { id: 'raj-2', number: '02', name: 'Udaipur City Palace & Lake Pichola', category: 'Venice of the East', description: 'A majestic white marble palace floating above Lake Pichola with mirrored rooms, cupolas, and panoramic Aravalli hill views.', image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1000&q=80', location: 'Udaipur', recommendedDuration: '2 Days', curatorTip: 'Take a boat ride to Jagmandir Island Palace at sunset for reflection views of the City Palace.' },
      { id: 'raj-3', number: '03', name: 'Mehrangarh Fort & Jodhpur Blue City', category: 'Impregnable Cliff Citadel', description: 'One of India’s largest forts perched 120 meters above the indigo-painted houses of the Old Blue City.', image: 'https://images.unsplash.com/photo-1568283096533-078a24930eb8?auto=format&fit=crop&w=1000&q=80', location: 'Jodhpur', recommendedDuration: '1 Day', curatorTip: 'Zip-line across the fort battlements and desert moats with Flying Fox Jodhpur.' }
    ]
  },
  kyoto: {
    tagline: 'Ancient Imperial Heart of Japan, Zen Rock Gardens, and Bamboo Groves',
    bestTime: 'March - May & October - November',
    currency: 'JPY (¥)',
    language: 'Japanese',
    timezone: 'UTC+9 (JST)',
    styles: ['Culture', 'Relaxed', 'Historical'],
    places: [
      { id: 'kyo-1', number: '01', name: 'Fushimi Inari-Taisha & 10,000 Torii', category: 'Sacred Shinto Mountain Shrine', description: 'Thousands of vivid vermilion torii gates winding through the sacred forest of Mount Inari, dedicated to the Shinto god of rice and foxes.', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80', location: 'Fushimi Ward', recommendedDuration: '2 - 3 Hours', curatorTip: 'Hike to the Yotsutsuji intersection for sunset views across Kyoto city.' },
      { id: 'kyo-2', number: '02', name: 'Kinkaku-ji — The Golden Pavilion', category: 'Zen Temple Coated in Gold Leaf', description: 'A three-story Zen temple whose top two floors are completely covered in pure gold leaf, mirrored upon Kyōko-chi pond.', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1000&q=80', location: 'Kita Ward', recommendedDuration: '1 - 2 Hours', curatorTip: 'Morning sunlight illuminates the gold leaf facade brilliantly against dark pine trees.' },
      { id: 'kyo-3', number: '03', name: 'Arashiyama Bamboo Grove & Tenryu-ji', category: 'Towering Green Bamboo Sanctuary', description: 'A meditative pathway through soaring emerald bamboo stalks swaying in the breeze, adjacent to UNESCO Zen temple Tenryu-ji.', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80', location: 'Ukyo Ward', recommendedDuration: '2 - 3 Hours', curatorTip: 'Arrive at 7:00 AM before crowds to listen to the iconic rustling sound of the bamboo stalks.' }
    ]
  },
  nice: {
    tagline: 'Queen of the French Riviera, Baie des Anges, and Azure Coastline',
    bestTime: 'May - October',
    currency: 'EUR (€)',
    language: 'French',
    timezone: 'UTC+1 (CET)',
    styles: ['Beaches', 'Luxury', 'Relaxed'],
    places: [
      { id: 'nce-1', number: '01', name: 'Promenade des Anglais & Castle Hill', category: 'Iconic 7km Mediterranean Seafront', description: 'The famous palm-lined seaside boulevard curving along the turquoise Baie des Anges, leading up to the panoramic waterfall park on Colline du Château.', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80', location: 'Nice Waterfront', recommendedDuration: '2 - 3 Hours', curatorTip: 'Climb Castle Hill for the postcard panorama of the curved bay and azure waters.' },
      { id: 'nce-2', number: '02', name: 'Vieux Nice & Cours Saleya Flower Market', category: 'Old Town Pastel Alleyways', description: 'A charming maze of pastel Italianate buildings, vibrant flower and produce markets, and artisan gelato shops.', image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1000&q=80', location: 'Old Nice', recommendedDuration: 'Half Day', curatorTip: 'Taste hot, crispy Socca (chickpea crepe) straight from wood-fired ovens at Chez René Socca.' }
    ]
  },
  'los-angeles': {
    tagline: 'Entertainment Capital, Pacific Sunsets, and Golden Coastline',
    bestTime: 'March - May & September - November',
    currency: 'USD ($)',
    language: 'English & Spanish',
    timezone: 'UTC-8 (PST)',
    styles: ['Adventure', 'Beaches', 'Food'],
    places: [
      { id: 'la-1', number: '01', name: 'Griffith Observatory & Hollywood Sign', category: 'Art Deco Hilltop Observatory', description: 'Perched on Mount Hollywood offering sweeping panoramas across the Los Angeles basin, Pacific Ocean, and the iconic Hollywood Sign.', image: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&w=1000&q=80', location: 'Los Feliz', recommendedDuration: '3 Hours', curatorTip: 'Arrive 1 hour before sunset to see the city transition from golden smog glow into a sea of twinkling grid lights.' },
      { id: 'la-2', number: '02', name: 'Santa Monica Pier & Venice Boardwalk', category: 'Classic Pacific Amusement Boardwalk', description: 'Historic pier marking the end of Route 66 with a solar-powered Ferris wheel, extending to the bohemian skate culture of Venice Beach.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80', location: 'Santa Monica', recommendedDuration: 'Half Day', curatorTip: 'Rent a beach cruiser bicycle to ride the Marvin Braude coastal bike path.' }
    ]
  }
};

/**
 * Searches curated database first. If not found, resolves dynamically via Nominatim & Unsplash.
 */
export async function resolveDestination(query: string): Promise<Destination | null> {
  const q = query.trim().toLowerCase();
  if (!q) return null;

  // 1. Direct match in curated destinations
  const direct = DESTINATIONS.find(
    (d) =>
      d.id.toLowerCase() === q ||
      d.name.toLowerCase() === q ||
      d.name.toLowerCase().includes(q) ||
      d.country.toLowerCase() === q
  );
  if (direct) return direct;

  // 2. Check local storage dynamic cache
  const cacheKey = `${CACHE_KEY_PREFIX}${q.replace(/[^a-z0-9]/g, '_')}`;
  try {
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      return JSON.parse(cached) as Destination;
    }
  } catch {
    // Ignore cache error
  }

  // 3. Dynamic Resolution via OpenStreetMap Nominatim
  try {
    const geoRes = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1&addressdetails=1`,
      { headers: { 'Accept-Language': 'en' } }
    );

    if (geoRes.ok) {
      const geoData = await geoRes.json();
      if (geoData && geoData.length > 0) {
        const item = geoData[0];
        const lat = parseFloat(item.lat);
        const lon = parseFloat(item.lon);
        const addr = item.address || {};
        const cityName =
          addr.city ||
          addr.town ||
          addr.municipality ||
          addr.state_district ||
          addr.state ||
          item.name ||
          query;
        const country = addr.country || 'Global';
        const cleanId = cityName.toLowerCase().replace(/[^a-z0-9]/g, '-');

        // Check if we have known curated knowledge for this city
        const known = KNOWN_LANDMARKS[cleanId] || KNOWN_LANDMARKS[q];

        // Fetch dynamic image from Unsplash
        const heroImg = await searchDestinationImage(`${cityName} ${country} travel landmark`);

        const dynamicDest: Destination = {
          id: cleanId,
          name: cityName,
          country: country,
          region: (addr.continent || 'Global') as any,
          tagline: known?.tagline || `Experience the authentic pulse and cultural wonders of ${cityName}, ${country}.`,
          description: `${cityName} is a captivating destination located in ${country}. Renowned for its unique geography, rich historical tapestry, vibrant local culinary scene, and inviting neighborhood atmospheres, it offers travelers an immersive and authentic exploration.`,
          image: heroImg || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=85',
          gallery: [
            heroImg || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80'
          ],
          coordinates: { lat, lon },
          bestTime: known?.bestTime || 'October - April',
          rating: 4.85,
          reviewsCount: 1420,
          currency: known?.currency || 'Local Currency',
          language: known?.language || 'Local Language',
          timezone: known?.timezone || 'Local Time',
          travelStyles: known?.styles || ['Culture', 'Food', 'Adventure', 'Relaxed'],
          budgetTier: 'Moderate',
          famousPlaces: known?.places || [
            {
              id: `${cleanId}-1`,
              number: '01',
              name: `${cityName} Historic Center & Old Quarter`,
              category: 'Cultural Landmark',
              description: `The storied heart of ${cityName}, featuring historic architecture, open plazas, artisan workshops, and bustling local markets.`,
              image: heroImg || 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1000&q=80',
              location: `${cityName} City Center`,
              recommendedDuration: '2 - 3 Hours',
              curatorTip: 'Explore on foot in the morning when the streets are vibrant and morning markets are setting up.'
            },
            {
              id: `${cleanId}-2`,
              number: '02',
              name: `${cityName} Panoramic Viewpoint`,
              category: 'Scenic Observation Haven',
              description: `A celebrated vantage point offering 360-degree vistas across the rooftops, skyline, and surrounding natural geography of ${cityName}.`,
              image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1000&q=80',
              location: `${cityName} Highlands`,
              recommendedDuration: '2 Hours',
              curatorTip: 'Visit for golden hour and twilight when city lights illuminate the horizon.'
            }
          ],
          travelTips: [
            `Sample authentic regional dishes at local markets and family-run eateries.`,
            `Check public transit schedules or arrange a trusted local driver for day trips.`,
            `Carry local currency for smaller craft stalls and traditional cafes.`
          ]
        };

        // Cache in localStorage
        try {
          localStorage.setItem(cacheKey, JSON.stringify(dynamicDest));
        } catch {
          // Ignore storage overflow
        }

        return dynamicDest;
      }
    }
  } catch (err) {
    console.error('Dynamic destination resolution error:', err);
  }

  return null;
}
