'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const collaborationTypes = [
  {
    id: 'klient',
    title: 'Klient',
    description: 'Jesteś zainteresowany usługami Wellysa?',
    cta: 'Pobierz Apkę',
    icon: '👤',
  },
  {
    id: 'agent',
    title: 'Agent/Partner',
    description: 'Chcesz zostać partnerem Wellysa?',
    cta: 'Zostań Partnerem',
    icon: '🤝',
  },
  {
    id: 'punkt',
    title: 'Punkt Poboru',
    description: 'Masz punkt poboru i chcesz współpracować?',
    cta: 'Zostań Punktem Poboru',
    icon: '🏥',
  },
  {
    id: 'inwestor',
    title: 'Inwestor/Media',
    description: 'Jesteś inwestorem lub mediami?',
    cta: 'Skontaktuj Się',
    icon: '📰',
  },
];

export default function CollaborationSection() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Integrate with form service (e.g., Klikam)
    alert('Formularz został wysłany. Dziękujemy za zainteresowanie!');
    setSelectedType(null);
  };

  return (
    <section id="wspolpraca" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gray-900"
        >
          WSPÓŁPRACA
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {collaborationTypes.map((type) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => {
                  if (type.id === 'klient') {
                    window.open('https://wellysa.com/pobierz', '_blank');
                  } else {
                    setSelectedType(type.id);
                  }
                }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer border-2 border-transparent hover:border-wellysa-green"
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <button className="px-6 py-2 bg-wellysa-green text-white rounded-lg hover:bg-green-600 transition-colors">
                  {type.cta}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Form Modal */}
          {selectedType && selectedType !== 'klient' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedType(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-lg p-8 max-w-md w-full"
              >
                <h3 className="text-2xl font-bold mb-4">
                  {collaborationTypes.find((t) => t.id === selectedType)?.title}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Imię i Nazwisko</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wellysa-green"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wellysa-green"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Telefon</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wellysa-green"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Wiadomość</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wellysa-green"
                    />
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="flex-1 px-6 py-2 bg-wellysa-green text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                      Wyślij
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedType(null)}
                      className="flex-1 px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Anuluj
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
