import { useState } from 'react';

export interface LocationState {
  loading: boolean;
  city: string | null;
  latitude: number | null;
  longitude: number | null;
  error: string | null;
}

export function useGeolocation() {
  const [state, setState] = useState<LocationState>({
    loading: false,
    city: null,
    latitude: null,
    longitude: null,
    error: null,
  });

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: 'Geolocation is not supported by your browser.',
      }));
      return;
    }

    setState((prev) => ({ ...prev, loading: true, error: null }));

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10`,
            { headers: { 'Accept-Language': 'en' } }
          );
          if (res.ok) {
            const data = await res.json();
            const city =
              data.address?.city ||
              data.address?.town ||
              data.address?.state_district ||
              data.address?.state ||
              'Your Location';
            setState({
              loading: false,
              city,
              latitude,
              longitude,
              error: null,
            });
            return;
          }
        } catch {
          // Fallback if reverse geocode is blocked
        }

        setState({
          loading: false,
          city: 'Your Location',
          latitude,
          longitude,
          error: null,
        });
      },
      (err) => {
        setState({
          loading: false,
          city: null,
          latitude: null,
          longitude: null,
          error: err.message || 'Location permission denied.',
        });
      },
      { timeout: 10000, enableHighAccuracy: false }
    );
  };

  return {
    location: state,
    loading: state.loading,
    error: state.error,
    requestLocation,
  };
}
