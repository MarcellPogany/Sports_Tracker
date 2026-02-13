export interface Sport {
  id: string;
  name: string;
  category: 'summer' | 'winter' | 'other';
  color: string; // Fallback solid color (e.g. 'orange')
  gradient: string; // Tailwind gradient classes
  iconName: string;
  image: string; // URL to background image
}

export interface UserPreferences {
  favoriteSports: string[];
  eventScope: 'world' | 'continental' | 'national';
  location: string;
}

export interface SportEvent {
  id: string;
  sportId: string;
  title: string;
  date: string; // ISO String
  time: string;
  location: string;
  channel: string; // TV Channel or Stream
  description?: string;
}

export type AuthState = 'unauthenticated' | 'onboarding' | 'authenticated';

export interface UserProfile {
  name: string;
  email: string;
  preferences: UserPreferences | null;
}