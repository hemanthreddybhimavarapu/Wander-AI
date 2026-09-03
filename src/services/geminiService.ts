import { LanguageCode } from '../context/LanguageContext';

export interface Activity {
  time: string;
  title: string;
  description: string;
  category: string;
  location?: string;
  completed?: boolean;
}

export interface ItineraryDay {
  day: number;
  title: string;
  theme: string;
  activities: Activity[];
}

export interface GeneratedItinerary {
  destination: string;
  totalDays: number;
  travelStyle: string;
  budget: string;
  summary: string;
  days: ItineraryDay[];
}

export interface PlannerParams {
  destination: string;
  days: number;
  travelers: string;
  budget: string;
  style: string;
  interests: string[];
  language: LanguageCode;
}

export async function generateItineraryAI(params: PlannerParams): Promise<GeneratedItinerary> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (apiKey) {
    try {
      const prompt = 'Create a structured ' + params.days + '-day itinerary for ' + params.destination + '. Return raw JSON.';
      const res = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=' + apiKey,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { temperature: 0.7, maxOutputTokens: 2500 },
          }),
        }
      );
      if (res.ok) {
        const data = await res.json();
        const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (rawText) {
          const cleaned = rawText.replace(/`json/gi, '').replace(/`/g, '').trim();
          const parsed = JSON.parse(cleaned);
          if (parsed.days && Array.isArray(parsed.days)) {
            return parsed;
          }
        }
      }
    } catch (e) {
      console.warn('Gemini live generation fallback:', e);
    }
  }
  return createFallbackItinerary(params);
}

function createFallbackItinerary(params: PlannerParams): GeneratedItinerary {
  const { destination, days, style, budget, interests } = params;
  const generatedDays: ItineraryDay[] = [];
  for (let d = 1; d <= days; d++) {
    generatedDays.push({
      day: d,
      title: d === 1 ? 'Arrival & Architectural Marvels' : d === 2 ? 'Cultural Heritage & Gastronomy' : 'Signature Discovery Part ' + d,
      theme: d === 1 ? 'First Impressions' : d === 2 ? 'Heritage & Cuisine' : 'Scenic Horizons',
      activities: [
        {
          time: '09:00',
          title: d === 1 ? 'Morning Arrival & Artisanal Cafe Ritual' : 'Morning Promenade & Local Delicacies',
          description: 'Begin the morning at a celebrated cafe, soaking in the architectural atmosphere of ' + destination + '.',
          category: 'Food',
          location: destination + ' Central Quarter',
        },
        {
          time: '11:30',
          title: 'Signature Landmark Exploration (' + (interests[0] || 'Heritage') + ')',
          description: 'VIP guided discovery through premier historical and cultural sanctuaries of ' + destination + '.',
          category: 'Culture',
          location: destination + ' Old Town',
        },
        {
          time: '14:00',
          title: 'Gastronomic Tasting & Bistro Lunch',
          description: 'Savor acclaimed regional specialties paired with local refreshments.',
          category: 'Food',
          location: 'Culinary District',
        },
        {
          time: '16:30',
          title: 'Afternoon Immersion: ' + (interests[1] || 'Scenic Vistas'),
          description: 'Explore hidden courtyards, artisan workshops, and panoramic viewpoints across ' + destination + '.',
          category: 'Sightseeing',
          location: 'Panoramic Ridge',
        },
        {
          time: '19:30',
          title: 'Sunset Skyline Dining & Twilight Promenade',
          description: 'Twilight dining followed by an evening stroll under the illuminated monuments of ' + destination + '.',
          category: 'Nightlife',
          location: 'Waterfront Boulevard',
        },
      ],
    });
  }
  return {
    destination,
    totalDays: days,
    travelStyle: style,
    budget,
    summary: 'An exquisite ' + days + '-day bespoke voyage through ' + destination + ', tailored for ' + style.toLowerCase() + ' travel and ' + budget.toLowerCase() + ' comfort.',
    days: generatedDays,
  };
}

export async function askGeminiChat(
  question: string,
  destinationName: string,
  language: LanguageCode
): Promise<string> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (apiKey) {
    try {
      const prompt = 'You are WanderAI Concierge for ' + destinationName + '. Question: ' + question + '. Language: ' + language;
      const res = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=' + apiKey,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
        }
      );
      if (res.ok) {
        const data = await res.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) return text.trim();
      }
    } catch (e) {
      console.warn(e);
    }
  }
  const q = question.toLowerCase();
  if (q.includes('day') || q.includes('long')) {
    return 'For ' + destinationName + ', we recommend dedicating at least 4 to 6 days. This provides the ideal rhythm to explore iconic landmarks in the morning, indulge in culinary culture in the afternoon, and experience the twilight skyline at an unhurried pace.';
  }
  if (q.includes('food') || q.includes('eat')) {
    return 'In ' + destinationName + ', immerse yourself in the signature regional gastronomy. Visit traditional morning markets, sample street delicacies, and reserve an evening at an acclaimed bistro.';
  }
  return destinationName + ' is an extraordinary destination. We recommend starting early to experience signature monuments before peak hours, exploring neighborhood alleys on foot, and savoring local hospitality.';
}
