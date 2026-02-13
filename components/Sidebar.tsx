import React from 'react';
import { Sport } from '../types';
import { AVAILABLE_SPORTS } from '../constants';
import { LayoutDashboard, LogOut, Settings } from 'lucide-react';

interface SidebarProps {
  userSports: string[];
  selectedSportId: string | 'all';
  onSelectSport: (id: string | 'all') => void;
  onLogout: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ userSports, selectedSportId, onSelectSport, onLogout }) => {
  const menuItems = AVAILABLE_SPORTS.filter(sport => userSports.includes(sport.id));

  return (
    <div className="w-64 bg-black text-white h-screen flex flex-col fixed left-0 top-0 z-20">
      {/* Header */}
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-xl font-bold tracking-wider uppercase">
          SportEvents<span className="text-green-500">Scanner</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
        {/* Dashboard / All */}
        <button
          onClick={() => onSelectSport('all')}
          className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
            selectedSportId === 'all'
              ? 'bg-gray-800 text-white'
              : 'text-gray-400 hover:bg-gray-900 hover:text-white'
          }`}
        >
          <LayoutDashboard className="w-5 h-5 mr-3" />
          <span className="font-medium">Dashboard</span>
        </button>

        <div className="pt-6 pb-2 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Your Sports
        </div>

        {menuItems.map((sport) => {
            const isSelected = selectedSportId === sport.id;
            
            return (
              <button
                key={sport.id}
                onClick={() => onSelectSport(sport.id)}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-all group relative overflow-hidden ${
                  isSelected
                    ? 'text-white'
                    : 'text-gray-400 hover:bg-gray-900 hover:text-white'
                }`}
              >
                {/* Active Background Gradient Overlay */}
                {isSelected && (
                   <div className={`absolute inset-0 opacity-20 ${sport.gradient}`}></div>
                )}
                
                {/* Visual Indicator */}
                <span className={`w-2 h-2 rounded-full mr-4 relative z-10 ${isSelected ? sport.gradient.replace('text-slate-900', '').replace('text-white', '') : 'bg-gray-600'}`}></span>
                
                <span className={`font-medium relative z-10`}>
                  {sport.name}
                </span>
                
                {isSelected && <div className={`absolute left-0 top-0 bottom-0 w-1 ${sport.gradient}`}></div>}
              </button>
            );
        })}
      </nav>

      {/* Footer Actions */}
      <div className="p-4 border-t border-gray-800">
        <button className="w-full flex items-center px-4 py-3 text-gray-400 hover:text-white hover:bg-gray-900 rounded-lg transition-colors">
            <Settings className="w-5 h-5 mr-3" />
            <span>Settings</span>
        </button>
        <button 
            onClick={onLogout}
            className="w-full flex items-center px-4 py-3 text-gray-400 hover:text-red-400 hover:bg-gray-900 rounded-lg transition-colors mt-1">
            <LogOut className="w-5 h-5 mr-3" />
            <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};