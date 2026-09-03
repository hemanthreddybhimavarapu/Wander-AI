export interface FamousPlace {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  image: string;
  location: string;
  recommendedDuration: string;
  curatorTip: string;
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  region: 'Europe' | 'Asia' | 'Americas' | 'Middle East' | 'Oceania';
  tagline: string;
  description: string;
  image: string;
  gallery: string[];
  coordinates: {
    lat: number;
    lon: number;
  };
  bestTime: string;
  rating: number;
  reviewsCount: number;
  currency: string;
  language: string;
  timezone: string;
  travelStyles: string[];
  budgetTier?: 'Budget' | 'Moderate' | 'Premium' | 'Luxury' | string;
  averageBudget?: 'Budget' | 'Moderate' | 'Premium' | 'Luxury' | string;
  famousPlaces: FamousPlace[];
  travelTips: string[];
  featured?: boolean;
  trending?: boolean;
  popular?: boolean;
}
