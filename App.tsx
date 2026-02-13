import React, { useState, useEffect } from 'react';
import { AuthState, UserPreferences, SportEvent } from './types';
import { AVAILABLE_SPORTS } from './constants';
import { fetchSuggestedEvents } from './services/geminiService';
import { Sidebar } from './components/Sidebar';
import { EventCard } from './components/EventCard';
import { Onboarding } from './components/Onboarding';
import { Search, Bell, Menu, Loader2, Calendar as CalendarIcon } from 'lucide-react';

export default function App() {
  const [authState, setAuthState] = useState<AuthState>('unauthenticated');
  const [preferences, setPreferences] = useState<UserPreferences | null>(null);
  const [events, setEvents] = useState<SportEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedSport, setSelectedSport] = useState<string | 'all'>('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Simulated Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthState('onboarding');
  };

  // Onboarding Complete
  const handleOnboardingComplete = async (prefs: UserPreferences) => {
    setPreferences(prefs);
    setLoading(true);
    setAuthState('authenticated');
    
    // Fetch AI Generated schedule
    const fetchedEvents = await fetchSuggestedEvents(prefs);
    setEvents(fetchedEvents);
    setLoading(false);
  };

  // Logout
  const handleLogout = () => {
    setAuthState('unauthenticated');
    setPreferences(null);
    setEvents([]);
  };

  // Filter Logic
  const filteredEvents = selectedSport === 'all' 
    ? events 
    : events.filter(e => e.sportId === selectedSport);

  // Group events by date for the calendar view
  const eventsByDate = filteredEvents.reduce((acc, event) => {
    const dateKey = new Date(event.date).toLocaleDateString();
    if (!acc[dateKey]) acc[dateKey] = [];
    acc[dateKey].push(event);
    return acc;
  }, {} as Record<string, SportEvent[]>);

  // Sort dates for consistent display and to avoid TS inference issues in JSX
  const sortedDateGroups: [string, SportEvent[]][] = Object.entries(eventsByDate).sort((a, b) => 
    new Date(a[0]).getTime() - new Date(b[0]).getTime()
  );

  // ---- RENDER LOGIC ----

  if (authState === 'unauthenticated') {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 z-10 border border-gray-100">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">SportEvents<span className="text-green-600">Scanner</span></h1>
            <p className="text-gray-500">Your personalized sports calendar.</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input type="password" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition" placeholder="••••••••" />
            </div>
            <button type="submit" className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition transform hover:scale-[1.02]">
              Sign In
            </button>
          </form>
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Don't have an account? <a href="#" className="font-bold text-black underline">Sign up</a></p>
          </div>
        </div>
      </div>
    );
  }

  if (authState === 'onboarding') {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  // ---- DASHBOARD VIEW ----

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 lg:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Sidebar - Desktop & Mobile */}
      <div className={`transition-transform duration-300 lg:translate-x-0 transform fixed inset-y-0 left-0 z-50 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:static lg:block`}>
        {preferences && (
          <Sidebar 
            userSports={preferences.favoriteSports} 
            selectedSportId={selectedSport}
            onSelectSport={(id) => {
              setSelectedSport(id);
              setMobileMenuOpen(false);
            }}
            onLogout={handleLogout}
          />
        )}
      </div>

      {/* Main Content */}
      <div className="lg:pl-64 flex flex-col min-h-screen">
        
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 -ml-2 text-gray-600 hover:text-black"
            >
              <Menu size={24} />
            </button>
            <h2 className="text-xl font-bold">
                {selectedSport === 'all' 
                    ? 'Dashboard' 
                    : AVAILABLE_SPORTS.find(s => s.id === selectedSport)?.name || 'Sport'}
            </h2>
          </div>

          <div className="flex items-center gap-4">
             {/* Search - simplified visual only */}
             <div className="hidden sm:flex items-center bg-gray-100 rounded-full px-4 py-2">
                <Search size={16} className="text-gray-400 mr-2"/>
                <input type="text" placeholder="Search events..." className="bg-transparent border-none outline-none text-sm w-48"/>
             </div>
             
             <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
             </button>
             
             {/* User Avatar Placeholder */}
             <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-xs font-bold">
                 US
             </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6">
           
           {/* Welcome Section */}
           {selectedSport === 'all' && (
             <div className="mb-8">
               <h1 className="text-3xl font-bold text-gray-900">Hello, Sports Fan! 👋</h1>
               <p className="text-gray-500 mt-2">
                 Here is your curated schedule based on <span className="font-semibold text-black">{preferences?.location}</span> timing.
               </p>
             </div>
           )}

           {loading ? (
             <div className="h-64 flex flex-col items-center justify-center text-gray-400">
               <Loader2 className="w-10 h-10 animate-spin mb-4 text-black" />
               <p>Scanning for events...</p>
             </div>
           ) : filteredEvents.length === 0 ? (
             <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
               <CalendarIcon className="w-12 h-12 mx-auto text-gray-300 mb-3" />
               <h3 className="text-lg font-medium text-gray-900">No events found</h3>
               <p className="text-gray-500">Try changing your filters or check back later.</p>
             </div>
           ) : (
             <div className="space-y-8">
                {/* Render events grouped by Date */}
                {sortedDateGroups.map(([dateStr, dayEvents]) => (
                    <div key={dateStr} className="animate-fadeIn">
                        <div className="flex items-center gap-4 mb-4">
                            <h3 className="text-lg font-bold text-gray-800 whitespace-nowrap">
                                {new Date(dayEvents[0].date).toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric'})}
                            </h3>
                            <div className="h-px bg-gray-200 w-full"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {dayEvents.map(event => (
                                <EventCard 
                                    key={event.id} 
                                    event={event} 
                                    sportConfig={AVAILABLE_SPORTS.find(s => s.id === event.sportId)} 
                                />
                            ))}
                        </div>
                    </div>
                ))}
             </div>
           )}
        </main>
      </div>
    </div>
  );
}