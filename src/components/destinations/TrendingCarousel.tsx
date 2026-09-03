import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Destination } from '../../data/types';
import { DestinationCard } from './DestinationCard';

export const TrendingCarousel: React.FC<{ destinations: Destination[] }> = ({ destinations }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 360;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative group">
      <button
        onClick={() => scroll('left')}
        className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-theme-surface/90 hover:bg-theme-surface backdrop-blur-xl border border-theme-border text-theme-text-primary shadow-glass flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 cursor-pointer"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={() => scroll('right')}
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-theme-surface/90 hover:bg-theme-surface backdrop-blur-xl border border-theme-border text-theme-text-primary shadow-glass flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 cursor-pointer"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="w-[290px] sm:w-[340px] shrink-0 snap-start"
          >
            <DestinationCard destination={destination} />
          </div>
        ))}
      </div>
    </div>
  );
};
