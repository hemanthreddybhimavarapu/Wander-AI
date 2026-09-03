import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Compass, Sparkles } from 'lucide-react';
import { FamousPlace } from '../../data/types';

export const FamousPlacesStory: React.FC<{ places: FamousPlace[] }> = ({ places }) => {
  return (
    <div className="space-y-16 sm:space-y-24">
      {places.map((place, idx) => {
        const isEven = idx % 2 === 1;
        const numberLabel = String(idx + 1).padStart(2, '0');

        return (
          <motion.div
            key={place.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center ${
              isEven ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className="relative rounded-3xl overflow-hidden aspect-[16/10] bg-slate-900 border border-theme-border shadow-glass group">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-black bg-black/60 backdrop-blur-md text-white border border-white/20 shadow-sm">
                    {numberLabel}
                  </span>
                </div>
              </div>
            </div>

            <div className={`lg:col-span-5 space-y-4 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-theme-accent">
                <Compass className="w-3.5 h-3.5" />
                <span>Must-Experience Landmark</span>
              </div>

              <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-theme-text-primary tracking-tight">
                {place.name}
              </h3>

              <p className="text-xs sm:text-sm text-theme-text-secondary leading-relaxed">
                {place.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs">
                <div className="flex items-center gap-1.5 text-theme-text-muted">
                  <Clock className="w-4 h-4 text-theme-accent" />
                  <span>Duration: <strong>{place.recommendedDuration}</strong></span>
                </div>
              </div>

              {place.curatorTip && (
                <div className="p-3.5 rounded-2xl bg-theme-surface/70 border border-theme-border/80 text-xs text-theme-text-secondary flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-theme-text-primary">Curator's Insider Tip: </span>
                    {place.curatorTip}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
