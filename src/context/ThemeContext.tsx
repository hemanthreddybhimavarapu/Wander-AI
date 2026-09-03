import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeName = 'aurora' | 'ocean' | 'sunset' | 'forest' | 'luxury' | 'light';

export interface ThemeMeta {
  id: ThemeName;
  name: string;
  colors: [string, string, string];
  description: string;
}

export const THEMES: ThemeMeta[] = [
  { id: 'aurora', name: 'Aurora', colors: ['#8B5CF6', '#06B6D4', '#090A10'], description: 'Midnight space with violet and electric cyan nebula' },
  { id: 'ocean', name: 'Ocean', colors: ['#0284C7', '#14B8A6', '#060D17'], description: 'Deep nautical blue with turquoise surf highlights' },
  { id: 'sunset', name: 'Sunset', colors: ['#F97316', '#F43F5E', '#120A0F'], description: 'Dark warm espresso with fiery coral and rose twilight' },
  { id: 'forest', name: 'Forest', colors: ['#10B981', '#34D399', '#05100B'], description: 'Deep moss emerald with fresh alpine mint accents' },
  { id: 'luxury', name: 'Luxury', colors: ['#D97706', '#FBBF24', '#0A0A0B'], description: 'Onyx charcoal with champagne gold elegance' },
  { id: 'light', name: 'Editorial Light', colors: ['#6366F1', '#0EA5E9', '#FFFFFF'], description: 'Crisp gallery alabaster with refined slate borders' },
];

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  themes: ThemeMeta[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    const saved = localStorage.getItem('wanderai_theme') as ThemeName;
    return (saved && THEMES.some(t => t.id === saved)) ? saved : 'aurora';
  });

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
    localStorage.setItem('wanderai_theme', newTheme);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
