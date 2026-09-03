import { Destination } from '../data/types';

export function calculateDistanceKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

export function findNearestDestination(
  lat: number,
  lon: number,
  destinations: Destination[]
): { destination: Destination; distanceKm: number } | null {
  if (!destinations || destinations.length === 0) return null;

  let nearest = destinations[0];
  let minDistance = calculateDistanceKm(
    lat,
    lon,
    nearest.coordinates.lat,
    nearest.coordinates.lon
  );

  for (let i = 1; i < destinations.length; i++) {
    const d = destinations[i];
    const dist = calculateDistanceKm(lat, lon, d.coordinates.lat, d.coordinates.lon);
    if (dist < minDistance) {
      minDistance = dist;
      nearest = d;
    }
  }

  return { destination: nearest, distanceKm: minDistance };
}
