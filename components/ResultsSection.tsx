'use client';

import { motion } from 'framer-motion';

export default function ResultsSection() {
  return (
    <section id="wyniki" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gray-900"
        >
          WYNIKI - Co Zyskasz Po Rejestracji
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          {/* Genogram - wyblurowany */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-xl mb-8"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Genogram</h3>
            <div className="bg-gray-200 rounded-lg p-12 flex items-center justify-center blur-sm">
              <div className="text-gray-400 text-lg">Wizualizacja genogramu</div>
            </div>
            <p className="text-center mt-4 text-gray-600">
              Po rejestracji zobaczysz pełny genogram swojej rodziny
            </p>
          </motion.div>

          {/* Metryki Krwi - wyblurowane */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-xl mb-8"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Metryki Krwi</h3>
            <div className="bg-gray-200 rounded-lg p-12 flex items-center justify-center blur-sm">
              <div className="text-gray-400 text-lg">Wykresy i analizy krwi</div>
            </div>
            <p className="text-center mt-4 text-gray-600">
              Śledź swoje parametry krwi w czasie
            </p>
          </motion.div>

          {/* Metryki DNA - wyblurowane */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-xl mb-8"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Metryki DNA</h3>
            <div className="bg-gray-200 rounded-lg p-12 flex items-center justify-center blur-sm">
              <div className="text-gray-400 text-lg">Analiza genetyczna</div>
            </div>
            <p className="text-center mt-4 text-gray-600">
              Poznaj swoje predyspozycje genetyczne
            </p>
          </motion.div>

          {/* Main CTA */}
          <div className="text-center mt-12">
            <a
              href="https://wellysa.com/pobierz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-wellysa-green text-white rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors shadow-lg"
            >
Tu Znajdziesz Swoje Metryki – Sprawdź pełną wersję aplikacji
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
