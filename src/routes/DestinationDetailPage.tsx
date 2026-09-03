import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  Calendar,
  Clock,
  Compass,
  Coins,
  Globe,
  Heart,
  Share2,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { getDestinationById } from '../data/destinationsData';
import { Destination } from '../data/types';
import { resolveDestination } from '../services/dynamicDestinationService';
import { WeatherCard } from '../components/weather/WeatherCard';
import { FamousPlacesStory } from '../components/destinations/FamousPlacesStory';
import { AIChatDrawer } from '../components/ai/AIChatDrawer';
import { Button } from '../components/common/Button';
import { DestinationDiscoveryAnimation } from '../components/lottie/LottieAnimations';
import { useFavorites } from '../context/FavoritesContext';
import { useLanguage } from '../context/LanguageContext';
import { useToast } from '../context/ToastContext';
import { fetchWeather, WeatherData } from '../services/weatherService';

export const DestinationDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite, addRecentlyViewed } = useFavorites();
  const { t } = useLanguage();
  const { showToast } = useToast();

  const [destination, setDestination] = useState<Destination | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [weatherLoading, setWeatherLoading] = useState<boolean>(true);
  const [aiChatOpen, setAiChatOpen] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    async function loadData() {
      if (!id) return;
      setLoading(true);

      // 1. Static lookup
      const staticDest = getDestinationById(id);
      if (staticDest) {
        setDestination(staticDest);
        addRecentlyViewed(staticDest.id);
        setLoading(false);
        return;
      }

      // 2. Dynamic resolution via OpenStreetMap & Unsplash
      const dynamicDest = await resolveDestination(id);
      if (dynamicDest) {
        setDestination(dynamicDest);
        addRecentlyViewed(dynamicDest.id);
      }
      setLoading(false);
    }

    loadData();
  }, [id]);

  useEffect(() => {
    if (!destination) return;
    setWeatherLoading(true);
    fetchWeather(
      destination.name,
      destination.coordinates.lat,
      destination.coordinates.lon
    )
      .then((data) => setWeather(data))
      .catch((err) => console.error(err))
      .finally(() => setWeatherLoading(false));
  }, [destination]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 px-4 space-y-4">
        <DestinationDiscoveryAnimation className="w-24 h-24" />
        <h2 className="font-display text-2xl font-bold text-theme-text-primary text-center">
          Synthesizing Worldwide Horizon...
        </h2>
        <p className="text-xs text-theme-text-secondary text-center max-w-md">
          Resolving live geographic coordinates, Unsplash imagery, meteorological telemetry, and AI travel insights.
        </p>
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 px-4 text-center">
        <Compass className="w-16 h-16 text-theme-text-muted mb-4 animate-bounce" />
        <h2 className="font-display text-2xl font-bold text-theme-text-primary mb-2">
          Sanctuary Not Located
        </h2>
        <p className="text-sm text-theme-text-secondary max-w-md mb-6">
          The requested sanctuary coordinates could not be retrieved. Explore our planetary directory.
        </p>
        <Link to="/destinations">
          <Button variant="primary">Explore Horizons</Button>
        </Link>
      </div>
    );
  }

  const favorited = isFavorite(destination.id);

  const handleToggleFav = () => {
    toggleFavorite(destination.id);
    showToast(
      favorited ? t('toast.favRemoved') : t('toast.favAdded'),
      favorited ? 'info' : 'success'
    );
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${destination.name}, ${destination.country} — WanderAI`,
          text: destination.tagline,
          url: window.location.href,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    await navigator.clipboard.writeText(window.location.href);
    showToast(t('detail.copied'), 'success');
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Header */}
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

              <Link to={`/planner?destination=${encodeURIComponent(destination.name)}`}>
                <Button variant="secondary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                  Plan Itinerary
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Quick Facts Section */}
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
                {destination.coordinates.lat.toFixed(2)}° N, {destination.coordinates.lon.toFixed(2)}° E
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Weather Grid */}
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
            {weather ? (
              <WeatherCard
                weather={weather}
                loading={weatherLoading}
                onRetry={() => {
                  setWeatherLoading(true);
                  fetchWeather(
                    destination.name,
                    destination.coordinates.lat,
                    destination.coordinates.lon
                  )
                    .then((data) => setWeather(data))
                    .finally(() => setWeatherLoading(false));
                }}
              />
            ) : (
              <div className="p-8 rounded-3xl bg-theme-surface/75 border border-theme-border text-center">
                <Compass className="w-8 h-8 text-theme-accent mx-auto animate-spin mb-2" />
                <p className="text-xs text-theme-text-muted">Loading live weather telemetry...</p>
              </div>
            )}
          </div>
        </div>

        {/* Visual Storytelling Landmarks */}
        {destination.famousPlaces && destination.famousPlaces.length > 0 && (
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
        )}
      </div>

      <AIChatDrawer
        isOpen={aiChatOpen}
        onClose={() => setAiChatOpen(false)}
        destinationContext={destination.name}
      />
    </div>
  );
};
