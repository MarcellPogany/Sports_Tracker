import React from 'react';
import { SportEvent, Sport } from '../types';
import { MapPin, Tv, Clock, Calendar } from 'lucide-react';

interface EventCardProps {
  event: SportEvent;
  sportConfig?: Sport;
}

export const EventCard: React.FC<EventCardProps> = ({ event, sportConfig }) => {
  // Dynamic color handling
  // If specific styling exists, use it. Otherwise defaults.
  const gradientClass = sportConfig?.gradient || 'bg-gray-800 text-white';
  const isWinter = sportConfig?.category === 'winter';
  
  // Format date nicely
  const dateObj = new Date(event.date);
  const dateStr = dateObj.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });

  return (
    <div className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100`}>
      {/* Header with Gradient */}
      <div className={`p-4 ${gradientClass} ${isWinter ? 'text-slate-900' : 'text-white'}`}>
         <div className="flex justify-between items-start">
             <span className="inline-block px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide bg-white/20 backdrop-blur-sm">
                {sportConfig?.name || event.sportId}
             </span>
             <div className="flex items-center text-sm font-semibold opacity-90">
                <Clock className="w-4 h-4 mr-1.5" />
                {event.time}
             </div>
         </div>
         <h3 className="text-lg font-bold mt-2 leading-tight">{event.title}</h3>
      </div>

      <div className="p-4">
        <div className="flex flex-col gap-3">
            <div className="flex items-center text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                {dateStr}
            </div>
            <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                {event.location}
            </div>
            <div className="pt-3 mt-1 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center text-sm font-medium text-gray-700 bg-gray-50 px-3 py-1.5 rounded-full">
                    <Tv className="w-4 h-4 mr-2" />
                    {event.channel}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};