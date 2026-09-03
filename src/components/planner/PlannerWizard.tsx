import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Calendar,
  Users,
  Wallet,
  Compass,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { TRAVEL_STYLES, BUDGET_OPTIONS, INTEREST_OPTIONS } from '../../data/travelStyles';
import { DESTINATIONS } from '../../data/destinationsData';
import { useLanguage } from '../../context/LanguageContext';
import { PlannerParams } from '../../services/geminiService';
import { Button } from '../common/Button';

export const PlannerWizard: React.FC<{
  onGenerate: (params: PlannerParams) => void;
  isGenerating?: boolean;
}> = ({ onGenerate, isGenerating = false }) => {
  const { language, t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);

  const [destination, setDestination] = useState('Paris');
  const [customDestination, setCustomDestination] = useState('');
  const [days, setDays] = useState(3);
  const [travelers, setTravelers] = useState('Couple');
  const [budget, setBudget] = useState('Premium');
  const [style, setStyle] = useState('Culture');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    'Ancient History',
    'Street Food & Fine Dining',
    'Architecture & Design',
  ]);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const finalDestination = customDestination.trim() || destination;

  const handleNext = () => {
    if (currentStep < 7) {
      setCurrentStep((prev) => prev + 1);
    } else {
      onGenerate({
        destination: finalDestination,
        days,
        travelers,
        budget,
        style,
        interests: selectedInterests,
        language,
      });
    }
  };

  const steps = [
    { num: 1, label: t('planner.step1') },
    { num: 2, label: t('planner.step2') },
    { num: 3, label: t('planner.step3') },
    { num: 4, label: t('planner.step4') },
    { num: 5, label: t('planner.step5') },
    { num: 6, label: t('planner.step6') },
    { num: 7, label: t('planner.step7') },
  ];

  return (
    <div className="p-6 sm:p-10 rounded-3xl bg-theme-surface/85 backdrop-blur-2xl border border-theme-border shadow-glass space-y-8">
      {/* Progress Indicator */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-theme-text-muted">
          <span>
            Step {currentStep} of 7: <strong className="text-theme-text-primary">{steps[currentStep - 1].label}</strong>
          </span>
          <span>{Math.round((currentStep / 7) * 100)}% Complete</span>
        </div>
        <div className="h-2 w-full bg-theme-surface rounded-full overflow-hidden border border-theme-border/50">
          <motion.div
            className="h-full bg-gradient-to-r from-theme-accent to-theme-accent-secondary rounded-full"
            initial={{ width: '14%' }}
            animate={{ width: `${(currentStep / 7) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Step Contents */}
      <div className="min-h-[260px] flex flex-col justify-center">
        {/* Step 1: Destination */}
        {currentStep === 1 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <label className="block text-sm font-semibold text-theme-text-primary">
              {t('planner.destinationLabel')}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {DESTINATIONS.slice(0, 8).map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => {
                    setDestination(d.name);
                    setCustomDestination('');
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                    destination === d.name && !customDestination
                      ? 'border-theme-accent bg-theme-accent/15 text-theme-text-primary shadow-glow-sm'
                      : 'border-theme-border/70 hover:border-theme-border bg-theme-surface/60 text-theme-text-secondary'
                  }`}
                >
                  <div className="text-xs font-bold">{d.name}</div>
                  <div className="text-[10px] text-theme-text-muted">{d.country}</div>
                </button>
              ))}
            </div>
            <div className="pt-2">
              <span className="text-xs text-theme-text-muted block mb-1">Or enter any destination worldwide:</span>
              <input
                type="text"
                value={customDestination}
                onChange={(e) => setCustomDestination(e.target.value)}
                placeholder={t('planner.destinationPlaceholder')}
                className="w-full px-4 py-2.5 rounded-xl bg-theme-surface border border-theme-border text-sm text-theme-text-primary placeholder:text-theme-text-muted focus:outline-none focus:border-theme-accent"
              />
            </div>
          </motion.div>
        )}

        {/* Step 2: Duration */}
        {currentStep === 2 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6 text-center">
            <label className="block text-sm font-semibold text-theme-text-primary">
              {t('planner.daysLabel')}
            </label>
            <div className="font-display text-6xl font-black text-gradient">{days}</div>
            <span className="text-xs uppercase tracking-widest text-theme-text-muted">{t('planner.daysUnit')}</span>
            <input
              type="range"
              min={1}
              max={10}
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="w-full max-w-md accent-theme-accent cursor-pointer"
            />
            <div className="flex justify-between max-w-md mx-auto text-xs text-theme-text-muted">
              <span>1 Day Quick Trip</span>
              <span>5 Days Classic</span>
              <span>10 Days Odyssey</span>
            </div>
          </motion.div>
        )}

        {/* Step 3: Travelers */}
        {currentStep === 3 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <label className="block text-sm font-semibold text-theme-text-primary">
              {t('planner.travelersLabel')}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 'Solo', label: 'Solo Wanderer', desc: 'Personal introspection' },
                { id: 'Couple', label: 'Couple / Duo', desc: 'Romantic escape' },
                { id: 'Family', label: 'Family with Kids', desc: 'Safe & engaging' },
                { id: 'Friends', label: 'Group of Friends', desc: 'High energy & fun' },
              ].map((tOption) => (
                <button
                  key={tOption.id}
                  type="button"
                  onClick={() => setTravelers(tOption.id)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    travelers === tOption.id
                      ? 'border-theme-accent bg-theme-accent/15 text-theme-text-primary shadow-glow-sm'
                      : 'border-theme-border/70 hover:border-theme-border bg-theme-surface/60 text-theme-text-secondary'
                  }`}
                >
                  <div className="text-sm font-bold">{tOption.label}</div>
                  <div className="text-xs text-theme-text-muted mt-1">{tOption.desc}</div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 4: Budget */}
        {currentStep === 4 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <label className="block text-sm font-semibold text-theme-text-primary">
              {t('planner.budgetLabel')}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {BUDGET_OPTIONS.map((b) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setBudget(b.id)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    budget === b.id
                      ? 'border-theme-accent bg-theme-accent/15 text-theme-text-primary shadow-glow-sm'
                      : 'border-theme-border/70 hover:border-theme-border bg-theme-surface/60 text-theme-text-secondary'
                  }`}
                >
                  <div className="text-sm font-bold">{b.label}</div>
                  <div className="text-xs text-theme-accent font-semibold mt-0.5">{b.range}</div>
                  <div className="text-[11px] text-theme-text-muted mt-1 leading-relaxed">{b.desc}</div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 5: Travel Style */}
        {currentStep === 5 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <label className="block text-sm font-semibold text-theme-text-primary">
              {t('planner.styleLabel')}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {TRAVEL_STYLES.map((st) => (
                <button
                  key={st.id}
                  type="button"
                  onClick={() => setStyle(st.id)}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                    style === st.id
                      ? 'border-theme-accent bg-theme-accent/15 text-theme-text-primary shadow-glow-sm'
                      : 'border-theme-border/70 hover:border-theme-border bg-theme-surface/60 text-theme-text-secondary'
                  }`}
                >
                  <div className="text-xs font-bold">{st.name}</div>
                  <div className="text-[10px] text-theme-text-muted mt-0.5 line-clamp-2">{st.description}</div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 6: Interests */}
        {currentStep === 6 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <label className="block text-sm font-semibold text-theme-text-primary">
              {t('planner.interestsLabel')}
            </label>
            <div className="flex flex-wrap gap-2">
              {INTEREST_OPTIONS.map((interest) => {
                const isSelected = selectedInterests.includes(interest);
                return (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-theme-accent to-theme-accent-secondary text-white shadow-glow-sm'
                        : 'bg-theme-surface hover:bg-theme-surface-hover border border-theme-border text-theme-text-secondary'
                    }`}
                  >
                    {interest}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Step 7: Review & Generate */}
        {currentStep === 7 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <h4 className="text-sm font-semibold text-theme-text-primary">
              Review Your Expedition Parameters
            </h4>
            <div className="p-4 rounded-2xl bg-theme-surface/60 border border-theme-border grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <span className="text-theme-text-muted block">Destination</span>
                <strong className="text-theme-text-primary text-sm">{finalDestination}</strong>
              </div>
              <div>
                <span className="text-theme-text-muted block">Duration</span>
                <strong className="text-theme-text-primary text-sm">{days} Days</strong>
              </div>
              <div>
                <span className="text-theme-text-muted block">Travelers</span>
                <strong className="text-theme-text-primary text-sm">{travelers}</strong>
              </div>
              <div>
                <span className="text-theme-text-muted block">Budget</span>
                <strong className="text-theme-text-primary text-sm">{budget}</strong>
              </div>
              <div>
                <span className="text-theme-text-muted block">Style</span>
                <strong className="text-theme-text-primary text-sm">{style}</strong>
              </div>
              <div>
                <span className="text-theme-text-muted block">Interests</span>
                <span className="text-theme-text-primary font-medium">{selectedInterests.length} selected</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Wizard Footer Navigation Controls */}
      <div className="flex items-center justify-between pt-4 border-t border-theme-border/40">
        <Button
          variant="secondary"
          size="md"
          disabled={currentStep === 1 || isGenerating}
          onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
          icon={<ArrowLeft className="w-4 h-4" />}
        >
          Previous
        </Button>

        <Button
          variant="primary"
          size="md"
          loading={isGenerating}
          onClick={handleNext}
          icon={currentStep === 7 ? <Sparkles className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
        >
          {currentStep === 7 ? t('planner.generateBtn') : 'Continue'}
        </Button>
      </div>
    </div>
  );
};
