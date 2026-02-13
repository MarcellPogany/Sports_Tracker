import { GoogleGenAI, Type } from "@google/genai";
import { UserPreferences, SportEvent } from '../types';
import { AVAILABLE_SPORTS } from '../constants';

export const fetchSuggestedEvents = async (prefs: UserPreferences): Promise<SportEvent[]> => {
  if (!process.env.API_KEY) {
    console.warn("No API Key provided, returning mock data logic would go here.");
    return [];
  }
  
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const selectedSportNames = AVAILABLE_SPORTS
    .filter(s => prefs.favoriteSports.includes(s.id))
    .map(s => s.name)
    .join(', ');

  const prompt = `
    Generate a list of 10 realistic upcoming sports events based on the following user preferences:
    - User Location: ${prefs.location}
    - Scope: ${prefs.eventScope} (Include events relevant to this scope)
    - Favorite Sports: ${selectedSportNames}

    For each event, invent a realistic date (within the next 7 days from today), time, and a plausible TV channel or streaming service available in ${prefs.location} where it can be watched.
    
    Ensure the 'sportId' matches one of these exactly: ${AVAILABLE_SPORTS.map(s => s.id).join(', ')}.
    If the sport is football/soccer, use 'football'.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              sportId: { type: Type.STRING },
              title: { type: Type.STRING },
              date: { type: Type.STRING, description: "ISO 8601 Date string" },
              time: { type: Type.STRING, description: "HH:MM format" },
              location: { type: Type.STRING },
              channel: { type: Type.STRING },
              description: { type: Type.STRING },
            },
            required: ["id", "sportId", "title", "date", "time", "location", "channel"],
          },
        },
      },
    });

    if (response.text) {
      const data = JSON.parse(response.text) as SportEvent[];
      return data;
    }
    return [];
  } catch (error) {
    console.error("Error fetching events from Gemini:", error);
    return [];
  }
};