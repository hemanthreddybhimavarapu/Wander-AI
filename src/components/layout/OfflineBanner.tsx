import React from 'react';
import { WifiOff } from 'lucide-react';
import { useOnlineStatus } from '../../hooks/useOnlineStatus';
import { useLanguage } from '../../context/LanguageContext';

export const OfflineBanner: React.FC = () => {
  const isOnline = useOnlineStatus();
  const { t } = useLanguage();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-amber-500/90 backdrop-blur-md text-slate-950 px-4 py-2 text-center text-xs font-semibold flex items-center justify-center gap-2 shadow-lg">
      <WifiOff className="w-4 h-4 animate-bounce" />
      <span>{t('common.offline')}</span>
    </div>
  );
};
