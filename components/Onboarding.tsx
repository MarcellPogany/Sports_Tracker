import React, { useState, useMemo } from 'react';
import { UserPreferences } from '../types';
import { AVAILABLE_SPORTS } from '../constants';
import { Check, Globe, MapPin, Trophy, Search, Snowflake, Sun, Medal } from 'lucide-react';

interface OnboardingProps {
  onComplete: (prefs: UserPreferences) => void;
}

export const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [scope, setScope] = useState<'world' | 'continental' | 'national'>('world');
  const [location, setLocation] = useState('');
  
  // Step 1 Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'summer' | 'winter'>('all');

  const toggleSport = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  const handleSubmit = () => {
    onComplete({
      favoriteSports: favorites,
      eventScope: scope,
      location: location || 'Global'
    });
  };

  const filteredSports = useMemo(() => {
    return AVAILABLE_SPORTS.filter(sport => {
      const matchesSearch = sport.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTab = activeTab === 'all' || sport.category === activeTab || (activeTab === 'summer' && sport.category === 'other');
      return matchesSearch && matchesTab;
    });
  }, [searchQuery, activeTab]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start sm:justify-center p-4">
      <div className="bg-white max-w-4xl w-full rounded-2xl shadow-xl p-4 sm:p-8 flex flex-col max-h-[90vh] sm:max-h-[85vh]">
        
        {/* Progress Bar */}
        <div className="flex gap-2 mb-6 shrink-0">
          {[1, 2, 3].map(i => (
            <div key={i} className={`h-2 flex-1 rounded-full transition-colors ${i <= step ? 'bg-black' : 'bg-gray-200'}`} />
          ))}
        </div>

        {/* Step 1: Sports Selection */}
        {step === 1 && (
          <div className="flex flex-col h-full overflow-hidden">
            <div className="text-center shrink-0 mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Select Your Sports</h2>
              <p className="text-gray-500 mt-1 text-sm sm:text-base">Customize your feed with Summer & Winter Olympic sports.</p>
            </div>

            {/* Controls */}
            <div className="shrink-0 space-y-3 mb-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Find a sport (e.g., Curling, Judo...)" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-100 border-none rounded-xl focus:ring-2 focus:ring-black outline-none"
                />
              </div>

              {/* Tabs */}
              <div className="flex p-1 bg-gray-100 rounded-lg">
                {[
                  { id: 'all', label: 'All Sports', icon: Medal },
                  { id: 'summer', label: 'Summer', icon: Sun },
                  { id: 'winter', label: 'Winter', icon: Snowflake },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-md transition-all ${
                      activeTab === tab.id 
                        ? 'bg-white text-black shadow-sm' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <tab.icon size={16} />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Grid Area - Scrollable */}
            <div className="flex-1 overflow-y-auto pr-2 min-h-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {filteredSports.map(sport => {
                  const isSelected = favorites.includes(sport.id);
                  return (
                    <button
                      key={sport.id}
                      onClick={() => toggleSport(sport.id)}
                      className={`relative rounded-xl transition-all h-28 sm:h-32 group overflow-hidden border-2
                        ${isSelected 
                          ? `border-${sport.color}-500 shadow-lg transform scale-[1.02]` 
                          : 'border-transparent hover:scale-[1.02] opacity-100'
                        }
                      `}
                    >
                      {/* Background Image */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${sport.image})` }}
                      />

                      {/* Gradient Overlay for Readability */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${isSelected ? `from-${sport.color}-900/90 to-black/20` : 'from-black/80 to-black/10'}`} />

                      {/* Selection Indicator */}
                      {isSelected && (
                        <div className={`absolute top-2 right-2 w-6 h-6 bg-${sport.color}-500 rounded-full flex items-center justify-center text-white shadow-md z-10`}>
                          <Check size={14} strokeWidth={3} />
                        </div>
                      )}
                      
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 w-full p-3 flex flex-col items-start justify-end h-full z-10">
                        <span className="text-white font-bold text-sm sm:text-base leading-tight drop-shadow-md">
                            {sport.name}
                        </span>
                      </div>
                    </button>
                  );
                })}
                {filteredSports.length === 0 && (
                  <div className="col-span-full text-center py-10 text-gray-400">
                    No sports found matching "{searchQuery}"
                  </div>
                )}
              </div>
            </div>

            {/* Footer Action */}
            <div className="shrink-0 pt-4 mt-2 border-t border-gray-100 bg-white">
              <button
                onClick={handleNext}
                disabled={favorites.length === 0}
                className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition"
              >
                Continue ({favorites.length} selected)
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Scope */}
        {step === 2 && (
          <div className="space-y-6 flex flex-col h-full">
             <div className="text-center shrink-0">
              <h2 className="text-2xl font-bold text-gray-900">Event Scope</h2>
              <p className="text-gray-500 mt-2">What level of competition are you interested in?</p>
            </div>

            <div className="space-y-3 flex-1 overflow-y-auto">
              {[
                { id: 'world', label: 'Global / World Level', icon: Globe, desc: 'Olympics, World Cups, Major Internationals' },
                { id: 'continental', label: 'Continental', icon: Trophy, desc: 'European Championships, Asian Games' },
                { id: 'national', label: 'National', icon: MapPin, desc: 'Domestic Leagues and Cups' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setScope(opt.id as any)}
                  className={`w-full p-5 rounded-xl border-2 text-left flex items-center gap-4 transition-all ${
                    scope === opt.id ? 'border-black bg-gray-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`p-3 rounded-full ${scope === opt.id ? 'bg-black text-white' : 'bg-gray-100 text-gray-500'}`}>
                    <opt.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{opt.label}</h3>
                    <p className="text-sm text-gray-500">{opt.desc}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex gap-3 shrink-0">
                <button onClick={() => setStep(1)} className="px-6 py-4 rounded-xl font-bold text-gray-500 hover:bg-gray-100">Back</button>
                <button onClick={handleNext} className="flex-1 bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition">Continue</button>
            </div>
          </div>
        )}

        {/* Step 3: Location */}
        {step === 3 && (
            <div className="space-y-6 flex flex-col h-full">
                <div className="text-center shrink-0">
                    <h2 className="text-2xl font-bold text-gray-900">Where are you?</h2>
                    <p className="text-gray-500 mt-2">This helps us find the right TV channels and viewing times.</p>
                </div>

                <div className="py-8 flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country / Region</label>
                    <input 
                        type="text" 
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Hungary, United Kingdom, USA"
                        className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black outline-none text-lg"
                    />
                </div>

                <div className="flex gap-3 shrink-0">
                    <button onClick={() => setStep(2)} className="px-6 py-4 rounded-xl font-bold text-gray-500 hover:bg-gray-100">Back</button>
                    <button 
                        onClick={handleSubmit} 
                        disabled={!location.trim()}
                        className="flex-1 bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition disabled:opacity-50"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};