import React from 'react';
import { motion } from 'framer-motion';

export const WeatherAnimation: React.FC<{
  condition?: string;
  className?: string;
}> = ({ condition = 'Clear', className = 'w-16 h-16' }) => {
  const cond = condition.toLowerCase();

  if (cond.includes('rain') || cond.includes('drizzle')) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 64 64" className="w-full h-full text-sky-400">
          <motion.path
            d="M20 34 C16 34 13 31 13 27 C13 23 16 20 20 20 C21 16 25 13 30 13 C36 13 41 17 42 22 C46 22 49 25 49 29 C49 33 46 36 42 36 Z"
            fill="currentColor"
            opacity="0.9"
            animate={{ y: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          />
          <motion.line
            x1="22" y1="40" x2="19" y2="48"
            stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round"
            animate={{ y: [0, 6, 0], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, delay: 0.1 }}
          />
          <motion.line
            x1="32" y1="40" x2="29" y2="48"
            stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round"
            animate={{ y: [0, 6, 0], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, delay: 0.3 }}
          />
          <motion.line
            x1="42" y1="40" x2="39" y2="48"
            stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round"
            animate={{ y: [0, 6, 0], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, delay: 0.5 }}
          />
        </svg>
      </div>
    );
  }

  if (cond.includes('cloud')) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <motion.circle
            cx="24" cy="24" r="10"
            fill="#f59e0b"
            animate={{ scale: [1, 1.06, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          />
          <motion.path
            d="M22 42 C17 42 13 38 13 33 C13 28 17 25 22 25 C23 20 28 17 34 17 C41 17 47 21 48 27 C52 27 55 30 55 35 C55 40 51 44 46 44 Z"
            fill="#94a3b8"
            opacity="0.85"
            animate={{ x: [0, 2, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
          />
        </svg>
      </div>
    );
  }

  if (cond.includes('snow')) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 64 64" className="w-full h-full text-indigo-200">
          <motion.path
            d="M20 34 C16 34 13 31 13 27 C13 23 16 20 20 20 C21 16 25 13 30 13 C36 13 41 17 42 22 C46 22 49 25 49 29 C49 33 46 36 42 36 Z"
            fill="currentColor"
            opacity="0.9"
          />
          <motion.circle
            cx="24" cy="44" r="2" fill="#e0e7ff"
            animate={{ y: [0, 5, 0], opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.1 }}
          />
          <motion.circle
            cx="34" cy="46" r="2" fill="#e0e7ff"
            animate={{ y: [0, 5, 0], opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}
          />
          <motion.circle
            cx="44" cy="44" r="2" fill="#e0e7ff"
            animate={{ y: [0, 5, 0], opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.7 }}
          />
        </svg>
      </div>
    );
  }

  // Default: Sunny / Clear
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <motion.svg
        viewBox="0 0 64 64"
        className="w-full h-full text-amber-400"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
      >
        <circle cx="32" cy="32" r="14" fill="#fbbf24" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <line
            key={deg}
            x1="32" y1="8" x2="32" y2="13"
            stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"
            transform={`rotate(${deg} 32 32)`}
          />
        ))}
      </motion.svg>
    </div>
  );
};

export const AIThinkingAnimation: React.FC<{ className?: string }> = ({
  className = 'w-6 h-6',
}) => {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <motion.span
        className="w-2 h-2 rounded-full bg-theme-accent"
        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1, delay: 0 }}
      />
      <motion.span
        className="w-2 h-2 rounded-full bg-theme-accent-secondary"
        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
      />
      <motion.span
        className="w-2 h-2 rounded-full bg-theme-accent"
        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
      />
    </div>
  );
};

export const ItineraryGeneratingAnimation: React.FC<{ className?: string }> = ({
  className = 'w-24 h-24',
}) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-theme-accent/30 to-theme-accent-secondary/30 blur-xl"
        animate={{ scale: [0.9, 1.2, 0.9], opacity: [0.4, 0.8, 0.4] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
      />
      <motion.svg
        viewBox="0 0 64 64"
        className="w-16 h-16 text-theme-accent"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
      >
        <circle
          cx="32" cy="32" r="26"
          fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 6"
          opacity="0.6"
        />
      </motion.svg>
      <motion.div
        className="absolute w-7 h-7 rounded-xl bg-gradient-to-tr from-theme-accent to-theme-accent-secondary shadow-glow flex items-center justify-center text-white text-xs font-black"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
      >
        AI
      </motion.div>
    </div>
  );
};
