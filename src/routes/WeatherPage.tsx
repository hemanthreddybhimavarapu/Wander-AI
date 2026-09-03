import React, { useState, useEffect } from 'react';
import { CloudSun, Search } from 'lucide-react';
import { fetchWeather, WeatherData } from '../services/weatherService';
import { WeatherCard } from '../components/weather/WeatherCard';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/common/Button';

export const WeatherPage: React.FC = () => {
  const { t } = useLanguage();
  const [query, setQuery] = useState('Paris');
  const [activeCity, setActiveCity] = useState('Paris');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const quickCities = [
    'Paris',
    'Tokyo',
    'Bali',
    'Dubai',
    'London',
    'Rome',
    'New York',
    'Singapore',
    'Sydney',
    'Swiss Alps',
    'Kerala',
  ];

  const loadWeather = (city: string) => {
    setActiveCity(city);
    setLoading(true);
    setError(null);
    fetchWeather(city)
      .then((data) => setWeather(data))
      .catch((err) => setError(err.message || 'Error fetching weather'))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadWeather('Paris');
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      loadWeather(query.trim());
    }
  };

  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-accent/20 border border-theme-accent/40 text-theme-accent text-xs font-semibold uppercase">
          <CloudSun className="w-3.5 h-3.5" />
          <span>Atmospheric Radar</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-black text-theme-text-primary tracking-tight">
          {t('weather.title')}
        </h1>
        <p className="text-sm sm:text-base text-theme-text-secondary leading-relaxed">
          {t('weather.subtitle')}
        </p>
      </div>

      <form
        onSubmit={handleSearch}
        className="flex items-center gap-2 p-2 rounded-2xl bg-theme-surface/85 backdrop-blur-xl border border-theme-border shadow-glass"
      >
        <div className="pl-3 text-theme-accent">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('weather.searchPlaceholder')}
          className="w-full bg-transparent text-sm sm:text-base text-theme-text-primary placeholder:text-theme-text-muted focus:outline-none"
        />
        <Button type="submit" variant="primary" size="md">
          Inspect
        </Button>
      </form>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {quickCities.map((city) => (
          <button
            key={city}
            type="button"
            onClick={() => {
              setQuery(city);
              loadWeather(city);
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
              activeCity.toLowerCase() === city.toLowerCase()
                ? 'bg-gradient-to-r from-theme-accent to-theme-accent-secondary text-white shadow-glow-sm'
                : 'bg-theme-surface hover:bg-theme-surface-hover border border-theme-border text-theme-text-secondary'
            }`}
          >
            {city}
          </button>
        ))}
      </div>

      <WeatherCard
        weather={weather}
        loading={loading}
        error={error}
        onRetry={() => loadWeather(activeCity)}
      />
    </div>
  );
};
