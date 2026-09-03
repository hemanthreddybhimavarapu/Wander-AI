import { Destination } from './types';
import { DESTINATIONS_PART1 } from './destinationsPart1';
import { DESTINATIONS_PART2 } from './destinationsPart2';
import { DESTINATIONS_PART3 } from './destinationsPart3';
import { DESTINATIONS_PART4 } from './destinationsPart4';
import { DESTINATIONS_PART5 } from './destinationsPart5';

export const DESTINATIONS: Destination[] = [
  ...DESTINATIONS_PART1,
  ...DESTINATIONS_PART2,
  ...DESTINATIONS_PART3,
  ...DESTINATIONS_PART4,
  ...DESTINATIONS_PART5,
];

export function getDestinationById(id: string): Destination | undefined {
  const clean = id.toLowerCase().trim();
  return DESTINATIONS.find((d) => d.id.toLowerCase() === clean);
}

export function searchDestinations(query: string): Destination[] {
  const q = query.toLowerCase().trim();
  if (!q) return DESTINATIONS;

  // Handle "Country -> City" format (e.g. "India -> Delhi", "India Delhi", "France Paris")
  const parts = q.split(/->|>|\s+/).filter(Boolean);

  return DESTINATIONS.filter((d) => {
    const destName = d.name.toLowerCase();
    const destCountry = d.country.toLowerCase();
    const destRegion = d.region.toLowerCase();
    const destTagline = d.tagline.toLowerCase();

    // Check if query matches directly
    if (
      destName.includes(q) ||
      destCountry.includes(q) ||
      destRegion.includes(q) ||
      destTagline.includes(q)
    ) {
      return true;
    }

    // If query has multiple terms like "India Delhi", check if both match
    if (parts.length > 1) {
      const allMatch = parts.every(
        (part) =>
          destName.includes(part) ||
          destCountry.includes(part) ||
          destRegion.includes(part)
      );
      if (allMatch) return true;
    }

    return false;
  });
}

export function getFeaturedDestinations(): Destination[] {
  return DESTINATIONS.filter((d) => d.featured);
}

export function getTrendingDestinations(): Destination[] {
  return DESTINATIONS.filter((d) => d.trending);
}

export function getDestinationsByRegion(region: string): Destination[] {
  if (region === 'All') return DESTINATIONS;
  return DESTINATIONS.filter((d) => d.region === region);
}

export function getDestinationsByStyle(style: string): Destination[] {
  if (style === 'All') return DESTINATIONS;
  return DESTINATIONS.filter((d) => d.travelStyles.includes(style));
}
