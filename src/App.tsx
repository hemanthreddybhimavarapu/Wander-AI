import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { ToastProvider } from './context/ToastContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { OfflineBanner } from './components/layout/OfflineBanner';
import { AIChatDrawer, AIChatFloatingButton } from './components/ai/AIChatDrawer';
import { HomePage } from './routes/HomePage';
import { DestinationsPage } from './routes/DestinationsPage';
import { DestinationDetailPage } from './routes/DestinationDetailPage';
import { PlannerPage } from './routes/PlannerPage';
import { WeatherPage } from './routes/WeatherPage';
import { FavoritesPage } from './routes/FavoritesPage';
import { SettingsPage } from './routes/SettingsPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function MainLayout() {
  const [globalAiChatOpen, setGlobalAiChatOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-theme-bg text-theme-text-primary selection:bg-theme-accent selection:text-white transition-colors duration-300">
      <ScrollToTop />
      <Navbar />
      <OfflineBanner />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/destination/:id" element={<DestinationDetailPage />} />
          <Route path="/planner" element={<PlannerPage />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <Footer />

      <AIChatFloatingButton onClick={() => setGlobalAiChatOpen(true)} />
      <AIChatDrawer
        isOpen={globalAiChatOpen}
        onClose={() => setGlobalAiChatOpen(false)}
        destinationContext="Global Explorer"
      />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <FavoritesProvider>
          <ToastProvider>
            <BrowserRouter>
              <MainLayout />
            </BrowserRouter>
          </ToastProvider>
        </FavoritesProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
