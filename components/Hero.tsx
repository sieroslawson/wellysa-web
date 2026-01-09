'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const navItems = [
  { id: 'profil', label: 'PROFIL', icon: '👤', position: 'top-left' },
  { id: 'wiedza', label: 'WIEDZA', icon: '📚', position: 'bottom-left' },
  { id: 'asystent', label: 'ASYSTENT', icon: '🤖', position: 'center', highlight: true },
  { id: 'wyniki', label: 'WYNIKI', icon: '❤️', position: 'bottom-right' },
  { id: 'wspolpraca', label: 'WSPÓŁPRACA', icon: '📄', position: 'top-right' },
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
            {/* Ludzik - obraz PNG z załącznika */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto flex items-center justify-center"
              style={{ width: '300px', height: '500px' }}
            >
              {/* Obraz awatara ludzika */}
              <div className="relative">
                <Image
                  src="/avatar.png"
                  alt="Wellysa Avatar"
                  width={300}
                  height={500}
                  className="object-contain"
                  priority
                  style={{
                    filter: 'drop-shadow(0 10px 30px rgba(76, 175, 80, 0.3))'
                  }}
                />
                
                {/* Mniejszy kółek w prawym górnym rogu głowy z emoji robota (Asystent) */}
                <div
                  className="absolute rounded-full bg-green-100 flex items-center justify-center"
                  style={{
                    width: '60px',
                    height: '60px',
                    top: '20px',
                    right: '20px',
                    border: '3px solid white',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  <span className="text-3xl">🤖</span>
                </div>
              </div>

              {/* 4 ikony równomiernie rozmieszczone wokół głowy ludzika */}
              {/* PROFIL - top-left */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => scrollToSection('profil')}
                className={`
                  absolute w-14 h-14 rounded-full flex items-center justify-center
                  transition-all shadow-lg bg-white border-2
                  ${activeItem === 'profil' 
                    ? 'border-wellysa-green scale-110 ring-2 ring-wellysa-green' 
                    : 'border-gray-300 hover:border-wellysa-green'
                  }
                `}
                style={{
                  top: '20px',
                  left: '-30px'
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="PROFIL"
              >
                <span className="text-2xl">👤</span>
              </motion.button>

              {/* WSPÓŁPRACA - top-right */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => scrollToSection('wspolpraca')}
                className={`
                  absolute w-14 h-14 rounded-full flex items-center justify-center
                  transition-all shadow-lg bg-white border-2
                  ${activeItem === 'wspolpraca' 
                    ? 'border-wellysa-green scale-110 ring-2 ring-wellysa-green' 
                    : 'border-gray-300 hover:border-wellysa-green'
                  }
                `}
                style={{
                  top: '20px',
                  right: '-30px'
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="WSPÓŁPRACA"
              >
                <span className="text-2xl">📄</span>
              </motion.button>

              {/* WIEDZA - bottom-left */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => scrollToSection('wiedza')}
                className={`
                  absolute w-14 h-14 rounded-full flex items-center justify-center
                  transition-all shadow-lg bg-white border-2
                  ${activeItem === 'wiedza' 
                    ? 'border-wellysa-green scale-110 ring-2 ring-wellysa-green' 
                    : 'border-gray-300 hover:border-wellysa-green'
                  }
                `}
                style={{
                  bottom: '100px',
                  left: '-30px'
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="WIEDZA"
              >
                <span className="text-2xl">📚</span>
              </motion.button>

              {/* WYNIKI - bottom-right */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => scrollToSection('wyniki')}
                className={`
                  absolute w-14 h-14 rounded-full flex items-center justify-center
                  transition-all shadow-lg bg-white border-2
                  ${activeItem === 'wyniki' 
                    ? 'border-wellysa-green scale-110 ring-2 ring-wellysa-green' 
                    : 'border-gray-300 hover:border-wellysa-green'
                  }
                `}
                style={{
                  bottom: '100px',
                  right: '-30px'
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="WYNIKI"
              >
                <span className="text-2xl">❤️</span>
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
