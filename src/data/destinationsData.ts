import { Destination } from './types';
import { DESTINATIONS_PART1 } from './destinationsPart1';
import { DESTINATIONS_PART2 } from './destinationsPart2';
import { DESTINATIONS_PART3 } from './destinationsPart3';

export * from './types';

export const DESTINATIONS: Destination[] = [
  ...DESTINATIONS_PART1,
  ...DESTINATIONS_PART2,
  ...DESTINATIONS_PART3,
];

export const getDestinationById = (id: string): Destination | undefined => {
  return DESTINATIONS.find((d) => d.id.toLowerCase() === id.toLowerCase());
};

export const getFeaturedDestinations = (): Destination[] => {
  return DESTINATIONS.filter((d) => d.featured);
};

export const getTrendingDestinations = (): Destination[] => {
  return DESTINATIONS.filter((d) => d.trending || d.popular);
};
