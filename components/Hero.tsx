'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const navItems = [
  { id: 'profil', label: 'PROFIL', position: 0, x: 0 },
  { id: 'wiedza', label: 'WIEDZA', position: 1, x: 64 },
  { id: 'asystent', label: 'ASYSTENT', position: 2, x: 128, highlight: true },
  { id: 'wyniki', label: 'WYNIKI', position: 3, x: 192 },
  { id: 'wspolpraca', label: 'WSPÓŁPRACA', position: 4, x: 256 },
];

export default function Hero() {
  const [activeItem, setActiveItem] = useState<string | null>('asystent');
  const [iconsImageLoaded, setIconsImageLoaded] = useState(false);

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
              </div>

              {/* 5 ikon w linii na wysokości klatki piersiowej ludzika */}
              <div 
                className="absolute flex items-center justify-center"
                style={{
                  top: '180px', // Wysokość klatki piersiowej
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 10,
                  width: '320px',
                  height: '56px'
                }}
              >
                {/* Obraz PNG z ikonami */}
                <div className="relative" style={{ width: '320px', height: '56px' }}>
                  <Image
                    src="/icons-line.png"
                    alt="Navigation Icons"
                    width={320}
                    height={56}
                    className="object-contain"
                    onLoad={() => setIconsImageLoaded(true)}
                    onError={() => setIconsImageLoaded(false)}
                    style={{ display: iconsImageLoaded ? 'block' : 'none' }}
                  />
                  
                  {/* Klikalne obszary nad każdą ikoną */}
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      onClick={() => scrollToSection(item.id)}
                      className={`
                        absolute rounded-full
                        transition-all cursor-pointer
                        ${activeItem === item.id 
                          ? 'ring-4 ring-wellysa-green ring-opacity-40 scale-110' 
                          : 'hover:scale-105'
                        }
                      `}
                      style={{
                        width: '56px',
                        height: '56px',
                        left: `${item.x}px`,
                        top: '0px',
                        background: 'transparent',
                        border: activeItem === item.id ? '3px solid rgba(76, 175, 80, 0.5)' : 'none'
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title={item.label}
                    />
                  ))}
                </div>

                {/* Fallback: SVG ikony jeśli obraz PNG nie istnieje */}
                {!iconsImageLoaded && (
                  <div className="flex items-center justify-center gap-2">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        onClick={() => scrollToSection(item.id)}
                        className={`
                          rounded-full flex items-center justify-center
                          transition-all shadow-lg cursor-pointer
                          ${activeItem === item.id 
                            ? 'scale-110 ring-4 ring-wellysa-green ring-opacity-30' 
                            : 'hover:scale-105'
                          }
                        `}
                        style={{
                          width: '56px',
                          height: '56px',
                          background: '#4CAF50',
                          border: '3px solid white',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title={item.label}
                      >
                        <div className="rounded-full bg-white w-10 h-10 flex items-center justify-center">
                          <span className="text-xs text-wellysa-green font-bold">{item.label.charAt(0)}</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Podpis pod awatarem */}
            <div className="mt-8 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-5xl md:text-6xl font-bold mb-3 text-gray-900"
              >
                Wellysa
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-xl md:text-2xl text-gray-600"
              >
                Osobisty Asystent Zdrowia
              </motion.p>
            </div>
          </div>

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
