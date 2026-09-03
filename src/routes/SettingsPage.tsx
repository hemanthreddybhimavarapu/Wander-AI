import React, { useState, useMemo } from 'react';
import { Palette, Globe, Activity, Trash2, CheckCircle2, Search } from 'lucide-react';
import { useTheme, THEMES } from '../context/ThemeContext';
import { useLanguage, LANGUAGES, LanguageCode } from '../context/LanguageContext';
import { useFavorites } from '../context/FavoritesContext';
import { useToast } from '../context/ToastContext';
import { Button } from '../components/common/Button';

export const SettingsPage: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, currentLanguageOption, t } = useLanguage();
  const { clearFavorites, clearRecentlyViewed } = useFavorites();
  const { showToast } = useToast();

  const [langSearch, setLangSearch] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

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

  const regions = ['All', 'Indic', 'Europe', 'East Asia', 'Middle East', 'Global'];

  const filteredLanguages = useMemo(() => {
    return LANGUAGES.filter((l) => {
      if (selectedRegion !== 'All' && l.region !== selectedRegion) return false;
      if (langSearch.trim()) {
        const q = langSearch.toLowerCase().trim();
        return (
          l.name.toLowerCase().includes(q) ||
          l.nativeName.toLowerCase().includes(q) ||
          l.code.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedRegion, langSearch]);

  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <h1 className="font-display text-4xl font-black text-theme-text-primary tracking-tight">
          System Preferences
        </h1>
        <p className="text-sm text-theme-text-secondary">
          Personalize themes, multilingual dialect (40 languages supported), and accessibility.
        </p>
      </div>

      {/* Visual Themes */}
      <section className="p-6 sm:p-8 rounded-3xl bg-theme-surface/75 backdrop-blur-xl border border-theme-border shadow-glass space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-theme-accent/20 border border-theme-accent/40 text-theme-accent">
            <Palette className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-theme-text-primary">
              Visual Theme Experience
            </h2>
            <p className="text-xs text-theme-text-muted">
              Select from six curated atmospheric design systems with dynamic color tokens.
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
                    ? 'border-theme-accent bg-theme-surface-hover shadow-glow-sm ring-1 ring-theme-accent'
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

      {/* Multilingual Localization (40 Languages) */}
      <section className="p-6 sm:p-8 rounded-3xl bg-theme-surface/75 backdrop-blur-xl border border-theme-border shadow-glass space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-theme-accent-secondary/20 border border-theme-accent-secondary/40 text-theme-accent-secondary">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-theme-text-primary">
                Multilingual Localization (40 Languages)
              </h2>
              <p className="text-xs text-theme-text-muted">
                Choose from 40 global languages. Entire interface and AI synthesis dynamically translate.
              </p>
            </div>
          </div>

          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-theme-accent/15 border border-theme-accent/30 text-theme-accent self-start sm:self-auto">
            Active: {currentLanguageOption.name} ({currentLanguageOption.nativeName})
          </span>
        </div>

        {/* Search & Categories */}
        <div className="space-y-3 pt-2">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-theme-accent absolute left-3.5 pointer-events-none" />
            <input
              type="text"
              value={langSearch}
              onChange={(e) => setLangSearch(e.target.value)}
              placeholder="Search dialect by name, native script, or code..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-theme-surface border border-theme-border text-xs text-theme-text-primary placeholder:text-theme-text-muted focus:outline-none focus:border-theme-accent"
            />
          </div>

          <div className="flex flex-wrap gap-1.5">
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  selectedRegion === reg
                    ? 'bg-theme-accent text-white shadow-glow-sm'
                    : 'bg-theme-surface hover:bg-theme-surface-hover text-theme-text-secondary border border-theme-border'
                }`}
              >
                {reg} {reg === 'All' ? '(40)' : ''}
              </button>
            ))}
          </div>
        </div>

        {/* 40 Languages Scroll Area */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 max-h-[380px] overflow-y-auto p-1">
          {filteredLanguages.map((lang) => {
            const isActive = language === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => {
                  setLanguage(lang.code as LanguageCode);
                  showToast(t('toast.langChanged', { lang: lang.name }), 'info');
                }}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'border-theme-accent bg-theme-accent/20 text-theme-text-primary shadow-glow-sm ring-1 ring-theme-accent'
                    : 'border-theme-border/60 hover:border-theme-border bg-theme-surface/40 hover:bg-theme-surface'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xl">{lang.flag}</span>
                  {lang.dir === 'rtl' && (
                    <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-400 text-[9px] font-bold uppercase">
                      RTL
                    </span>
                  )}
                  {isActive && <CheckCircle2 className="w-3.5 h-3.5 text-theme-accent" />}
                </div>
                <div className="font-bold text-xs text-theme-text-primary truncate">
                  {lang.nativeName}
                </div>
                <div className="text-[10px] text-theme-text-muted truncate">
                  {lang.name}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Reduced Motion */}
      <section className="p-6 sm:p-8 rounded-3xl bg-theme-surface/75 backdrop-blur-xl border border-theme-border shadow-glass flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-display text-base font-bold text-theme-text-primary">
              Reduced Motion Preference
            </h2>
            <p className="text-xs text-theme-text-muted">
              Minimizes floating particles, background shifts, and intensive animations.
            </p>
          </div>
        </div>

        <button
          onClick={toggleMotion}
          className={`w-12 h-6 rounded-full transition-colors relative p-1 cursor-pointer ${
            reduceMotion ? 'bg-theme-accent shadow-glow' : 'bg-theme-surface border border-theme-border'
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

      {/* Reset Vault */}
      <section className="p-6 sm:p-8 rounded-3xl bg-theme-surface/75 backdrop-blur-xl border border-theme-border shadow-glass flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-base font-bold text-theme-text-primary">
            Reset Application Data
          </h2>
          <p className="text-xs text-theme-text-muted">
            Clears saved journeys in your personal vault, recent history, and custom parameters.
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
