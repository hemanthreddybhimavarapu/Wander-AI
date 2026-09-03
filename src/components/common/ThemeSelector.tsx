import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, ChevronDown, Check } from 'lucide-react';
import { useTheme, THEMES } from '../../context/ThemeContext';

export const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = THEMES.find((t) => t.id === theme) || THEMES[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-theme-surface/80 hover:bg-theme-surface border border-theme-border text-xs font-semibold text-theme-text-primary transition-all cursor-pointer shadow-glass"
        aria-label="Select Theme"
      >
        <div className="flex -space-x-1">
          <span
            className="w-2.5 h-2.5 rounded-full border border-black/40"
            style={{ backgroundColor: current.colors[0] }}
          />
          <span
            className="w-2.5 h-2.5 rounded-full border border-black/40"
            style={{ backgroundColor: current.colors[1] }}
          />
        </div>
        <span className="hidden sm:inline capitalize">{current.name}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-56 rounded-2xl bg-theme-surface/95 backdrop-blur-2xl border border-theme-border shadow-glass p-2 z-50 space-y-1"
          >
            {THEMES.map((th) => {
              const isSelected = theme === th.id;
              return (
                <button
                  key={th.id}
                  onClick={() => {
                    setTheme(th.id);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-medium transition-all text-left cursor-pointer ${
                    isSelected
                      ? 'bg-theme-accent text-white shadow-glow-sm'
                      : 'text-theme-text-secondary hover:text-theme-text-primary hover:bg-theme-surface-hover'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex -space-x-1">
                      <span
                        className="w-3 h-3 rounded-full border border-black/30"
                        style={{ backgroundColor: th.colors[0] }}
                      />
                      <span
                        className="w-3 h-3 rounded-full border border-black/30"
                        style={{ backgroundColor: th.colors[1] }}
                      />
                      <span
                        className="w-3 h-3 rounded-full border border-black/30"
                        style={{ backgroundColor: th.colors[2] }}
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{th.name}</div>
                      <div className={`text-[10px] ${isSelected ? 'text-white/80' : 'text-theme-text-muted'}`}>
                        {th.description}
                      </div>
                    </div>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-white shrink-0 ml-1" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
