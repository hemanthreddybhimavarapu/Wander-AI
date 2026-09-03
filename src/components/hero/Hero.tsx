import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, MapPin, Sparkles, Navigation, CloudSun, Users } from 'lucide-react';
import { DESTINATIONS } from '../../data/destinationsData';
import { useGeolocation } from '../../hooks/useGeolocation';
import { findNearestDestination } from '../../services/locationService';
import { useLanguage } from '../../context/LanguageContext';

export const Hero: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const { location, loading: geoLoading, error: geoError, requestLocation } = useGeolocation();

  const suggestions = query.trim()
    ? DESTINATIONS.filter(
        (d) =>
          d.name.toLowerCase().includes(query.toLowerCase()) ||
          d.country.toLowerCase().includes(query.toLowerCase()) ||
          d.region.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;

    const matched = DESTINATIONS.find(
      (d) => d.name.toLowerCase() === query.trim().toLowerCase()
    );
    if (matched) {
      navigate(`/destination/${matched.id}`);
    } else {
      navigate(`/destinations?search=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleDetectLocation = () => {
    requestLocation();
  };

  const nearestDest =
    location && location.latitude && location.longitude
      ? findNearestDestination(location.latitude, location.longitude, DESTINATIONS)
      : null;

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 filter brightness-[0.38]"
          poster="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-41553-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-theme-bg via-theme-bg/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-theme-bg/80 via-transparent to-theme-bg/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-theme-surface/75 backdrop-blur-xl border border-theme-border text-xs font-semibold text-theme-text-primary shadow-glow"
        >
          <Sparkles className="w-3.5 h-3.5 text-theme-accent" />
          <span>Next-Generation AI Autonomous Travel Assistant</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.08]">
            Go Somewhere Worth{' '}
            <span className="text-gradient italic font-black">
              Remembering.
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-200 font-normal leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto relative"
        >
          <form
            onSubmit={handleSearch}
            className="relative flex items-center p-2 rounded-3xl bg-theme-surface/85 backdrop-blur-2xl border border-theme-border shadow-glass transition-all focus-within:border-theme-accent focus-within:shadow-glow"
          >
            <div className="pl-4 text-theme-accent">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              placeholder={t('hero.searchPlaceholder')}
              className="w-full px-4 py-3 bg-transparent text-sm sm:text-base text-theme-text-primary placeholder:text-theme-text-muted focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-theme-accent to-theme-accent-secondary text-white font-semibold text-xs sm:text-sm shadow-glow hover:opacity-95 transition-opacity shrink-0 cursor-pointer"
            >
              {t('hero.cta')}
            </button>
          </form>

          {isFocused && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 p-2 rounded-2xl bg-theme-surface/95 backdrop-blur-2xl border border-theme-border shadow-glass z-30 text-left space-y-1">
              {suggestions.map((dest) => (
                <button
                  key={dest.id}
                  type="button"
                  onMouseDown={() => {
                    navigate(`/destination/${dest.id}`);
                    setIsFocused(false);
                  }}
                  className="w-full p-2.5 rounded-xl hover:bg-theme-surface-hover flex items-center justify-between transition-colors text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-9 h-9 rounded-lg object-cover"
                    />
                    <div>
                      <div className="font-bold text-xs sm:text-sm text-theme-text-primary">
                        {dest.name}
                      </div>
                      <div className="text-[11px] text-theme-text-muted">
                        {dest.country} • {dest.region}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-theme-accent font-medium">Explore →</span>
                </button>
              ))}
            </div>
          )}

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-300">
            <button
              type="button"
              onClick={handleDetectLocation}
              disabled={geoLoading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 text-white transition-colors cursor-pointer"
            >
              <Navigation className={`w-3.5 h-3.5 ${geoLoading ? 'animate-spin' : ''}`} />
              <span>
                {geoLoading
                  ? 'Triangulating GPS...'
                  : nearestDest
                  ? `Closest Horizon: ${nearestDest.destination.name} (${Math.round(nearestDest.distanceKm)} km)`
                  : 'Locate Nearest Gateway'}
              </span>
            </button>

            {nearestDest && (
              <button
                onClick={() => navigate(`/destination/${nearestDest.destination.id}`)}
                className="text-theme-accent-secondary underline font-semibold cursor-pointer"
              >
                View Details →
              </button>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10">
            <CloudSun className="w-4 h-4 text-theme-accent" />
            <span>Real-Time Weather Telemetry</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10">
            <Sparkles className="w-4 h-4 text-theme-accent-secondary" />
            <span>Gemini 1.5 Bespoke Planner</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10">
            <Users className="w-4 h-4 text-emerald-400" />
            <span>12 Planetary Gateways</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
