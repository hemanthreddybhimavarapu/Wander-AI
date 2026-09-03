# 🧭 WANDERAI — Go Somewhere Worth Remembering

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-1.5_Flash-4285F4?logo=google&logoColor=white)](https://ai.google.dev/)

> **WanderAI** is a premium, production-grade autonomous AI travel discovery engine designed for modern globetrotters. Combining atmospheric meteorological telemetry, Google Gemini 1.5 Flash generative intelligence, 7-language localization, and a 6-theme adaptive design system, WanderAI transforms travel inspiration into bespoke, executable journeys.

---

## 📱 Application Pages & Experience Tour

* 🏠 **Home page (`/`)**: Immersive video hero atmosphere, smart destination search with instant autocomplete, live GPS nearest gateway locator, Curator's Spotlight, and trending horizons carousel.
* 🤖 **AI Planner / generated itinerary (`/planner`)**: 7-step guided expedition architect powered by Google Gemini 1.5 Flash, generating time-slotted daily activities, interactive checkable accordions, and confetti celebration.
* 🌍 **Destinations page (`/destinations` & `/destination/:id`)**: Worldwide destination catalog with hierarchical "Country → City" search (e.g. *India → Delhi*, *France Paris*), dynamic on-the-fly city resolution, and visual landmark storytelling.
* 🌤️ **Weather page (`/weather`)**: Real-time atmospheric radar powered by OpenWeatherMap API with dynamic SVG vector condition animations (sun, rain, clouds, snow) and 5-day projections.
* ⚙️ **Settings / themes (`/settings`)**: 6 adaptive atmospheric design themes (*Aurora, Ocean, Sunset, Forest, Luxury, Light*), 40-language internationalization selector with RTL support, reduced motion accessibility, and vault cache controls.

---



## 🌟 Key Product Features

### 1. 🌌 Autonomous Itinerary Architect (`/planner`)
* **7-Step Guided Wizard**: Tailor your voyage by destination, duration (1–10 days), travel party (Solo, Couple, Family, Friends), budget tier, travel philosophy, and curated interests.
* **Gemini 1.5 Flash AI Engine**: Synthesizes time-slotted daily activities, cultural landmarks, local cuisine, and insider tips.
* **Interactive Day Accordions**: Expand daily schedules, check off completed activities, bookmark plans to your personal vault, or share via native Web Share API with celebratory confetti feedback.

### 2. 🛰️ Real-Time Atmospheric Radar (`/weather`)
* **Live OpenWeather API Integration**: Real-time temperature, "feels like", atmospheric pressure, humidity, visibility, and wind telemetry.
* **Lottie-Style SVG Micro-Animations**: Dynamic vector animations that react to weather conditions (sunny, rainy, cloudy, snowy).
* **5-Day Planetary Projections**: Future meteorological forecasts with instant fallback database support for all 12 global gateways.

### 3. 🌐 Multilingual Localization Engine (7 Languages)
* Instant dynamic language switching across the entire UI with zero page reload:
  * 🇬🇧 **English** (`en`)
  * 🇮🇳 **Telugu** (`te` — తెలుగు)
  * 🇮🇳 **Hindi** (`hi` — हिन्दी)
  * 🇮🇳 **Kannada** (`kn` — ಕನ್ನಡ)
  * 🇮🇳 **Tamil** (`ta` — தமிழ்)
  * 🇪🇸 **Spanish** (`es` — Español)
  * 🇫🇷 **French** (`fr` — Français)

### 4. 🎨 Adaptive 6-Theme Design System
* Switch atmospheric visual themes instantly from the top navbar or Settings page:
  * 🌌 **Aurora** (Deep Indigo & Violet Glow) — *Default*
  * 🌊 **Ocean** (Deep Marine & Cyan Radiance)
  * 🌅 **Sunset** (Dusk Slate & Coral Orange)
  * 🌲 **Forest** (Midnight Pine & Emerald Spark)
  * ✨ **Luxury** (Obsidian Slate & Champagne Gold)
  * ☀️ **Light** (Crisp Alabaster & Royal Iris)
* Hand-crafted CSS custom properties, glassmorphic backdrops (`backdrop-blur-2xl`), and hardware-accelerated animations.

### 5. 🗺️ Curated Planetary Gateways (`/destinations` & `/destination/:id`)
* **12 Comprehensive Destinations**: Paris, Tokyo, Bali, Dubai, London, Rome, New York City, Singapore, Barcelona, Sydney, Swiss Alps, and Kerala.
* **Real-Time Search & Filtering**: Multi-criteria filters by region (Europe, Asia, Americas, Middle East, Oceania) and travel style (Culture, Luxury, Adventure, Food, Beaches, Relaxed).
* **GPS Proximity Triangulation**: Native browser geolocation calculates the closest global gateway using Haversine spherical distance formulas.
* **Immersive Visual Storytelling**: High-resolution gallery, quick facts (currency, language, timezone, ideal season), curator's insider tips, and signature landmark stories.

### 6. 🤖 24/7 AI Concierge Drawer
* Persistent floating concierge trigger accessible from any screen.
* Natural language travel advice with contextual destination awareness.
* Quick-action prompt chips for instant itinerary queries, food recommendations, and crowd avoidance tips.

### 7. 🔒 Personal Vault (`/favorites`) & Offline Readiness
* Local-first persistence using browser `localStorage` for saved destinations, custom itineraries, and recently viewed portals.
* **Offline Detection**: Built-in network status watcher with an automatic offline banner informing users when cached data is active.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework & Core** | React 19, TypeScript 5, Vite 6 (Rolldown engine) |
| **Styling & Design System** | TailwindCSS 3.4, Vanilla CSS Design Tokens, PostCSS, Autoprefixer |
| **Motion & Micro-Interactions** | Framer Motion 12, Canvas Confetti |
| **Icons & Typography** | Lucide React, Google Fonts (*Outfit* & *Inter*) |
| **Routing** | React Router DOM 7 |
| **APIs & AI** | Google Gemini 1.5 Flash REST API, OpenWeatherMap Live API, OpenStreetMap Nominatim |

---

## 🚀 Quick Start & Installation

### Prerequisites
* **Node.js**: v18.0 or higher
* **npm**: v9.0 or higher

### 1. Navigate to Project
```bash
cd "C:\Users\<USERNAME>\Desktop\WanderAI"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables (Optional)
The application includes robust built-in fallbacks for all AI queries, weather telemetry, and destination galleries. To connect live external API keys:
```bash
cp .env.example .env
```
Populate `.env` with your API credentials:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
VITE_OPENWEATHER_API_KEY=your_openweather_api_key_here
VITE_UNSPLASH_ACCESS_KEY=your_unsplash_access_key_here
```

### 4. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173/`.

### 5. Production Build & Verification
```bash
# Type check and build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📂 Project Architecture

```
WanderAI/
├── public/
│   ├── favicon.svg             # Custom WanderAI compass branding
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── ai/                 # AIChatDrawer, Floating Action Button
│   │   ├── common/             # Button, ThemeSelector, LanguageSelector, EmptyState
│   │   ├── destinations/       # DestinationCard, TrendingCarousel, FamousPlacesStory
│   │   ├── hero/               # Hero with video background, autocomplete & GPS
│   │   ├── layout/             # Navbar, Footer, OfflineBanner
│   │   ├── lottie/             # Vector SVG animated micro-components
│   │   ├── planner/            # PlannerWizard (7 steps), ItineraryTimeline
│   │   └── weather/            # WeatherCard (telemetry & 5-day forecast)
│   ├── context/
│   │   ├── FavoritesContext.tsx # Saved sanctuaries & recently viewed
│   │   ├── LanguageContext.tsx  # Multilingual translations (7 languages)
│   │   ├── ThemeContext.tsx     # 6 atmospheric design systems
│   │   └── ToastContext.tsx     # Micro-feedback notification toasts
│   ├── data/
│   │   ├── destinationsData.ts  # Master registry & querying helpers
│   │   ├── destinationsPart1.ts # Paris, Tokyo, Bali, Dubai
│   │   ├── destinationsPart2.ts # London, Rome, NYC, Singapore
│   │   ├── destinationsPart3.ts # Barcelona, Sydney, Swiss Alps, Kerala
│   │   ├── travelStyles.ts      # Styles, budget tiers, and interests
│   │   └── types.ts             # Strict TypeScript interfaces
│   ├── hooks/
│   │   ├── useDebounce.ts       # Input debouncing
│   │   ├── useGeolocation.ts    # Browser GPS & reverse geocoding
│   │   ├── useOnlineStatus.ts   # Window online/offline telemetry
│   │   └── useScrollPosition.ts # Dynamic navbar scroll trigger
│   ├── locales/                # en.json, te.json, hi.json, kn.json, ta.json, es.json, fr.json
│   ├── routes/
│   │   ├── DestinationDetailPage.tsx
│   │   ├── DestinationsPage.tsx
│   │   ├── FavoritesPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── PlannerPage.tsx
│   │   ├── SettingsPage.tsx
│   │   └── WeatherPage.tsx
│   ├── services/
│   │   ├── geminiService.ts     # Google Gemini 1.5 Flash client & fallbacks
│   │   ├── imageService.ts      # Unsplash photo engine & fallbacks
│   │   ├── locationService.ts   # Haversine distance calculator
│   │   └── weatherService.ts    # OpenWeatherMap client & 12-city telemetry
│   ├── utils/
│   │   └── animations.ts        # Reusable Framer Motion variants
│   ├── App.tsx                  # App root with routes & layout
│   ├── index.css                # Custom theme variables, scrollbars & glassmorphism
│   └── main.tsx                 # Application entry point
├── index.html                   # SEO tags, OpenGraph metadata & Google Fonts
├── package.json
├── tailwind.config.js           # Semantic design tokens mapping
└── tsconfig.app.json            # Strict TypeScript configuration
```

---

## 🎨 Design System & Color Tokens

WanderAI utilizes CSS custom variables mapped to TailwindCSS semantic classes:

| Token | Aurora (Default) | Ocean | Sunset | Luxury |
| :--- | :--- | :--- | :--- | :--- |
| `--color-bg` | `#090A10` | `#06131E` | `#0F0C15` | `#0B0C10` |
| `--color-accent` | `#8B5CF6` (Violet) | `#0EA5E9` (Sky) | `#F97316` (Orange) | `#D97706` (Amber) |
| `--color-accent-secondary` | `#EC4899` (Pink) | `#14B8A6` (Teal) | `#E11D48` (Rose) | `#F59E0B` (Gold) |
| `--color-surface` | `rgba(18, 20, 32, 0.75)` | `rgba(10, 25, 41, 0.75)` | `rgba(26, 18, 32, 0.75)` | `rgba(20, 22, 28, 0.8)` |

---

## ♿ Accessibility & Performance

* **WCAG Contrast Ratios**: All text tokens exceed WCAG 2.1 AA contrast requirements.
* **Reduced Motion**: Respects system preferences and includes an in-app toggle in Settings to minimize animations.
* **Touch Targets**: Minimum 44×44px interactive touch targets across mobile and desktop.
* **Semantic HTML5**: Native `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` elements for screen readers.
* **Zero Layout Shifts**: Image aspect ratios and container skeletons prevent CLS during async operations.

---

## 📄 License & Attribution

Crafted with ❤️ for the Front-End Developer Assessment. All rights reserved © 2026 WanderAI Inc.
