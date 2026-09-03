export interface StyleOption {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const TRAVEL_STYLES: StyleOption[] = [
  { id: 'Adventure', name: 'Adventure & Thrill', description: 'Trekking, diving, alpine sports, and high-octane explorations', icon: 'Compass' },
  { id: 'Relaxed', name: 'Relaxed & Rejuvenation', description: 'Serene coastal villas, spa retreats, and tranquil waters', icon: 'SunMedium' },
  { id: 'Culture', name: 'Art & Heritage', description: 'Ancient architecture, grand museums, and local traditions', icon: 'Landmark' },
  { id: 'Food', name: 'Gastronomy & Wine', description: 'Michelin counters, street markets, and vineyard tastings', icon: 'Utensils' },
  { id: 'Luxury', name: 'Ultra Luxury', description: 'Five-star palaces, private charters, and bespoke VIP access', icon: 'Crown' },
  { id: 'Family', name: 'Family Harmony', description: 'Inspiring spaces, nature walks, and multi-generational delight', icon: 'Users' },
  { id: 'Solo', name: 'Solo Seeker', description: 'Introspective discovery, photography walks, and cafe immersion', icon: 'User' },
  { id: 'Romantic', name: 'Romantic Escape', description: 'Sunset horizons, intimate dinners, and secluded havens', icon: 'Heart' },
];

export const BUDGET_OPTIONS = [
  { id: 'Budget', label: 'Conscious Nomad', range: ' -  / day', desc: 'Boutique hostels, transit passes & street delicacies' },
  { id: 'Moderate', label: 'Comfort Traveler', range: ' -  / day', desc: 'Curated boutique hotels, taxis & signature bistros' },
  { id: 'Premium', label: 'First Class', range: ' -  / day', desc: '5-star suites, private drivers & guided museum tours' },
  { id: 'Luxury', label: 'Elite Sovereign', range: ',200+ / day', desc: 'Private chauffeurs, Michelin reservations & villa estates' },
];

export const INTEREST_OPTIONS = [
  'Nature & Wildlife',
  'Ancient History',
  'Street Food & Fine Dining',
  'Architecture & Design',
  'Photography & Golden Hour',
  'Beaches & Islands',
  'Nightlife & Speakeasies',
  'Museums & Contemporary Art',
  'Shopping & Local Crafts',
  'Wellness & Thermal Baths'
];
