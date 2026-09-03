import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, Compass, X } from 'lucide-react';
import { DESTINATIONS } from '../data/destinationsData';
import { DestinationCard } from '../components/destinations/DestinationCard';
import { EmptyState } from '../components/common/EmptyState';
import { useLanguage } from '../context/LanguageContext';
import { useDebounce } from '../hooks/useDebounce';

export const DestinationsPage: React.FC = () => {
  const { t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialSearch = searchParams.get('search') || '';
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const debouncedQuery = useDebounce(searchQuery, 300);

  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedStyle, setSelectedStyle] = useState<string>('All');

  const regions = ['All', 'Europe', 'Asia', 'Americas', 'Middle East', 'Oceania'];
  const styles = ['All', 'Culture', 'Luxury', 'Adventure', 'Food', 'Relaxed', 'Beaches'];

  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((d) => {
      if (selectedRegion !== 'All' && d.region !== selectedRegion) return false;
      if (selectedStyle !== 'All' && !d.travelStyles.includes(selectedStyle)) return false;

      if (debouncedQuery.trim()) {
        const q = debouncedQuery.toLowerCase().trim();
        const matchName = d.name.toLowerCase().includes(q);
        const matchCountry = d.country.toLowerCase().includes(q);
        const matchDesc = d.description.toLowerCase().includes(q);
        const matchFamous = d.famousPlaces.some((p) => p.name.toLowerCase().includes(q));
        if (!matchName && !matchCountry && !matchDesc && !matchFamous) return false;
      }

      return true;
    });
  }, [selectedRegion, selectedStyle, debouncedQuery]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedRegion('All');
    setSelectedStyle('All');
    setSearchParams({});
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-accent/20 border border-theme-accent/40 text-theme-accent text-xs font-semibold uppercase">
          <Compass className="w-3.5 h-3.5" />
          <span>Planetary Catalog</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-black text-theme-text-primary tracking-tight">
          {t('destinations.title')}
        </h1>
        <p className="text-sm sm:text-base text-theme-text-secondary leading-relaxed">
          {t('destinations.subtitle')}
        </p>
      </div>

      <div className="p-4 rounded-3xl bg-theme-surface/80 backdrop-blur-2xl border border-theme-border shadow-glass space-y-4">
        <div className="relative flex items-center">
          <Search className="w-5 h-5 text-theme-accent absolute left-4 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by city, country, landmark (e.g. Paris, Tokyo, Matterhorn)..."
            className="w-full pl-12 pr-10 py-3 rounded-2xl bg-theme-surface border border-theme-border/60 text-sm text-theme-text-primary placeholder:text-theme-text-muted focus:outline-none focus:border-theme-accent transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 p-1 rounded-lg text-theme-text-muted hover:text-theme-text-primary cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 border-t border-theme-border/40">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-theme-text-muted mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Region:
            </span>
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  selectedRegion === reg
                    ? 'bg-gradient-to-r from-theme-accent to-theme-accent-secondary text-white shadow-glow-sm'
                    : 'bg-theme-surface hover:bg-theme-surface-hover text-theme-text-secondary border border-theme-border'
                }`}
              >
                {reg === 'All' ? t('destinations.filterAll') : reg}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-theme-text-muted mr-1">Style:</span>
            {styles.map((st) => (
              <button
                key={st}
                onClick={() => setSelectedStyle(st)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all cursor-pointer ${
                  selectedStyle === st
                    ? 'bg-theme-accent/20 border border-theme-accent text-theme-accent'
                    : 'bg-theme-surface/50 hover:bg-theme-surface text-theme-text-muted border border-theme-border/60'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredDestinations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredDestinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      ) : (
        <EmptyState
          title={t('destinations.searchEmptyTitle')}
          message={t('destinations.searchEmptyMsg')}
          actionText={t('destinations.clearFilters')}
          onAction={handleReset}
        />
      )}
    </div>
  );
};
