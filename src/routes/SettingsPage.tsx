import React, { useState } from 'react';
import { Palette, Globe, Activity, Trash2, CheckCircle2 } from 'lucide-react';
import { useTheme, THEMES } from '../context/ThemeContext';
import { useLanguage, LANGUAGES } from '../context/LanguageContext';
import { useFavorites } from '../context/FavoritesContext';
import { useToast } from '../context/ToastContext';
import { Button } from '../components/common/Button';

export const SettingsPage: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const { clearFavorites, clearRecentlyViewed } = useFavorites();
  const { showToast } = useToast();

  const [reduceMotion, setReduceMotion] = useState(() => {
    return localStorage.getItem('wanderai_reduce_motion') === 'true';
  });

  const toggleMotion = () => {
    const nextVal = !reduceMotion;
    setReduceMotion(nextVal);
    localStorage.setItem('wanderai_reduce_motion', String(nextVal));
    showToast(`Reduced motion ${nextVal ? 'enabled' : 'disabled'}`, 'info');
  };

  const handleClearData = () => {
    clearFavorites();
    clearRecentlyViewed();
    showToast('Local application cache cleared.', 'success');
  };

  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <h1 className="font-display text-4xl font-black text-theme-text-primary tracking-tight">
          System Preferences
        </h1>
        <p className="text-sm text-theme-text-secondary">
          Personalize themes, language telemetry, and accessibility.
        </p>
      </div>

      <section className="p-6 sm:p-8 rounded-3xl bg-theme-surface/75 backdrop-blur-xl border border-theme-border shadow-glass space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-theme-accent/20 border border-theme-accent/40 text-theme-accent">
            <Palette className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-theme-text-primary">
              Visual Theme Experience
            </h2>
            <p className="text-xs text-theme-text-muted">
              Select from six curated atmospheric design systems.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {THEMES.map((th) => {
            const isActive = theme === th.id;
            return (
              <button
                key={th.id}
                type="button"
                onClick={() => {
                  setTheme(th.id);
                  showToast(`Theme switched to ${th.name}`, 'info');
                }}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  isActive
                    ? 'border-theme-accent bg-theme-surface-hover shadow-glow-sm'
                    : 'border-theme-border/60 hover:border-theme-border bg-theme-surface/40'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex -space-x-1">
                    <span
                      className="w-4 h-4 rounded-full border border-black/30"
                      style={{ backgroundColor: th.colors[0] }}
                    />
                    <span
                      className="w-4 h-4 rounded-full border border-black/30"
                      style={{ backgroundColor: th.colors[1] }}
                    />
                    <span
                      className="w-4 h-4 rounded-full border border-black/30"
                      style={{ backgroundColor: th.colors[2] }}
                    />
                  </div>
                  {isActive && <CheckCircle2 className="w-4 h-4 text-theme-accent" />}
                </div>
                <div className="font-bold text-sm text-theme-text-primary">{th.name}</div>
                <div className="text-[11px] text-theme-text-muted mt-0.5 leading-relaxed">
                  {th.description}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="p-6 sm:p-8 rounded-3xl bg-theme-surface/75 backdrop-blur-xl border border-theme-border shadow-glass space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-theme-accent-secondary/20 border border-theme-accent-secondary/40 text-theme-accent-secondary">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-theme-text-primary">
              Multilingual Localization
            </h2>
            <p className="text-xs text-theme-text-muted">
              Choose your interface and AI assistant dialogue language.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {LANGUAGES.map((lang) => {
            const isActive = language === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => {
                  setLanguage(lang.code);
                  showToast(t('toast.langChanged', { lang: lang.name }), 'info');
                }}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                  isActive
                    ? 'border-theme-accent bg-theme-surface-hover shadow-glow-sm'
                    : 'border-theme-border/60 hover:border-theme-border bg-theme-surface/40'
                }`}
              >
                <div className="text-xl mb-1">{lang.flag}</div>
                <div className="font-bold text-xs text-theme-text-primary">{lang.nativeName}</div>
                <div className="text-[10px] text-theme-text-muted">{lang.name}</div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="p-6 sm:p-8 rounded-3xl bg-theme-surface/75 backdrop-blur-xl border border-theme-border shadow-glass flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-display text-base font-bold text-theme-text-primary">
              Reduced Motion Preference
            </h2>
            <p className="text-xs text-theme-text-muted">
              Minimizes decorative animations for motion sensitivity.
            </p>
          </div>
        </div>

        <button
          onClick={toggleMotion}
          className={`w-12 h-6 rounded-full transition-colors relative p-1 cursor-pointer ${
            reduceMotion ? 'bg-theme-accent' : 'bg-theme-surface border border-theme-border'
          }`}
          aria-label="Toggle reduced motion"
        >
          <div
            className={`w-4 h-4 rounded-full bg-white transition-transform ${
              reduceMotion ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
        </button>
      </section>

      <section className="p-6 sm:p-8 rounded-3xl bg-theme-surface/75 backdrop-blur-xl border border-theme-border shadow-glass flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-base font-bold text-theme-text-primary">
            Reset Application Data
          </h2>
          <p className="text-xs text-theme-text-muted">
            Clears your saved journeys, recent history, and custom parameters.
          </p>
        </div>

        <Button
          variant="secondary"
          size="sm"
          onClick={handleClearData}
          icon={<Trash2 className="w-4 h-4 text-rose-400" />}
          className="hover:border-rose-400"
        >
          Clear Data
        </Button>
      </section>
    </div>
  );
};
