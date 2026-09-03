import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Compass, Sparkles, Filter, X, MapPin, Globe } from 'lucide-react';
import { DESTINATIONS, searchDestinations } from '../data/destinationsData';
import { DestinationCard } from '../components/destinations/DestinationCard';
import { Button } from '../components/common/Button';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';

export const DestinationsPage: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedStyle, setSelectedStyle] = useState('All');

  const regions = ['All', 'Europe', 'Asia', 'Americas', 'Middle East', 'Oceania'];
  const styles = ['All', 'Culture', 'Luxury', 'Adventure', 'Food', 'Beaches', 'Relaxed', 'Historical'];

  // Extract unique countries
  const countries = useMemo(() => {
    const list = Array.from(new Set(DESTINATIONS.map((d) => d.country))).sort();
    return ['All', ...list];
  }, []);

  const filteredDestinations = useMemo(() => {
    let list = DESTINATIONS;

    // Search query parsing (supports "India -> Delhi", "India Delhi", "Delhi", etc.)
    if (search.trim()) {
      list = searchDestinations(search);
    }

    if (selectedRegion !== 'All') {
      list = list.filter((d) => d.region === selectedRegion);
    }

    if (selectedCountry !== 'All') {
      list = list.filter((d) => d.country === selectedCountry);
    }

    if (selectedStyle !== 'All') {
      list = list.filter((d) => d.travelStyles.includes(selectedStyle));
    }

    return list;
  }, [search, selectedRegion, selectedCountry, selectedStyle]);

  const handleLaunchDynamic = () => {
    if (!search.trim()) return;
    const clean = search.trim().toLowerCase().replace(/[^a-z0-9]/g, '-');
    navigate(`/destination/${clean}`);
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-accent/15 border border-theme-accent/30 text-theme-accent text-xs font-bold tracking-wider uppercase">
          <Globe className="w-3.5 h-3.5" />
          <span>Worldwide Planetary Directory</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-black text-theme-text-primary tracking-tight">
          Global Gateways & Horizons
        </h1>
        <p className="text-sm sm:text-base text-theme-text-secondary leading-relaxed">
          Search any city, country, or landmark worldwide. Try "India → Delhi", "France Paris", "Japan Kyoto", or type any global destination.
        </p>
      </div>

      {/* Global Search Bar */}
      <div className="max-w-2xl mx-auto">
        <div className="relative flex items-center shadow-glass rounded-2xl bg-theme-surface/90 border border-theme-border p-2 focus-within:border-theme-accent transition-colors">
          <Search className="w-5 h-5 text-theme-accent ml-3 pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleLaunchDynamic();
            }}
            placeholder="Search country or city (e.g. India Delhi, France Nice, Tokyo, Rome)..."
            className="w-full px-3 py-2 bg-transparent text-sm text-theme-text-primary placeholder:text-theme-text-muted focus:outline-none"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="p-1.5 text-theme-text-muted hover:text-theme-text-primary cursor-pointer mr-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <Button
            variant="primary"
            size="sm"
            onClick={handleLaunchDynamic}
            icon={<Sparkles className="w-3.5 h-3.5" />}
          >
            Explore
          </Button>
        </div>
      </div>

      {/* Filter Tabs & Chips */}
      <div className="space-y-4">
        {/* Regions */}
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {regions.map((reg) => (
            <button
              key={reg}
              onClick={() => setSelectedRegion(reg)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedRegion === reg
                  ? 'bg-theme-accent text-white shadow-glow-sm'
                  : 'bg-theme-surface/80 hover:bg-theme-surface text-theme-text-secondary border border-theme-border'
              }`}
            >
              {reg}
            </button>
          ))}
        </div>

        {/* Countries Dropdown / Scroll Strip */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none max-w-3xl mx-auto">
          <span className="text-xs text-theme-text-muted font-semibold shrink-0">
            Countries:
          </span>
          {countries.slice(0, 10).map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCountry(c)}
              className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all shrink-0 cursor-pointer ${
                selectedCountry === c
                  ? 'bg-theme-accent-secondary text-white shadow-glow-sm'
                  : 'bg-theme-surface hover:bg-theme-surface-hover text-theme-text-secondary border border-theme-border/60'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count & Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between text-xs text-theme-text-muted border-b border-theme-border/40 pb-3">
          <span>Showing <strong>{filteredDestinations.length}</strong> planetary sanctuaries</span>
          {(search || selectedRegion !== 'All' || selectedCountry !== 'All' || selectedStyle !== 'All') && (
            <button
              onClick={() => {
                setSearch('');
                setSelectedRegion('All');
                setSelectedCountry('All');
                setSelectedStyle('All');
              }}
              className="text-theme-accent hover:underline cursor-pointer font-semibold"
            >
              {t('destinations.clearFilters')}
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>

        {/* If no results, offer to dynamically synthesize ANY city */}
        {filteredDestinations.length === 0 && (
          <div className="p-8 sm:p-12 rounded-3xl bg-theme-surface/80 border border-theme-border text-center max-w-xl mx-auto space-y-4">
            <Sparkles className="w-10 h-10 text-theme-accent mx-auto animate-pulse" />
            <h3 className="font-display text-xl font-bold text-theme-text-primary">
              Synthesize "{search}" Worldwide?
            </h3>
            <p className="text-xs text-theme-text-secondary leading-relaxed">
              WanderAI’s autonomous engine can dynamically retrieve geographic telemetry, Unsplash photos, live atmospheric data, and AI travel itineraries for any city on Earth.
            </p>
            <Button
              variant="primary"
              onClick={handleLaunchDynamic}
              icon={<Compass className="w-4 h-4" />}
            >
              Explore "{search}" with AI
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
