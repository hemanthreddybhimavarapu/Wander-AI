import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { Destination } from '../../data/types';
import { useFavorites } from '../../context/FavoritesContext';
import { useLanguage } from '../../context/LanguageContext';
import { useToast } from '../../context/ToastContext';
import { cardHoverVariants } from '../../utils/animations';

export const DestinationCard: React.FC<{ destination: Destination }> = ({ destination }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { t } = useLanguage();
  const { showToast } = useToast();

  const favorited = isFavorite(destination.id);

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const added = toggleFavorite(destination.id);
    showToast(
      added ? t('toast.favAdded') : t('toast.favRemoved'),
      added ? 'success' : 'info'
    );
  };

  return (
    <motion.div
      variants={cardHoverVariants}
      initial="initial"
      whileHover="hover"
      className="group relative rounded-3xl overflow-hidden bg-theme-surface/75 backdrop-blur-xl border border-theme-border shadow-glass flex flex-col justify-between"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {destination.featured && (
            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-theme-accent/90 text-white backdrop-blur-md shadow-glow-sm flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              {t('destinations.featured')}
            </span>
          )}
          {destination.trending && (
            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/90 text-white backdrop-blur-md shadow-sm">
              {t('destinations.trending')}
            </span>
          )}
        </div>

        <button
          onClick={handleToggleFavorite}
          className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md border transition-all cursor-pointer ${
            favorited
              ? 'bg-rose-500 border-rose-400 text-white shadow-glow'
              : 'bg-black/40 border-white/20 text-white hover:bg-black/60'
          }`}
          aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart className={`w-4 h-4 ${favorited ? 'fill-current' : ''}`} />
        </button>

        <div className="absolute bottom-4 left-4 right-4 text-white">
          <span className="text-[11px] font-bold uppercase tracking-wider text-theme-accent-secondary">
            {destination.country}
          </span>
          <h3 className="font-display text-2xl font-black leading-tight drop-shadow-md">
            {destination.name}
          </h3>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <p className="text-xs text-theme-text-secondary line-clamp-2 leading-relaxed">
          {destination.tagline}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {destination.travelStyles.slice(0, 3).map((st) => (
            <span
              key={st}
              className="px-2.5 py-1 rounded-lg bg-theme-surface border border-theme-border/60 text-[10px] font-semibold text-theme-text-muted"
            >
              {st}
            </span>
          ))}
        </div>

        <div className="pt-2 border-t border-theme-border/40 flex items-center justify-between">
          <div className="text-[11px] text-theme-text-muted flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-theme-accent" />
            <span>{destination.region}</span>
          </div>

          <Link
            to={`/destination/${destination.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-theme-accent hover:text-theme-accent-secondary transition-colors"
          >
            <span>{t('destinations.viewDetails')}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
