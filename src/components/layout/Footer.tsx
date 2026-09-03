import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Heart, Sparkles, Send } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="mt-28 border-t border-theme-border/60 bg-theme-surface/40 backdrop-blur-xl relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-theme-accent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-br from-theme-surface to-theme-surface-hover border border-theme-border shadow-glass">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-accent/20 border border-theme-accent/40 text-theme-accent text-xs font-semibold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('footer.tagline')}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-theme-text-primary tracking-tight">
              {t('footer.ctaTitle')}
            </h2>
            <p className="text-sm sm:text-base text-theme-text-secondary leading-relaxed">
              {t('footer.ctaDesc')}
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/planner"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-theme-accent to-theme-accent-secondary text-white font-semibold text-sm shadow-glow hover:opacity-95 transition-opacity cursor-pointer"
              >
                {t('footer.planBtn')}
              </Link>
              <Link
                to="/destinations"
                className="px-6 py-3 rounded-full bg-theme-surface hover:bg-theme-surface-hover border border-theme-border text-theme-text-primary font-semibold text-sm transition-colors cursor-pointer"
              >
                {t('footer.exploreBtn')}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-theme-accent to-theme-accent-secondary flex items-center justify-center text-white shadow-glow">
                <Compass className="w-4 h-4" />
              </div>
              <span className="font-display text-lg font-black text-gradient">WANDERAI</span>
            </div>
            <p className="text-xs text-theme-text-muted leading-relaxed">
              {t('footer.brandDesc')}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-theme-text-primary mb-3">
              {t('footer.colNav')}
            </h3>
            <ul className="space-y-2 text-xs text-theme-text-secondary">
              <li><Link to="/" className="hover:text-theme-accent transition-colors">{t('footer.homeExp')}</Link></li>
              <li><Link to="/destinations" className="hover:text-theme-accent transition-colors">{t('footer.curatedDest')}</Link></li>
              <li><Link to="/planner" className="hover:text-theme-accent transition-colors">{t('footer.aiPlanner')}</Link></li>
              <li><Link to="/weather" className="hover:text-theme-accent transition-colors">{t('footer.weatherTel')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-theme-text-primary mb-3">
              {t('footer.colVault')}
            </h3>
            <ul className="space-y-2 text-xs text-theme-text-secondary">
              <li><Link to="/favorites" className="hover:text-theme-accent transition-colors">{t('footer.savedHorizons')}</Link></li>
              <li><Link to="/settings" className="hover:text-theme-accent transition-colors">{t('footer.themePref')}</Link></li>
              <li><Link to="/settings" className="hover:text-theme-accent transition-colors">{t('footer.langPref')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-theme-text-primary mb-3">
              {t('footer.colDispatches')}
            </h3>
            <p className="text-xs text-theme-text-muted mb-3">
              {t('footer.dispatchesDesc')}
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="w-full px-3 py-2 text-xs rounded-xl bg-theme-surface border border-theme-border text-theme-text-primary placeholder:text-theme-text-muted focus:outline-none focus:border-theme-accent"
              />
              <button
                type="button"
                className="p-2 rounded-xl bg-theme-accent text-white shadow-glow hover:opacity-90 transition-opacity cursor-pointer"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-theme-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-theme-text-muted">
          <p>&copy; {new Date().getFullYear()} WANDERAI Inc. {t('footer.copyright')}</p>
          <div className="flex items-center gap-1">
            <span>{t('footer.crafted')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
