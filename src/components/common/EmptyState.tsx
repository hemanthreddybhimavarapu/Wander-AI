import React from 'react';
import { Compass, Sparkles } from 'lucide-react';
import { Button } from './Button';

export const EmptyState: React.FC<{
  title: string;
  message: string;
  actionText?: string;
  onAction?: () => void;
  icon?: React.ReactNode;
}> = ({ title, message, actionText, onAction, icon }) => {
  return (
    <div className="p-10 sm:p-16 rounded-3xl bg-theme-surface/60 backdrop-blur-xl border border-theme-border text-center flex flex-col items-center justify-center space-y-4 max-w-md mx-auto my-12">
      <div className="w-16 h-16 rounded-3xl bg-theme-accent/15 border border-theme-accent/30 flex items-center justify-center text-theme-accent shadow-glow-sm">
        {icon || <Compass className="w-8 h-8 animate-[spin_20s_linear_infinite]" />}
      </div>
      <div className="space-y-1.5">
        <h3 className="font-display text-lg font-bold text-theme-text-primary">{title}</h3>
        <p className="text-xs sm:text-sm text-theme-text-secondary leading-relaxed">{message}</p>
      </div>
      {actionText && onAction && (
        <Button variant="primary" size="sm" onClick={onAction} icon={<Sparkles className="w-3.5 h-3.5" />}>
          {actionText}
        </Button>
      )}
    </div>
  );
};
