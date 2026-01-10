'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Assistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: 'assistant' | 'user'; content: string }>>([
    {
      role: 'assistant',
      content: 'Witaj, oto Wellysa. Twój osobisty asystent zdrowia. Podaj wiek i płeć, aby sprawdzić Twoje zalecenia zdrowotne lub zadaj asystentowi inne pytanie.',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { role: 'user', content: inputValue }]);

    // Simulate AI response (replace with actual Intercom/API integration)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Dziękuję za pytanie. To jest testowa rozmowa dająca przedsmak doświadczenia wellysa. Aby uzyskać pełną pomoc, pobierz aplikację i zarejestruj konto.',
        },
      ]);
    }, 1000);

    setInputValue('');
  };

  return (
    <section id="asystent" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            Asystent Wellysa
          </h2>

          {/* Disclaimer */}
          {showDisclaimer && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-yellow-50 border-l-4 border-wellysa-yellow p-4 mb-6 rounded"
            >
              <p className="text-sm text-gray-700">
                <strong>Uwaga:</strong> To jest testowa rozmowa dająca przedsmak doświadczenia wellysa. 
                Nie jest to porada medyczna (ponieważ nie masz jeszcze konta), a Twoje odpowiedzi nie są zapisywane.
              </p>
              <button
                onClick={() => setShowDisclaimer(false)}
                className="mt-2 text-sm text-wellysa-green hover:underline"
              >
                Rozumiem
              </button>
            </motion.div>
          )}

          {/* Chat Interface */}
          <div className="bg-white rounded-lg shadow-xl p-6 min-h-[400px] flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto mb-4 space-y-4">
              <AnimatePresence>
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-4 rounded-lg ${
                        msg.role === 'user'
                          ? 'bg-wellysa-green text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p>{msg.content}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Zadaj pytanie..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wellysa-green"
              />
              <button
                onClick={handleSend}
                className="px-6 py-2 bg-wellysa-green text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                Wyślij
              </button>
            </div>
          </div>

          {/* CTA to App */}
          <div className="text-center mt-6">
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
      </div>
    </section>
  );
}
