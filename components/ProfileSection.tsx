'use client';

import { motion } from 'framer-motion';

export default function ProfileSection() {
  return (
    <section id="profil" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gray-900"
        >
          PROFIL - Twoje Dane Po Rejestracji
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg shadow-xl p-8">
            {/* Wyblurowane dane profilowe */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gray-300 rounded-full blur-sm"></div>
                <div className="flex-1">
                  <div className="h-6 bg-gray-300 rounded blur-sm mb-2 w-48"></div>
                  <div className="h-4 bg-gray-300 rounded blur-sm w-32"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="h-4 bg-gray-300 rounded blur-sm mb-2 w-24"></div>
                  <div className="h-6 bg-gray-300 rounded blur-sm w-32"></div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="h-4 bg-gray-300 rounded blur-sm mb-2 w-24"></div>
                  <div className="h-6 bg-gray-300 rounded blur-sm w-32"></div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="h-4 bg-gray-300 rounded blur-sm mb-2 w-24"></div>
                  <div className="h-6 bg-gray-300 rounded blur-sm w-32"></div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="h-4 bg-gray-300 rounded blur-sm mb-2 w-24"></div>
                  <div className="h-6 bg-gray-300 rounded blur-sm w-32"></div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <div className="h-4 bg-gray-300 rounded blur-sm mb-2 w-32"></div>
                <div className="h-20 bg-gray-300 rounded blur-sm"></div>
              </div>
            </div>

            <p className="text-center mt-6 text-gray-600">
              Po rejestracji będziesz miał dostęp do pełnego profilu zdrowotnego
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="https://wellysa.com/pobierz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-wellysa-green text-white rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors shadow-lg"
            >
Sprawdź pełną wersję aplikacji
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
