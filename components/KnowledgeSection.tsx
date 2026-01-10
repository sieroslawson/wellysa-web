'use client';

import { motion } from 'framer-motion';

const knowledgeItems = [
  {
    category: 'Statystyki',
    icon: '📊',
    description: 'Dane i analizy dotyczące zdrowia populacji',
  },
  {
    category: 'Organizator procesu',
    icon: '🏥',
    description: 'Jak działa ekosystem Wellysa',
  },
  {
    category: 'Partnerzy',
    icon: '🤝',
    description: 'Synevo, Klienci medyczni i inni partnerzy',
  },
  {
    category: 'Produkty',
    icon: '🧬',
    description: 'Geny, Pierwiastki, HUK i inne badania',
  },
  {
    category: 'Legals',
    icon: '📋',
    description: 'Polityka prywatności, regulaminy',
  },
];

export default function KnowledgeSection() {
  return (
    <section id="wiedza" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gray-900"
        >
          WIEDZA - Wikipedia Ekosystemu Wellysa
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {knowledgeItems.map((item, idx) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{item.category}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wellysa.com/pobierz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-wellysa-green text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
          >
Sprawdź pełną wersję aplikacji
          </a>
        </div>
      </div>
    </section>
  );
}
