import React from 'react';
import { motion } from 'framer-motion';
import {
  CloudSun,
  Droplets,
  Wind,
  Gauge,
  Eye,
  Sunrise,
  Sunset,
  RefreshCw,
} from 'lucide-react';
import { WeatherData } from '../../services/weatherService';
import { WeatherAnimation } from '../lottie/LottieAnimations';
import { useLanguage } from '../../context/LanguageContext';

export const WeatherCard: React.FC<{
  weather: WeatherData | null;
  loading?: boolean;
  error?: string | null;
  onRetry?: () => void;
}> = ({ weather, loading = false, error = null, onRetry }) => {
  const { t } = useLanguage();

  if (loading) {
    return (
      <div className="p-8 rounded-3xl bg-theme-surface/75 backdrop-blur-2xl border border-theme-border shadow-glass flex flex-col items-center justify-center space-y-4 min-h-[340px]">
        <WeatherAnimation className="w-24 h-24" />
        <span className="text-xs text-theme-text-muted animate-pulse">
          Calibrating meteorological sensors...
        </span>
      </div>
    );
  }

  if (error || !weather) {
    return (
      <div className="p-8 rounded-3xl bg-theme-surface/75 backdrop-blur-2xl border border-theme-border shadow-glass text-center space-y-4">
        <CloudSun className="w-12 h-12 text-theme-accent mx-auto" />
        <div className="text-sm font-semibold text-theme-text-primary">
          {error || 'Atmospheric telemetry unavailable'}
        </div>
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-4 py-2 rounded-xl bg-theme-accent text-white text-xs font-semibold shadow-glow cursor-pointer"
          >
            Retry Sensor
          </button>
        )}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-6 sm:p-8 rounded-3xl bg-theme-surface/85 backdrop-blur-2xl border border-theme-border shadow-glass space-y-6"
    >
      <div className="flex items-center justify-between border-b border-theme-border/40 pb-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-theme-accent">
            Live Telemetry
          </span>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-theme-text-primary">
            {weather.city}, {weather.country}
          </h3>
        </div>

        {onRetry && (
          <button
            onClick={onRetry}
            className="p-2 rounded-xl hover:bg-theme-surface text-theme-text-muted hover:text-theme-text-primary transition-colors cursor-pointer"
            aria-label="Refresh weather telemetry"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="font-display text-5xl sm:text-6xl font-black text-theme-text-primary">
            {weather.temp}°<span className="text-2xl font-light text-theme-text-muted">C</span>
          </div>
          <p className="text-xs text-theme-text-secondary capitalize mt-1">
            {weather.description}
          </p>
          <span className="text-[11px] text-theme-text-muted">
            {t('weather.feelsLike')} {weather.feelsLike}°C
          </span>
        </div>

        <div className="w-24 h-24 sm:w-28 sm:h-28">
          <WeatherAnimation condition={weather.condition} className="w-full h-full" />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        <div className="p-3 rounded-2xl bg-theme-surface/50 border border-theme-border/50">
          <div className="flex items-center gap-1.5 text-xs text-theme-text-muted mb-1">
            <Droplets className="w-3.5 h-3.5 text-sky-400" />
            <span>{t('weather.humidity')}</span>
          </div>
          <span className="text-sm font-bold text-theme-text-primary">{weather.humidity}%</span>
        </div>

        <div className="p-3 rounded-2xl bg-theme-surface/50 border border-theme-border/50">
          <div className="flex items-center gap-1.5 text-xs text-theme-text-muted mb-1">
            <Wind className="w-3.5 h-3.5 text-teal-400" />
            <span>{t('weather.wind')}</span>
          </div>
          <span className="text-sm font-bold text-theme-text-primary">{weather.windSpeed} m/s</span>
        </div>

        <div className="p-3 rounded-2xl bg-theme-surface/50 border border-theme-border/50">
          <div className="flex items-center gap-1.5 text-xs text-theme-text-muted mb-1">
            <Gauge className="w-3.5 h-3.5 text-amber-400" />
            <span>{t('weather.pressure')}</span>
          </div>
          <span className="text-sm font-bold text-theme-text-primary">{weather.pressure} hPa</span>
        </div>

        <div className="p-3 rounded-2xl bg-theme-surface/50 border border-theme-border/50">
          <div className="flex items-center gap-1.5 text-xs text-theme-text-muted mb-1">
            <Eye className="w-3.5 h-3.5 text-indigo-400" />
            <span>{t('weather.visibility')}</span>
          </div>
          <span className="text-sm font-bold text-theme-text-primary">{weather.visibility} km</span>
        </div>
      </div>

      <div className="flex items-center justify-around p-3 rounded-2xl bg-theme-surface/30 border border-theme-border/40 text-xs text-theme-text-secondary">
        <div className="flex items-center gap-2">
          <Sunrise className="w-4 h-4 text-amber-400" />
          <span>{t('weather.sunrise')}: <strong>{weather.sunrise}</strong></span>
        </div>
        <div className="w-px h-4 bg-theme-border" />
        <div className="flex items-center gap-2">
          <Sunset className="w-4 h-4 text-orange-400" />
          <span>{t('weather.sunset')}: <strong>{weather.sunset}</strong></span>
        </div>
      </div>

      {weather.forecast && weather.forecast.length > 0 && (
        <div className="space-y-2 pt-2 border-t border-theme-border/40">
          <span className="text-xs font-bold uppercase tracking-widest text-theme-text-muted block">
            {t('weather.forecast')}
          </span>
          <div className="grid grid-cols-5 gap-2 text-center">
            {weather.forecast.map((fc, i) => (
              <div key={i} className="p-2.5 rounded-xl bg-theme-surface/40 border border-theme-border/40 space-y-1">
                <span className="text-[11px] font-semibold text-theme-text-muted block">{fc.day}</span>
                <span className="text-xs font-bold text-theme-text-primary block">{fc.temp}°</span>
                <span className="text-[10px] text-theme-accent block">{fc.condition}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};
