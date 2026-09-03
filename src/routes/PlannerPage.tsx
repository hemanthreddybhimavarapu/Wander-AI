import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { PlannerWizard } from '../components/planner/PlannerWizard';
import { ItineraryTimeline } from '../components/planner/ItineraryTimeline';
import {
  generateItineraryAI,
  GeneratedItinerary,
  PlannerParams,
} from '../services/geminiService';
import { ItineraryGeneratingAnimation } from '../components/lottie/LottieAnimations';
import { useLanguage } from '../context/LanguageContext';

export const PlannerPage: React.FC = () => {
  const { t } = useLanguage();
  const [isGenerating, setIsGenerating] = useState(false);
  const [itinerary, setItinerary] = useState<GeneratedItinerary | null>(null);
  const [lastParams, setLastParams] = useState<PlannerParams | null>(null);

  const handleGenerate = async (params: PlannerParams) => {
    setLastParams(params);
    setIsGenerating(true);
    window.scrollTo({ top: 120, behavior: 'smooth' });

    try {
      const result = await generateItineraryAI(params);
      setItinerary(result);
    } catch (e) {
      console.error(e);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleRegenerate = () => {
    if (lastParams) {
      handleGenerate(lastParams);
    }
  };

  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-accent/20 border border-theme-accent/40 text-theme-accent text-xs font-semibold uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Gemini AI Architect</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-black text-theme-text-primary tracking-tight">
          {t('planner.title')}
        </h1>
        <p className="text-sm sm:text-base text-theme-text-secondary leading-relaxed">
          {t('planner.subtitle')}
        </p>
      </div>

      {isGenerating && (
        <div className="py-16 text-center space-y-6">
          <ItineraryGeneratingAnimation className="w-28 h-28 mx-auto" />
          <div className="space-y-2">
            <h3 className="font-display text-xl font-bold text-theme-text-primary animate-pulse">
              {t('planner.generating')}
            </h3>
            <p className="text-xs text-theme-text-muted">
              Consulting world-heritage archives, routing coordinates & culinary landmarks...
            </p>
          </div>
        </div>
      )}

      {!isGenerating && (
        <>
          {itinerary ? (
            <ItineraryTimeline itinerary={itinerary} onRegenerate={handleRegenerate} />
          ) : (
            <PlannerWizard onGenerate={handleGenerate} isGenerating={isGenerating} />
          )}
        </>
      )}
    </div>
  );
};
