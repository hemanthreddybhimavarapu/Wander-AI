import { Destination } from './types';
import { DESTINATIONS_PART1 } from './destinationsPart1';
import { DESTINATIONS_PART2 } from './destinationsPart2';
import { DESTINATIONS_PART3 } from './destinationsPart3';
import { DESTINATIONS_PART4 } from './destinationsPart4';

export const DESTINATIONS: Destination[] = [
  ...DESTINATIONS_PART1,
  ...DESTINATIONS_PART2,
  ...DESTINATIONS_PART3,
  ...DESTINATIONS_PART4,
];

export function getDestinationById(id: string): Destination | undefined {
  return DESTINATIONS.find((d) => d.id === id);
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
