import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, TrendingUp, Compass, Clock } from 'lucide-react';
import { Hero } from '../components/hero/Hero';
import { DestinationCard } from '../components/destinations/DestinationCard';
import { TrendingCarousel } from '../components/destinations/TrendingCarousel';
import {
  DESTINATIONS,
  getFeaturedDestinations,
  getTrendingDestinations,
  getDestinationById,
} from '../data/destinationsData';
import { useFavorites } from '../context/FavoritesContext';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/common/Button';

export const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const { recentlyViewed } = useFavorites();

  const featured = getFeaturedDestinations();
  const trending = getTrendingDestinations();
  const popular = DESTINATIONS.slice(0, 6);

  const recentDestinations = recentlyViewed
    .map((id) => getDestinationById(id))
    .filter(Boolean);

  return (
    <div className="space-y-24">
      <Hero />

      {recentDestinations.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-theme-text-muted mb-4">
            <Clock className="w-4 h-4 text-theme-accent" />
            <span>{t('home.continueExploring')}</span>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
            {recentDestinations.map((dest: any) => (
              <Link
                key={dest.id}
                to={`/destination/${dest.id}`}
                className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-theme-surface/70 hover:bg-theme-surface border border-theme-border/70 hover:border-theme-accent text-theme-text-primary transition-all shrink-0"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-8 h-8 rounded-lg object-cover"
                />
                <div className="text-left">
                  <div className="text-xs font-semibold">{dest.name}</div>
                  <div className="text-[10px] text-theme-text-muted">{dest.country}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {featured.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-accent/20 border border-theme-accent/40 text-theme-accent text-xs font-semibold uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t('destinations.featured')}</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-theme-text-primary">
                {t('home.spotlight')}: {featured[0].name}
              </h2>
            </div>
            <Link to={`/destination/${featured[0].id}`}>
              <Button variant="secondary" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                {t('home.readStory')}
              </Button>
            </Link>
          </div>

          <div className="relative rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] bg-slate-900 border border-theme-border shadow-glow-lg group">
            <img
              src={featured[0].image}
              alt={featured[0].name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 max-w-xl space-y-2 text-white">
              <span className="text-xs font-semibold tracking-wider uppercase text-theme-accent-secondary">
                {featured[0].country} • {featured[0].region}
              </span>
              <h3 className="font-display text-2xl sm:text-4xl font-black">
                {featured[0].tagline}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 line-clamp-2">
                {featured[0].description}
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-accent/20 border border-theme-accent/40 text-theme-accent text-xs font-semibold uppercase mb-2">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{t('destinations.trending')}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-theme-text-primary">
              {t('home.trendingTitle')}
            </h2>
          </div>
          <Link to="/destinations" className="text-xs font-semibold text-theme-accent hover:underline hidden sm:inline">
            {t('home.viewAll')}
          </Link>
        </div>

        <TrendingCarousel destinations={trending} />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-accent/20 border border-theme-accent/40 text-theme-accent text-xs font-semibold uppercase mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>{t('destinations.popular')}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-theme-text-primary">
              {t('home.popularTitle')}
            </h2>
          </div>
          <Link to="/destinations">
            <Button variant="secondary" size="sm">
              {t('home.exploreAll')}
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {popular.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </section>
    </div>
  );
};
