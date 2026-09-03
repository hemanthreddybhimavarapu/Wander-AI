import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Search, X, Check } from 'lucide-react';
import { useLanguage, LANGUAGES, LanguageCode } from '../../context/LanguageContext';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage, currentLanguageOption } = useLanguage();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const modalRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    if (open) {
      document.addEventListener('keydown', handleKeyDown);
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  const regions = ['All', 'Indic', 'Europe', 'East Asia', 'Middle East', 'Global'];

  const filteredLanguages = useMemo(() => {
    return LANGUAGES.filter((l) => {
      if (selectedRegion !== 'All' && l.region !== selectedRegion) return false;
      if (search.trim()) {
        const q = search.toLowerCase().trim();
        const matchName = l.name.toLowerCase().includes(q);
        const matchNative = l.nativeName.toLowerCase().includes(q);
        const matchCode = l.code.toLowerCase().includes(q);
        return matchName || matchNative || matchCode;
      }
      return true;
    });
  }, [selectedRegion, search]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-theme-surface/80 hover:bg-theme-surface border border-theme-border text-xs font-semibold text-theme-text-primary transition-all cursor-pointer shadow-glass group"
        aria-label="Select Language from 40 options"
      >
        <span className="text-sm transition-transform group-hover:scale-110">
          {currentLanguageOption.flag}
        </span>
        <span className="hidden sm:inline uppercase text-[11px] tracking-wider font-bold">
          {currentLanguageOption.code}
        </span>
        <span className="text-[11px] text-theme-text-muted hidden md:inline">
          ({currentLanguageOption.nativeName})
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="w-full max-w-2xl max-h-[85vh] rounded-3xl bg-theme-surface/95 backdrop-blur-2xl border border-theme-border shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="p-5 border-b border-theme-border/60 flex items-center justify-between bg-theme-surface">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-theme-accent to-theme-accent-secondary flex items-center justify-center text-white shadow-glow">
                    <Globe className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-theme-text-primary">
                      Multilingual Experience
                    </h3>
                    <p className="text-xs text-theme-text-muted">
                      Select your preferred dialect from 40 global languages
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-xl text-theme-text-muted hover:text-theme-text-primary hover:bg-theme-surface-hover transition-colors cursor-pointer"
                  aria-label="Close language selector"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search Bar & Region Chips */}
              <div className="p-4 border-b border-theme-border/40 space-y-3 bg-theme-surface/60">
                <div className="relative flex items-center">
                  <Search className="w-4 h-4 text-theme-accent absolute left-3.5 pointer-events-none" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search across 40 languages (e.g. Arabic, French, Telugu, हिन्दी)..."
                    className="w-full pl-10 pr-9 py-2 rounded-xl bg-theme-surface border border-theme-border text-xs text-theme-text-primary placeholder:text-theme-text-muted focus:outline-none focus:border-theme-accent transition-colors"
                  />
                  {search && (
                    <button
                      onClick={() => setSearch('')}
                      className="absolute right-3 p-0.5 text-theme-text-muted hover:text-theme-text-primary cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-1.5">
                  {regions.map((reg) => (
                    <button
                      key={reg}
                      onClick={() => setSelectedRegion(reg)}
                      className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                        selectedRegion === reg
                          ? 'bg-theme-accent text-white shadow-glow-sm'
                          : 'bg-theme-surface/70 hover:bg-theme-surface text-theme-text-secondary border border-theme-border/60'
                      }`}
                    >
                      {reg} {reg === 'All' ? `(40)` : ''}
                    </button>
                  ))}
                </div>
              </div>

              {/* 40 Languages Grid */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {filteredLanguages.map((lang) => {
                  const isSelected = language === lang.code;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as LanguageCode);
                        setOpen(false);
                      }}
                      className={`p-3 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                        isSelected
                          ? 'border-theme-accent bg-theme-accent/20 text-theme-text-primary shadow-glow-sm ring-1 ring-theme-accent'
                          : 'border-theme-border/60 hover:border-theme-border bg-theme-surface/40 hover:bg-theme-surface'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl shrink-0">{lang.flag}</span>
                        <div>
                          <div className="font-bold text-xs sm:text-sm text-theme-text-primary leading-tight">
                            {lang.nativeName}
                          </div>
                          <div className="text-[11px] text-theme-text-muted mt-0.5 flex items-center gap-1.5">
                            <span>{lang.name}</span>
                            {lang.dir === 'rtl' && (
                              <span className="px-1 py-0.2 rounded bg-amber-500/20 text-amber-400 text-[9px] font-black uppercase">
                                RTL
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-theme-accent shrink-0 ml-2" />}
                    </button>
                  );
                })}

                {filteredLanguages.length === 0 && (
                  <div className="col-span-full py-8 text-center text-xs text-theme-text-muted">
                    No language matching "{search}".
                  </div>
                )}
              </div>

              {/* Footer Indicator */}
              <div className="p-3.5 border-t border-theme-border/40 bg-theme-surface/80 flex items-center justify-between text-xs text-theme-text-muted">
                <span>Active Language: <strong className="text-theme-text-primary">{currentLanguageOption.name} ({currentLanguageOption.nativeName})</strong></span>
                <span className="text-[11px]">{LANGUAGES.length} Worldwide Dialects Loaded</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
