'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const navItems = [
  { id: 'profil', label: 'PROFIL', icon: '👤', position: 'left-top' },
  { id: 'wiedza', label: 'WIEDZA', icon: '📚', position: 'left-center' },
  { id: 'asystent', label: 'ASYSTENT', icon: '🤖', position: 'center-top', highlight: true },
  { id: 'wyniki', label: 'WYNIKI', icon: '❤️', position: 'right-center' },
  { id: 'wspolpraca', label: 'WSPÓŁPRACA', icon: '📄', position: 'right-top' },
];

export default function Hero() {
  const [activeItem, setActiveItem] = useState<string | null>('asystent');

  const scrollToSection = (id: string) => {
    if (id === 'asystent') {
      // Open Intercom chat or scroll to assistant section
      if (typeof window !== 'undefined' && window.Intercom) {
        window.Intercom('show');
      } else {
        document.getElementById('asystent')?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setActiveItem(id);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center">
          {/* Ludzik z nawigacją wokół */}
          <div className="relative w-full max-w-2xl mx-auto mb-12">
            {/* Ludzik - sylwetka człowieka w kolorze teal/zielonym */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto"
              style={{ width: '400px', height: '600px' }}
            >
              {/* SVG Ludzik - sylwetka człowieka */}
              <svg
                viewBox="0 0 200 300"
                className="w-full h-full"
                style={{ filter: 'drop-shadow(0 10px 30px rgba(76, 175, 80, 0.3))' }}
              >
                {/* Głowa */}
                <circle
                  cx="100"
                  cy="50"
                  r="35"
                  fill="none"
                  stroke="#4CAF50"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                {/* Tułów */}
                <path
                  d="M 100 85 L 100 200"
                  fill="none"
                  stroke="#4CAF50"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                {/* Ręce */}
                <path
                  d="M 100 120 L 60 160 M 100 120 L 140 160"
                  fill="none"
                  stroke="#4CAF50"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                {/* Nogi */}
                <path
                  d="M 100 200 L 70 280 M 100 200 L 130 280"
                  fill="none"
                  stroke="#4CAF50"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>

              {/* Nawigacja wokół ludzika - 5 ikon w łuku nad górną częścią */}
              {/* PROFIL - lewy górny (nad głową) */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => scrollToSection('profil')}
                className={`
                  absolute top-0 left-16 w-14 h-14 rounded-full flex items-center justify-center
                  transition-all shadow-lg
                  ${activeItem === 'profil' 
                    ? 'bg-wellysa-green text-white scale-110 ring-2 ring-wellysa-green' 
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-wellysa-green'
                  }
                `}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="PROFIL"
              >
                <span className="text-xl">👤</span>
              </motion.button>

              {/* WIEDZA - lewy środkowy (nad ramieniem) */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => scrollToSection('wiedza')}
                className={`
                  absolute top-24 left-8 w-14 h-14 rounded-full flex items-center justify-center
                  transition-all shadow-lg
                  ${activeItem === 'wiedza' 
                    ? 'bg-wellysa-green text-white scale-110 ring-2 ring-wellysa-green' 
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-wellysa-green'
                  }
                `}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="WIEDZA"
              >
                <span className="text-xl">📚</span>
              </motion.button>

              {/* ASYSTENT - centralnie nad klatką piersiową (najważniejszy) */}
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => scrollToSection('asystent')}
                className={`
                  absolute top-16 left-1/2 transform -translate-x-1/2 w-18 h-18 rounded-full flex items-center justify-center
                  transition-all shadow-xl z-10
                  ${activeItem === 'asystent' 
                    ? 'bg-wellysa-green text-white scale-110 ring-4 ring-wellysa-green ring-opacity-40' 
                    : 'bg-wellysa-green text-white border-4 border-white shadow-2xl'
                  }
                `}
                style={{ width: '72px', height: '72px' }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                title="ASYSTENT"
              >
                <span className="text-2xl">🤖</span>
              </motion.button>

              {/* WYNIKI - prawy środkowy (nad ramieniem) */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => scrollToSection('wyniki')}
                className={`
                  absolute top-24 right-8 w-14 h-14 rounded-full flex items-center justify-center
                  transition-all shadow-lg
                  ${activeItem === 'wyniki' 
                    ? 'bg-wellysa-green text-white scale-110 ring-2 ring-wellysa-green' 
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-wellysa-green'
                  }
                `}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="WYNIKI"
              >
                <span className="text-xl">❤️</span>
              </motion.button>

              {/* WSPÓŁPRACA - prawy górny (nad głową) */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => scrollToSection('wspolpraca')}
                className={`
                  absolute top-0 right-16 w-14 h-14 rounded-full flex items-center justify-center
                  transition-all shadow-lg
                  ${activeItem === 'wspolpraca' 
                    ? 'bg-wellysa-green text-white scale-110 ring-2 ring-wellysa-green' 
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-wellysa-green'
                  }
                `}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="WSPÓŁPRACA"
              >
                <span className="text-xl">📄</span>
              </motion.button>
            </motion.div>

            {/* Etykieta aktywnej sekcji pod ludzikiem */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center w-full">
              {activeItem && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-bold text-gray-900"
                >
                  {navItems.find(item => item.id === activeItem)?.label}
                </motion.div>
              )}
            </div>
          </div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-900"
          >
            Wellysa
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl text-center"
          >
            Twój osobisty asystent zdrowia
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wellysa.com/pobierz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-wellysa-green text-white rounded-lg font-semibold hover:bg-green-600 transition-colors shadow-lg"
            >
              Pobierz Apkę
            </a>
            <button
              onClick={() => {
                document.getElementById('onboarding-trigger')?.click();
              }}
              className="px-8 py-4 bg-white text-wellysa-green border-2 border-wellysa-green rounded-lg font-semibold hover:bg-wellysa-green hover:text-white transition-colors"
            >
              Poznaj Wellysa
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
