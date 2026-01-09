'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { id: 'profil', label: 'PROFIL', icon: '👤' },
  { id: 'wiedza', label: 'WIEDZA', icon: '📚' },
  { id: 'asystent', label: 'ASYSTENT', icon: '💬', highlight: true },
  { id: 'wyniki', label: 'WYNIKI', icon: '📊' },
  { id: 'wspolpraca', label: 'WSPÓŁPRACA', icon: '🤝' },
];

export default function MainNavigation() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center gap-4 md:gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => {
                if (item.id === 'asystent') {
                  // Open Intercom chat
                  if (window.Intercom) {
                    window.Intercom('show');
                  }
                } else {
                  scrollToSection(item.id);
                }
                setActiveItem(item.id);
              }}
              className={`
                flex flex-col items-center gap-2 px-4 py-3 rounded-lg transition-all
                ${item.highlight 
                  ? 'bg-wellysa-green text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
                ${activeItem === item.id ? 'ring-2 ring-wellysa-green' : ''}
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm font-semibold">{item.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </nav>
  );
}
