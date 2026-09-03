import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, MapPin, Sparkles, Navigation, CloudSun, Users, Globe } from 'lucide-react';
import { DESTINATIONS, searchDestinations } from '../../data/destinationsData';
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
    ? searchDestinations(query.trim()).slice(0, 6)
    : [];

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;

    const matched = DESTINATIONS.find(
      (d) =>
        d.name.toLowerCase() === query.trim().toLowerCase() ||
        d.id.toLowerCase() === query.trim().toLowerCase()
    );
    if (matched) {
      navigate(`/destination/${matched.id}`);
    } else {
      const clean = query.trim().toLowerCase().replace(/[^a-z0-9]/g, '-');
      navigate(`/destination/${clean}`);
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
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Video Background with Gradient Vignette */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1920&q=80"
          className="w-full h-full object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-41541-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-theme-bg/80 via-theme-bg/60 to-theme-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-theme-bg/40 to-theme-bg" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-theme-surface/80 border border-theme-border shadow-glass backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-theme-accent animate-pulse" />
          <span className="text-xs font-semibold text-theme-text-primary tracking-wide">
            {t('hero.badge')}
          </span>
        </motion.div>

        {/* Master Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-theme-text-primary tracking-tight leading-[1.1]">
            <span>{t('hero.headlinePrefix')} </span>
            <span className="bg-gradient-to-r from-theme-accent via-theme-accent-secondary to-theme-accent bg-clip-text text-transparent animate-shimmer">
              {t('hero.headlineSuffix')}
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-theme-text-secondary leading-relaxed font-normal">
            {t('hero.subtitle')}
          </p>
        </motion.div>

        {/* Search Bar & Autocomplete */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto relative"
        >
          <form
            onSubmit={handleSearch}
            className={`relative flex items-center p-2 rounded-2xl bg-theme-surface/90 backdrop-blur-2xl border transition-all shadow-glass ${
              isFocused
                ? 'border-theme-accent shadow-glow ring-2 ring-theme-accent/20'
                : 'border-theme-border hover:border-theme-border-hover'
            }`}
          >
            <Search className="w-5 h-5 text-theme-accent ml-3 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              placeholder="Search any country or city worldwide (e.g. Delhi, Paris, Tokyo, Kyoto)..."
              className="w-full px-3 py-2 bg-transparent text-sm sm:text-base text-theme-text-primary placeholder:text-theme-text-muted focus:outline-none"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-theme-accent to-theme-accent-secondary text-white font-bold text-xs sm:text-sm transition-transform hover:scale-105 active:scale-95 shadow-glow cursor-pointer shrink-0"
            >
              {t('hero.cta')}
            </button>
          </form>

          {/* Autocomplete Dropdown */}
          {isFocused && query.trim().length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 p-2 rounded-2xl bg-theme-surface/95 backdrop-blur-2xl border border-theme-border shadow-2xl z-30 text-left space-y-1">
              {suggestions.map((dest) => (
                <button
                  key={dest.id}
                  type="button"
                  onMouseDown={() => navigate(`/destination/${dest.id}`)}
                  className="w-full p-2.5 rounded-xl hover:bg-theme-surface-hover flex items-center justify-between text-theme-text-primary transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-theme-accent group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-bold text-xs sm:text-sm">
                        {dest.name}
                      </div>
                      <div className="text-[11px] text-theme-text-muted">
                        {dest.country} • {dest.region}
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-theme-accent">
                    Explore →
                  </span>
                </button>
              ))}

              {/* Dynamic Search Tile */}
              <button
                type="button"
                onMouseDown={handleSearch}
                className="w-full p-2.5 rounded-xl bg-theme-accent/15 hover:bg-theme-accent/25 border border-theme-accent/30 flex items-center gap-3 text-theme-text-primary transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-theme-accent" />
                <div className="text-left">
                  <div className="font-bold text-xs text-theme-accent">
                    Explore "{query}" Worldwide
                  </div>
                  <div className="text-[10px] text-theme-text-muted">
                    Synthesize live geodata, photos, weather, and AI itineraries
                  </div>
                </div>
              </button>
            </div>
          )}
        </motion.div>

        {/* GPS Geolocation Detector */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <button
            onClick={handleDetectLocation}
            disabled={geoLoading}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-theme-surface/70 hover:bg-theme-surface border border-theme-border text-xs font-semibold text-theme-text-primary transition-all cursor-pointer shadow-glass group"
          >
            <Navigation className={`w-3.5 h-3.5 text-theme-accent ${geoLoading ? 'animate-spin' : 'group-hover:rotate-45'} transition-transform`} />
            <span>{geoLoading ? 'Locating...' : t('hero.gpsButton')}</span>
          </button>

          {nearestDest && (
            <button
              onClick={() => navigate(`/destination/${nearestDest.destination.id}`)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-medium cursor-pointer hover:bg-emerald-500/25 transition-colors"
            >
              <span>{t('hero.closestHorizon')}:</span>
              <strong className="underline">{nearestDest.destination.name}</strong>
              <span className="text-[10px] opacity-80">({nearestDest.distanceKm} km)</span>
            </button>
          )}

          {geoError && (
            <span className="text-xs text-rose-400 font-medium">{geoError}</span>
          )}
        </motion.div>

        {/* Quick Highlights Telemetry Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-theme-text-secondary"
        >
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-theme-surface/40 border border-theme-border/60">
            <Globe className="w-3.5 h-3.5 text-theme-accent" />
            <span>Worldwide Destination Database</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-theme-surface/40 border border-theme-border/60">
            <CloudSun className="w-3.5 h-3.5 text-theme-accent-secondary" />
            <span>Live Meteorological Telemetry</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-theme-surface/40 border border-theme-border/60">
            <Users className="w-3.5 h-3.5 text-emerald-400" />
            <span>Google Gemini Autonomous Synthesis</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
