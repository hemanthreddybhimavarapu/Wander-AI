import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Heart,
  Share2,
  Calendar,
  Coins,
  Globe,
  Clock,
  Compass,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  CheckCircle2,
} from 'lucide-react';
import { getDestinationById } from '../data/destinationsData';
import { fetchWeather, WeatherData } from '../services/weatherService';
import { FamousPlacesStory } from '../components/destinations/FamousPlacesStory';
import { WeatherCard } from '../components/weather/WeatherCard';
import { AIChatDrawer } from '../components/ai/AIChatDrawer';
import { useFavorites } from '../context/FavoritesContext';
import { useToast } from '../context/ToastContext';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/common/Button';

export const DestinationDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { isFavorite, toggleFavorite, addRecentlyViewed } = useFavorites();
  const { showToast } = useToast();

  const destination = id ? getDestinationById(id) : undefined;
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [aiChatOpen, setAiChatOpen] = useState(false);

  useEffect(() => {
    if (destination) {
      addRecentlyViewed(destination.id);
      setWeatherLoading(true);
      fetchWeather(destination.name, destination.coordinates.lat, destination.coordinates.lon)
        .then((data) => setWeather(data))
        .finally(() => setWeatherLoading(false));
    }
  }, [id, destination]);

  if (!destination) {
    return (
      <div className="pt-36 pb-20 text-center space-y-4">
        <h2 className="font-display text-2xl font-bold text-theme-text-primary">
          Destination Not Found
        </h2>
        <Link to="/destinations">
          <Button variant="secondary" size="sm">
            Back to Destinations
          </Button>
        </Link>
      </div>
    );
  }

  const favorited = isFavorite(destination.id);

  const handleToggleFav = () => {
    const added = toggleFavorite(destination.id);
    showToast(added ? t('toast.favAdded') : t('toast.favRemoved'), added ? 'success' : 'info');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `WanderAI — ${destination.name}`,
          text: destination.tagline,
          url: window.location.href,
        });
        showToast(t('detail.copied'), 'success');
        return;
      } catch {
        // Fallback
      }
    }
    await navigator.clipboard.writeText(window.location.href);
    showToast(t('detail.copied'), 'success');
  };

  return (
    <div className="space-y-20 pb-20">
      <div className="relative min-h-[75vh] flex items-end pb-12 pt-28 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="absolute inset-0 w-full h-full object-cover scale-105 filter brightness-[0.45]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-theme-bg via-theme-bg/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-xs font-medium text-white/90 hover:text-white border border-white/20 mb-2 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-theme-accent-secondary">
                {destination.country} • {destination.region}
              </span>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">
                {destination.name}
              </h1>
              <p className="text-base sm:text-xl text-slate-200 font-light mt-1 max-w-2xl">
                {destination.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleToggleFav}
                className={`p-3.5 rounded-full backdrop-blur-md border transition-all cursor-pointer ${
                  favorited
                    ? 'bg-rose-500 border-rose-400 text-white shadow-glow'
                    : 'bg-black/50 border-white/25 text-white hover:bg-black/70'
                }`}
                aria-label="Save Destination"
              >
                <Heart className={`w-5 h-5 ${favorited ? 'fill-current' : ''}`} />
              </button>

              <button
                onClick={handleShare}
                className="p-3.5 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/25 text-white transition-all cursor-pointer"
                aria-label="Share Destination"
              >
                <Share2 className="w-5 h-5" />
              </button>

              <Button
                variant="primary"
                size="md"
                onClick={() => setAiChatOpen(true)}
                icon={<Sparkles className="w-4 h-4" />}
              >
                Ask Concierge
              </Button>

              <Link to="/planner">
                <Button variant="secondary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                  Plan Itinerary
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <section className="p-6 sm:p-8 rounded-3xl bg-theme-surface/75 backdrop-blur-2xl border border-theme-border shadow-glass">
          <h2 className="text-xs font-bold uppercase tracking-widest text-theme-text-muted mb-6">
            {t('detail.quickFacts')}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-left">
            <div>
              <div className="flex items-center gap-2 text-xs text-theme-text-muted mb-1">
                <Calendar className="w-4 h-4 text-theme-accent" />
                <span>{t('detail.bestTime')}</span>
              </div>
              <div className="font-semibold text-sm text-theme-text-primary">
                {destination.bestTime}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs text-theme-text-muted mb-1">
                <Coins className="w-4 h-4 text-amber-400" />
                <span>{t('detail.currency')}</span>
              </div>
              <div className="font-semibold text-sm text-theme-text-primary">
                {destination.currency}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs text-theme-text-muted mb-1">
                <Globe className="w-4 h-4 text-teal-400" />
                <span>{t('detail.language')}</span>
              </div>
              <div className="font-semibold text-sm text-theme-text-primary">
                {destination.language}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs text-theme-text-muted mb-1">
                <Clock className="w-4 h-4 text-sky-400" />
                <span>{t('detail.timezone')}</span>
              </div>
              <div className="font-semibold text-sm text-theme-text-primary">
                {destination.timezone}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs text-theme-text-muted mb-1">
                <Compass className="w-4 h-4 text-rose-400" />
                <span>{t('detail.coordinates')}</span>
              </div>
              <div className="font-semibold text-sm text-theme-text-primary">
                {destination.coordinates.lat}° N, {destination.coordinates.lon}° E
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-theme-text-primary">
              {t('detail.about')}
            </h2>
            <p className="text-sm sm:text-base text-theme-text-secondary leading-relaxed">
              {destination.description}
            </p>

            <div className="pt-4 space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-theme-text-muted">
                {t('detail.travelTips')}
              </h3>
              {destination.travelTips.map((tip, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-2xl bg-theme-surface/50 border border-theme-border/60 text-xs text-theme-text-secondary"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <WeatherCard
              weather={weather}
              loading={weatherLoading}
              onRetry={() => {
                setWeatherLoading(true);
                fetchWeather(destination.name, destination.coordinates.lat, destination.coordinates.lon)
                  .then((data) => setWeather(data))
                  .finally(() => setWeatherLoading(false));
              }}
            />
          </div>
        </div>

        <section className="space-y-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-accent/20 border border-theme-accent/40 text-theme-accent text-xs font-semibold uppercase mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Visual Storytelling</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-theme-text-primary">
              {t('detail.famousPlaces')}
            </h2>
          </div>

          <FamousPlacesStory places={destination.famousPlaces} />
        </section>
      </div>

      <AIChatDrawer
        isOpen={aiChatOpen}
        onClose={() => setAiChatOpen(false)}
        destinationContext={destination.name}
      />
    </div>
  );
};
