import { Sport } from './types';

export const AVAILABLE_SPORTS: Sport[] = [
  // --- POPULAR / MAJOR TEAM SPORTS ---
  { 
    id: 'football', 
    name: 'Football', 
    category: 'summer', 
    color: 'green', 
    gradient: 'bg-gradient-to-br from-green-500 to-emerald-700', 
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bde9be51?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'basketball', 
    name: 'Basketball', 
    category: 'summer', 
    color: 'orange', 
    gradient: 'bg-gradient-to-br from-orange-500 to-red-600', 
    iconName: 'Dribbble',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ee2?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'tennis', 
    name: 'Tennis', 
    category: 'summer', 
    color: 'lime', 
    gradient: 'bg-gradient-to-br from-lime-400 to-green-600', 
    iconName: 'CircleDot',
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'volleyball', 
    name: 'Volleyball', 
    category: 'summer', 
    color: 'yellow', 
    gradient: 'bg-gradient-to-br from-yellow-400 to-orange-400', 
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'handball', 
    name: 'Handball', 
    category: 'summer', 
    color: 'blue', 
    gradient: 'bg-gradient-to-br from-blue-500 to-indigo-600', 
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1627993073362-e1c849646452?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'rugby', 
    name: 'Rugby', 
    category: 'summer', 
    color: 'emerald', 
    gradient: 'bg-gradient-to-br from-emerald-600 to-teal-800', 
    iconName: 'Shield',
    image: 'https://images.unsplash.com/photo-1628891560942-d698e3984fb4?q=80&w=600&auto=format&fit=crop'
  },

  // --- SUMMER OLYMPICS ---
  { 
    id: 'athletics', 
    name: 'Athletics', 
    category: 'summer', 
    color: 'red', 
    gradient: 'bg-gradient-to-br from-red-500 to-orange-600', 
    iconName: 'Wind',
    image: 'https://images.unsplash.com/photo-1552674605-46940428d22d?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'swimming', 
    name: 'Swimming', 
    category: 'summer', 
    color: 'cyan', 
    gradient: 'bg-gradient-to-br from-cyan-400 to-blue-600', 
    iconName: 'Waves',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'gymnastics', 
    name: 'Gymnastics', 
    category: 'summer', 
    color: 'purple', 
    gradient: 'bg-gradient-to-br from-fuchsia-400 to-purple-600', 
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1541252260732-48742e1d42a9?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'cycling', 
    name: 'Cycling', 
    category: 'summer', 
    color: 'amber', 
    gradient: 'bg-gradient-to-br from-amber-400 to-yellow-600', 
    iconName: 'Bike',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'boxing', 
    name: 'Boxing', 
    category: 'summer', 
    color: 'red', 
    gradient: 'bg-gradient-to-br from-red-600 to-rose-800', 
    iconName: 'Swords',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'judo', 
    name: 'Judo', 
    category: 'summer', 
    color: 'slate', 
    gradient: 'bg-gradient-to-br from-slate-800 to-black', 
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1610427845330-22c6017b2046?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'fencing', 
    name: 'Fencing', 
    category: 'summer', 
    color: 'gray', 
    gradient: 'bg-gradient-to-br from-gray-300 to-gray-500', 
    iconName: 'Swords',
    image: 'https://images.unsplash.com/photo-1615118266453-83c7e62d4761?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'archery', 
    name: 'Archery', 
    category: 'summer', 
    color: 'teal', 
    gradient: 'bg-gradient-to-br from-teal-400 to-emerald-600', 
    iconName: 'Target',
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'rowing', 
    name: 'Rowing', 
    category: 'summer', 
    color: 'blue', 
    gradient: 'bg-gradient-to-br from-sky-500 to-blue-700', 
    iconName: 'Waves',
    image: 'https://images.unsplash.com/photo-1620310467554-71c77f05bd14?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'sailing', 
    name: 'Sailing', 
    category: 'summer', 
    color: 'sky', 
    gradient: 'bg-gradient-to-br from-sky-300 to-cyan-500', 
    iconName: 'Wind',
    image: 'https://images.unsplash.com/photo-1534008753122-a83774027818?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'table_tennis', 
    name: 'Table Tennis', 
    category: 'summer', 
    color: 'blue', 
    gradient: 'bg-gradient-to-br from-blue-600 to-indigo-800', 
    iconName: 'Circle',
    image: 'https://images.unsplash.com/photo-1589579234096-29177169f487?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'badminton', 
    name: 'Badminton', 
    category: 'summer', 
    color: 'green', 
    gradient: 'bg-gradient-to-br from-teal-400 to-green-500', 
    iconName: 'Wind',
    image: 'https://images.unsplash.com/photo-1626224583764-847890e045b5?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'equestrian', 
    name: 'Equestrian', 
    category: 'summer', 
    color: 'amber', 
    gradient: 'bg-gradient-to-br from-amber-700 to-orange-900', 
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1534960680480-136009b246f6?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'golf', 
    name: 'Golf', 
    category: 'summer', 
    color: 'green', 
    gradient: 'bg-gradient-to-br from-green-600 to-emerald-800', 
    iconName: 'Circle',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'surk', 
    name: 'Surfing', 
    category: 'summer', 
    color: 'cyan', 
    gradient: 'bg-gradient-to-br from-cyan-300 to-blue-500', 
    iconName: 'Waves',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'skateboarding', 
    name: 'Skateboarding', 
    category: 'summer', 
    color: 'yellow', 
    gradient: 'bg-gradient-to-br from-yellow-300 to-orange-400', 
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'climbing', 
    name: 'Sport Climbing', 
    category: 'summer', 
    color: 'stone', 
    gradient: 'bg-gradient-to-br from-stone-400 to-stone-600', 
    iconName: 'Mountain',
    image: 'https://images.unsplash.com/photo-1601625902888-29474775267b?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'triathlon', 
    name: 'Triathlon', 
    category: 'summer', 
    color: 'rose', 
    gradient: 'bg-gradient-to-br from-rose-400 to-orange-500', 
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1614607758784-073c68383a18?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'weightlifting', 
    name: 'Weightlifting', 
    category: 'summer', 
    color: 'slate', 
    gradient: 'bg-gradient-to-br from-slate-500 to-gray-700', 
    iconName: 'Dumbbell',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'wrestling', 
    name: 'Wrestling', 
    category: 'summer', 
    color: 'orange', 
    gradient: 'bg-gradient-to-br from-orange-600 to-red-700', 
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1629814406394-8a4b0d0c3c54?q=80&w=600&auto=format&fit=crop'
  },

  // --- WINTER OLYMPICS ---
  { 
    id: 'ice_hockey', 
    name: 'Ice Hockey', 
    category: 'winter', 
    color: 'blue', 
    gradient: 'bg-gradient-to-br from-blue-100 to-blue-300 text-blue-900', 
    iconName: 'Snowflake',
    image: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'alpine_skiing', 
    name: 'Alpine Skiing', 
    category: 'winter', 
    color: 'sky', 
    gradient: 'bg-gradient-to-br from-sky-100 to-sky-400 text-sky-900', 
    iconName: 'Mountain',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'figure_skating', 
    name: 'Figure Skating', 
    category: 'winter', 
    color: 'purple', 
    gradient: 'bg-gradient-to-br from-purple-100 to-purple-300 text-purple-900', 
    iconName: 'Snowflake',
    image: 'https://images.unsplash.com/photo-1579222621406-819777174ea5?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'biathlon', 
    name: 'Biathlon', 
    category: 'winter', 
    color: 'slate', 
    gradient: 'bg-gradient-to-br from-slate-200 to-slate-400 text-slate-900', 
    iconName: 'Target',
    image: 'https://images.unsplash.com/photo-1644336069903-8d2b9623e100?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'bobsleigh', 
    name: 'Bobsleigh', 
    category: 'winter', 
    color: 'gray', 
    gradient: 'bg-gradient-to-br from-gray-200 to-gray-400 text-gray-900', 
    iconName: 'Wind',
    image: 'https://images.unsplash.com/photo-1516283733230-22c6017b2046?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'cross_country', 
    name: 'Cross-Country', 
    category: 'winter', 
    color: 'teal', 
    gradient: 'bg-gradient-to-br from-teal-100 to-teal-300 text-teal-900', 
    iconName: 'Mountain',
    image: 'https://images.unsplash.com/photo-1518775053278-5a569f0be353?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'curling', 
    name: 'Curling', 
    category: 'winter', 
    color: 'indigo', 
    gradient: 'bg-gradient-to-br from-indigo-100 to-indigo-300 text-indigo-900', 
    iconName: 'Circle',
    image: 'https://images.unsplash.com/photo-1550955294-118e77a5d31d?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'freestyle_skiing', 
    name: 'Freestyle Skiing', 
    category: 'winter', 
    color: 'cyan', 
    gradient: 'bg-gradient-to-br from-cyan-100 to-cyan-400 text-cyan-900', 
    iconName: 'Snowflake',
    image: 'https://images.unsplash.com/photo-1518640165980-d3e0e2aa6c1e?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'luge', 
    name: 'Luge', 
    category: 'winter', 
    color: 'blue', 
    gradient: 'bg-gradient-to-br from-blue-200 to-indigo-400 text-blue-900', 
    iconName: 'Wind',
    image: 'https://images.unsplash.com/photo-1516283733230-22c6017b2046?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'nordic_combined', 
    name: 'Nordic Combined', 
    category: 'winter', 
    color: 'sky', 
    gradient: 'bg-gradient-to-br from-sky-200 to-blue-400 text-sky-900', 
    iconName: 'Mountain',
    image: 'https://images.unsplash.com/photo-1613941785566-a237f8475249?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'skeleton', 
    name: 'Skeleton', 
    category: 'winter', 
    color: 'gray', 
    gradient: 'bg-gradient-to-br from-gray-300 to-slate-500 text-gray-900', 
    iconName: 'Wind',
    image: 'https://images.unsplash.com/photo-1516283733230-22c6017b2046?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'ski_jumping', 
    name: 'Ski Jumping', 
    category: 'winter', 
    color: 'blue', 
    gradient: 'bg-gradient-to-br from-blue-50 to-sky-300 text-blue-900', 
    iconName: 'Wind',
    image: 'https://images.unsplash.com/photo-1549491740-42171587522d?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'snowboard', 
    name: 'Snowboard', 
    category: 'winter', 
    color: 'violet', 
    gradient: 'bg-gradient-to-br from-violet-200 to-purple-400 text-violet-900', 
    iconName: 'Snowflake',
    image: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'speed_skating', 
    name: 'Speed Skating', 
    category: 'winter', 
    color: 'orange', 
    gradient: 'bg-gradient-to-br from-orange-100 to-orange-300 text-orange-900', 
    iconName: 'Wind',
    image: 'https://images.unsplash.com/photo-1520189083232-f1556d116279?q=80&w=600&auto=format&fit=crop'
  },

  // --- MOTORSPORTS & OTHER ---
  { 
    id: 'f1', 
    name: 'Formula 1', 
    category: 'other', 
    color: 'red', 
    gradient: 'bg-gradient-to-br from-red-600 to-black', 
    iconName: 'Wind',
    image: 'https://images.unsplash.com/photo-1532906613276-cf332b38584e?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'motogp', 
    name: 'MotoGP', 
    category: 'other', 
    color: 'orange', 
    gradient: 'bg-gradient-to-br from-orange-500 to-red-500', 
    iconName: 'Bike',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 'esports', 
    name: 'Esports', 
    category: 'other', 
    color: 'purple', 
    gradient: 'bg-gradient-to-br from-fuchsia-600 to-purple-900', 
    iconName: 'Gamepad2',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop'
  },
];

export const MOCK_INITIAL_EVENTS = [
    {
        id: '1',
        sportId: 'football',
        title: 'Real Madrid vs Barcelona',
        date: new Date().toISOString(),
        time: '21:00',
        location: 'Madrid, Spain',
        channel: 'ESPN+'
    }
];