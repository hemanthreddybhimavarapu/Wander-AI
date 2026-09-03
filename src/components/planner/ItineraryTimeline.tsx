import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  Circle,
  Share2,
  Bookmark,
  ChevronDown,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { GeneratedItinerary, Activity } from '../../services/geminiService';
import { useToast } from '../../context/ToastContext';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../common/Button';

export const ItineraryTimeline: React.FC<{
  itinerary: GeneratedItinerary;
  onRegenerate: () => void;
}> = ({ itinerary, onRegenerate }) => {
  const { t } = useLanguage();
  const { showToast } = useToast();

  const [expandedDays, setExpandedDays] = useState<Record<number, boolean>>({ 1: true });
  const [completedActivities, setCompletedActivities] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      confetti({
        particleCount: 55,
        spread: 60,
        origin: { y: 0.7 },
      });
    } catch {
      // ignore
    }
  }, []);

  const toggleDay = (dayNum: number) => {
    setExpandedDays((prev) => ({ ...prev, [dayNum]: !prev[dayNum] }));
  };

  const toggleActivity = (key: string) => {
    setCompletedActivities((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleShare = async () => {
    const text = `WanderAI Bespoke Itinerary for ${itinerary.destination}: ${itinerary.totalDays} Days of ${itinerary.travelStyle} travel.`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `WanderAI — ${itinerary.destination} Itinerary`,
          text,
          url: window.location.href,
        });
        showToast(t('toast.saved'), 'success');
        return;
      } catch {
        // Fallback
      }
    }

    try {
      await navigator.clipboard.writeText(`${text}\n${window.location.href}`);
      showToast(t('toast.copied'), 'success');
    } catch {
      showToast(t('toast.copied'), 'info');
    }
  };

  const handleSave = () => {
    try {
      const savedKey = `wanderai_saved_itinerary_${Date.now()}`;
      localStorage.setItem(savedKey, JSON.stringify(itinerary));
      showToast(t('toast.saved'), 'success');
    } catch {
      showToast('Itinerary stored locally.', 'info');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {/* Header Summary Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-theme-surface/85 backdrop-blur-2xl border border-theme-border shadow-glow flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-accent/20 border border-theme-accent/40 text-theme-accent text-xs font-semibold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Verified Expedition</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-theme-text-primary">
            {itinerary.destination} • {itinerary.totalDays} Days
          </h2>
          <p className="text-xs sm:text-sm text-theme-text-secondary max-w-2xl leading-relaxed">
            {itinerary.summary}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <Button variant="secondary" size="sm" icon={<Share2 className="w-4 h-4" />} onClick={handleShare}>
            {t('planner.sharePlan')}
          </Button>
          <Button variant="secondary" size="sm" icon={<Bookmark className="w-4 h-4" />} onClick={handleSave}>
            {t('planner.savePlan')}
          </Button>
          <Button variant="primary" size="sm" icon={<RotateCcw className="w-4 h-4" />} onClick={onRegenerate}>
            {t('planner.regenerate')}
          </Button>
        </div>
      </div>

      {/* Day by Day Accordions */}
      <div className="space-y-4">
        {itinerary.days.map((dayItem) => {
          const isExpanded = !!expandedDays[dayItem.day];

          return (
            <div
              key={dayItem.day}
              className="rounded-3xl bg-theme-surface/75 backdrop-blur-xl border border-theme-border overflow-hidden transition-colors"
            >
              {/* Day Header Trigger */}
              <button
                onClick={() => toggleDay(dayItem.day)}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-theme-surface-hover/50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-theme-accent to-theme-accent-secondary flex flex-col items-center justify-center text-white font-display font-black shadow-glow-sm">
                    <span className="text-[10px] uppercase tracking-wider font-sans opacity-80">Day</span>
                    <span className="text-lg leading-none">{dayItem.day}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-theme-text-primary">
                      {dayItem.title}
                    </h3>
                    <p className="text-xs text-theme-text-muted">{dayItem.theme}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs text-theme-text-muted hidden sm:inline">
                    {dayItem.activities.length} activities
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-theme-text-secondary transition-transform duration-300 ${
                      isExpanded ? 'transform rotate-180 text-theme-accent' : ''
                    }`}
                  />
                </div>
              </button>

              {/* Activities Timeline */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 sm:px-8 pb-6 pt-2 border-t border-theme-border/40 space-y-4"
                  >
                    <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-theme-border">
                      {dayItem.activities.map((activity, actIdx) => {
                        const actKey = `${dayItem.day}_${actIdx}`;
                        const isDone = !!completedActivities[actKey];

                        return (
                          <div key={actIdx} className="relative group">
                            <button
                              onClick={() => toggleActivity(actKey)}
                              className="absolute -left-6 sm:-left-8 top-1 w-5 h-5 rounded-full bg-theme-surface border border-theme-border flex items-center justify-center text-theme-text-muted hover:text-theme-accent hover:border-theme-accent transition-colors cursor-pointer"
                              aria-label="Toggle activity completed"
                            >
                              {isDone ? (
                                <CheckCircle2 className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
                              ) : (
                                <Circle className="w-3.5 h-3.5" />
                              )}
                            </button>

                            <div
                              className={`p-4 rounded-2xl border transition-all ${
                                isDone
                                  ? 'bg-theme-surface/30 border-theme-border/40 opacity-60'
                                  : 'bg-theme-surface/60 border-theme-border/80 hover:border-theme-border'
                              }`}
                            >
                              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                                <div className="flex items-center gap-2">
                                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-theme-accent">
                                    <Clock className="w-3 h-3" />
                                    {activity.time}
                                  </span>
                                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-theme-surface border border-theme-border text-theme-text-muted">
                                    {activity.category}
                                  </span>
                                </div>

                                {activity.location && (
                                  <span className="inline-flex items-center gap-1 text-[11px] text-theme-text-muted">
                                    <MapPin className="w-3 h-3 text-theme-accent-secondary" />
                                    {activity.location}
                                  </span>
                                )}
                              </div>

                              <h4
                                className={`text-sm font-bold text-theme-text-primary ${
                                  isDone ? 'line-through text-theme-text-muted' : ''
                                }`}
                              >
                                {activity.title}
                              </h4>

                              <p className="text-xs text-theme-text-secondary mt-1 leading-relaxed">
                                {activity.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
