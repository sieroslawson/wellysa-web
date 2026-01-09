'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Ludzik Avatar - zawsze zielony na web */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="w-64 h-64 bg-wellysa-green rounded-full flex items-center justify-center shadow-2xl">
              {/* Placeholder dla Ludzika - zastąp prawdziwym obrazem */}
              <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center">
                <span className="text-6xl">👤</span>
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-900"
          >
            Wellysa
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl"
          >
            Twój osobisty asystent zdrowia
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://apps.apple.com/app/wellysa" // Replace with actual app store link
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-wellysa-green text-white rounded-lg font-semibold hover:bg-green-600 transition-colors shadow-lg"
            >
              Pobierz Apkę
            </a>
            <button
              onClick={() => {
                // Trigger onboarding flow
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
