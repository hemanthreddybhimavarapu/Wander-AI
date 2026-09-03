import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  MapPin,
  Sparkles,
  CloudSun,
  Heart,
  Settings,
  Menu,
  X,
} from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useFavorites } from '../../context/FavoritesContext';
import { useLanguage } from '../../context/LanguageContext';
import { ThemeSelector } from '../common/ThemeSelector';
import { LanguageSelector } from '../common/LanguageSelector';

export const Navbar: React.FC = () => {
  const { isScrolled } = useScrollPosition(25);
  const { favorites } = useFavorites();
  const { t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: t('nav.explore'), icon: <Compass className="w-4 h-4" /> },
    { to: '/destinations', label: t('nav.destinations'), icon: <MapPin className="w-4 h-4" /> },
    { to: '/planner', label: t('nav.planner'), icon: <Sparkles className="w-4 h-4" /> },
    { to: '/weather', label: t('nav.weather'), icon: <CloudSun className="w-4 h-4" /> },
    {
      to: '/favorites',
      label: t('nav.favorites'),
      icon: <Heart className="w-4 h-4" />,
      badge: favorites.length > 0 ? favorites.length : undefined,
    },
    { to: '/settings', label: t('nav.settings'), icon: <Settings className="w-4 h-4" /> },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 bg-theme-bg/80 backdrop-blur-xl border-b border-theme-border shadow-glass'
          : 'py-4 bg-gradient-to-b from-theme-bg/90 via-theme-bg/40 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-theme-accent to-theme-accent-secondary flex items-center justify-center text-white shadow-glow transition-transform group-hover:scale-105">
            <Compass className="w-5 h-5 animate-[spin_12s_linear_infinite]" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-black tracking-tight text-gradient">
              WANDERAI
            </span>
            <span className="text-[9px] uppercase tracking-widest text-theme-text-muted font-semibold">
              Go Somewhere Worth Remembering
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-theme-surface/75 backdrop-blur-xl border border-theme-border shadow-inner">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 transition-all ${
                  isActive
                    ? 'text-white'
                    : 'text-theme-text-secondary hover:text-theme-text-primary'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-theme-accent to-theme-accent-secondary shadow-glow"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {link.icon}
                  <span>{link.label}</span>
                  {link.badge !== undefined && (
                    <span className="ml-1 px-1.5 py-0.2 rounded-full bg-rose-500 text-white text-[10px] font-black">
                      {link.badge}
                    </span>
                  )}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <LanguageSelector />
          <ThemeSelector />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-theme-surface lg:hidden border border-theme-border text-theme-text-primary hover:bg-theme-surface-hover transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mx-4 mt-3 p-5 rounded-3xl bg-theme-surface/95 backdrop-blur-2xl border border-theme-border shadow-glass space-y-3"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-theme-accent to-theme-accent-secondary text-white shadow-glow'
                        : 'text-theme-text-secondary hover:bg-theme-surface-hover hover:text-theme-text-primary'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {link.icon}
                      <span>{link.label}</span>
                    </div>
                    {link.badge !== undefined && (
                      <span className="px-2 py-0.5 rounded-full bg-rose-500 text-white text-xs font-black">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
