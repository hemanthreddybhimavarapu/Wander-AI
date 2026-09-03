import React from 'react';
import { motion } from 'framer-motion';

// 1. Location Detection Animation
export const LocationDetectionAnimation: React.FC<{ className?: string }> = ({
  className = 'w-12 h-12',
}) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <motion.span
        className="absolute inset-0 rounded-full bg-theme-accent/30"
        animate={{ scale: [1, 2.2], opacity: [0.8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeOut' }}
      />
      <motion.span
        className="absolute inset-1 rounded-full bg-theme-accent-secondary/40"
        animate={{ scale: [1, 1.8], opacity: [0.7, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, delay: 0.4, ease: 'easeOut' }}
      />
      <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-theme-accent to-theme-accent-secondary flex items-center justify-center text-white shadow-glow">
        <span className="w-2 h-2 rounded-full bg-white animate-ping" />
      </div>
    </div>
  );
};

// 2. Weather Conditions Animation
export const WeatherAnimation: React.FC<{
  condition?: string;
  className?: string;
}> = ({ condition = 'Clear', className = 'w-20 h-20' }) => {
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
            transition={{ repeat: Infinity, duration: 1.1, delay: 0.1 }}
          />
          <motion.line
            x1="32" y1="40" x2="29" y2="48"
            stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round"
            animate={{ y: [0, 6, 0], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.1, delay: 0.35 }}
          />
          <motion.line
            x1="42" y1="40" x2="39" y2="48"
            stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round"
            animate={{ y: [0, 6, 0], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.1, delay: 0.6 }}
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
            animate={{ scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
          />
          <motion.path
            d="M22 42 C17 42 13 38 13 33 C13 28 17 25 22 25 C23 20 28 17 34 17 C41 17 47 21 48 27 C52 27 55 30 55 35 C55 40 51 44 46 44 Z"
            fill="#94a3b8"
            opacity="0.85"
            animate={{ x: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
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
            cx="24" cy="44" r="2.5" fill="#e0e7ff"
            animate={{ y: [0, 6, 0], opacity: [0.2, 1, 0.2] }}
            transition={{ repeat: Infinity, duration: 1.8, delay: 0.1 }}
          />
          <motion.circle
            cx="34" cy="46" r="2.5" fill="#e0e7ff"
            animate={{ y: [0, 6, 0], opacity: [0.2, 1, 0.2] }}
            transition={{ repeat: Infinity, duration: 1.8, delay: 0.4 }}
          />
          <motion.circle
            cx="44" cy="44" r="2.5" fill="#e0e7ff"
            animate={{ y: [0, 6, 0], opacity: [0.2, 1, 0.2] }}
            transition={{ repeat: Infinity, duration: 1.8, delay: 0.7 }}
          />
        </svg>
      </div>
    );
  }

  // Clear / Sunny
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <motion.svg
        viewBox="0 0 64 64"
        className="w-full h-full text-amber-400"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
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

// 3. AI Thinking Animation
export const AIThinkingAnimation: React.FC<{ className?: string }> = ({
  className = 'w-7 h-7',
}) => {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <motion.span
        className="w-2.5 h-2.5 rounded-full bg-theme-accent"
        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 0.9, delay: 0 }}
      />
      <motion.span
        className="w-2.5 h-2.5 rounded-full bg-theme-accent-secondary"
        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 0.9, delay: 0.2 }}
      />
      <motion.span
        className="w-2.5 h-2.5 rounded-full bg-theme-accent"
        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 0.9, delay: 0.4 }}
      />
    </div>
  );
};

// 4. AI Loading Animation
export const AILoadingAnimation: React.FC<{ className?: string }> = ({
  className = 'w-16 h-16',
}) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-theme-accent/30 border-t-theme-accent"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
      />
      <motion.div
        className="absolute inset-2 rounded-full border-2 border-theme-accent-secondary/30 border-b-theme-accent-secondary"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
      />
      <div className="w-3 h-3 rounded-full bg-white shadow-glow" />
    </div>
  );
};

// 5. Trip Planning Animation
export const TripPlanningAnimation: React.FC<{ className?: string }> = ({
  className = 'w-20 h-20',
}) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-theme-accent/20 to-theme-accent-secondary/20 blur-lg"
        animate={{ scale: [0.95, 1.1, 0.95] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      />
      <svg viewBox="0 0 64 64" className="w-16 h-16 text-theme-accent">
        <motion.polygon
          points="32,8 56,56 8,56"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          style={{ originX: '32px', originY: '40px' }}
        />
        <circle cx="32" cy="40" r="4" fill="currentColor" />
      </svg>
    </div>
  );
};

// 6. Itinerary Generating Animation
export const ItineraryGeneratingAnimation: React.FC<{ className?: string }> = ({
  className = 'w-24 h-24',
}) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-theme-accent/35 to-theme-accent-secondary/35 blur-xl"
        animate={{ scale: [0.9, 1.25, 0.9], opacity: [0.4, 0.85, 0.4] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
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
        className="absolute w-8 h-8 rounded-xl bg-gradient-to-tr from-theme-accent to-theme-accent-secondary shadow-glow flex items-center justify-center text-white text-xs font-black"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
      >
        AI
      </motion.div>
    </div>
  );
};

// 7. Success Animation
export const SuccessAnimation: React.FC<{ className?: string }> = ({
  className = 'w-16 h-16',
}) => {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', damping: 15 }}
      className={`relative flex items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 p-3 border border-emerald-500/40 shadow-glow ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-8 h-8">
        <motion.path
          d="M5 13l4 4L19 7"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </svg>
    </motion.div>
  );
};

// 8. Empty State Animation
export const EmptyStateAnimation: React.FC<{ className?: string }> = ({
  className = 'w-20 h-20',
}) => {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      className={`flex items-center justify-center text-theme-accent ${className}`}
    >
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <path d="M12 40 L52 16 L32 52 L26 38 Z" fill="currentColor" fillOpacity="0.15" />
        <path d="M26 38 L52 16" />
      </svg>
    </motion.div>
  );
};

// 9. Loading State Animation
export const LoadingStateAnimation: React.FC<{ className?: string }> = ({
  className = 'w-12 h-12',
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className="w-8 h-8 rounded-full border-3 border-theme-accent border-t-transparent animate-spin"
      />
    </div>
  );
};

// 10. Error State Animation
export const ErrorStateAnimation: React.FC<{ className?: string }> = ({
  className = 'w-16 h-16',
}) => {
  return (
    <motion.div
      animate={{ rotate: [-2, 2, -2] }}
      transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      className={`rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-400 p-4 flex items-center justify-center ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <circle cx="12" cy="16" r="0.5" fill="currentColor" />
      </svg>
    </motion.div>
  );
};

// 11. Destination Discovery Animation
export const DestinationDiscoveryAnimation: React.FC<{ className?: string }> = ({
  className = 'w-20 h-20',
}) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <motion.svg
        viewBox="0 0 64 64"
        className="w-full h-full text-theme-accent"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
      >
        <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
        <ellipse cx="32" cy="32" rx="24" ry="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="32" cy="32" rx="12" ry="24" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </motion.svg>
      <div className="absolute w-3 h-3 rounded-full bg-theme-accent-secondary shadow-glow animate-ping" />
    </div>
  );
};
