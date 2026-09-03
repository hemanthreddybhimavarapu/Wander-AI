import React from 'react';
import { Heart, Trash2 } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import { getDestinationById } from '../data/destinationsData';
import { DestinationCard } from '../components/destinations/DestinationCard';
import { EmptyState } from '../components/common/EmptyState';
import { Button } from '../components/common/Button';

export const FavoritesPage: React.FC = () => {
  const { favorites, clearFavorites } = useFavorites();

  const favoriteDestinations = favorites
    .map((id) => getDestinationById(id))
    .filter(Boolean) as any[];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-theme-border/60 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-400 text-xs font-semibold uppercase mb-2">
            <Heart className="w-3.5 h-3.5 fill-rose-400" />
            <span>Curated Sanctuary</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-black text-theme-text-primary tracking-tight">
            Saved Horizons
          </h1>
          <p className="text-sm text-theme-text-secondary mt-1">
            {favoriteDestinations.length} bookmarked journeys stored on this device.
          </p>
        </div>

        {favoriteDestinations.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFavorites}
            icon={<Trash2 className="w-4 h-4 text-rose-400" />}
            className="hover:text-rose-400"
          >
            Clear All
          </Button>
        )}
      </div>

      {favoriteDestinations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {favoriteDestinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No saved journeys yet"
          message="Tap the heart icon on any destination or famous landmark to pin it to your personal travel archive."
          actionText="Discover Destinations"
          onAction={() => (window.location.href = '/destinations')}
        />
      )}
    </div>
  );
};
