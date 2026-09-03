import React, { createContext, useContext, useEffect, useState } from 'react';

interface FavoritesContextType {
  favorites: string[];
  recentlyViewed: string[];
  toggleFavorite: (id: string) => boolean; // returns true if added, false if removed
  isFavorite: (id: string) => boolean;
  addRecentlyViewed: (id: string) => void;
  clearFavorites: () => void;
  clearRecentlyViewed: () => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('wanderai_favorites');
      return saved ? JSON.parse(saved) : ['paris', 'tokyo'];
    } catch {
      return ['paris', 'tokyo'];
    }
  });

  const [recentlyViewed, setRecentlyViewed] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('wanderai_recent');
      return saved ? JSON.parse(saved) : ['paris', 'bali', 'swiss-alps'];
    } catch {
      return ['paris', 'bali', 'swiss-alps'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('wanderai_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem('wanderai_recent', JSON.stringify(recentlyViewed));
    } catch (e) {
      console.error(e);
    }
  }, [recentlyViewed]);

  const toggleFavorite = (id: string): boolean => {
    let added = false;
    setFavorites((prev) => {
      if (prev.includes(id)) {
        added = false;
        return prev.filter((item) => item !== id);
      } else {
        added = true;
        return [...prev, id];
      }
    });
    return added;
  };

  const isFavorite = (id: string): boolean => {
    return favorites.includes(id);
  };

  const addRecentlyViewed = (id: string) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((item) => item !== id);
      return [id, ...filtered].slice(0, 8);
    });
  };

  const clearFavorites = () => setFavorites([]);
  const clearRecentlyViewed = () => setRecentlyViewed([]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        recentlyViewed,
        toggleFavorite,
        isFavorite,
        addRecentlyViewed,
        clearFavorites,
        clearRecentlyViewed,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error('useFavorites must be used within FavoritesProvider');
  return context;
};
