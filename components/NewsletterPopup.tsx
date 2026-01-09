'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const socialLinks = {
  facebook: 'https://facebook.com/wellysa',
  instagram: 'https://instagram.com/wellysa',
  linkedin: 'https://linkedin.com/company/wellysa',
  youtube: 'https://youtube.com/@wellysa',
  tiktok: 'https://tiktok.com/@wellysa',
  twitter: 'https://twitter.com/wellysa',
};

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Show popup after 30 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Integrate with newsletter service
    alert('Dziękujemy za zapisanie się do newslettera!');
    setEmail('');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setIsVisible(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg p-8 max-w-md w-full"
          >
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Bądź na Bieżąco z Wellysa
            </h3>
            <p className="text-gray-600 mb-6">
              Zapisz się do newslettera i śledź nas w mediach społecznościowych
            </p>

            <form onSubmit={handleSubmit} className="mb-6">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Twój email"
                  required
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wellysa-green"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-wellysa-green text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  Zapisz
                </button>
              </div>
            </form>

            <div className="border-t pt-6">
              <p className="text-sm text-gray-600 mb-4 text-center">
                Śledź nas w mediach społecznościowych:
              </p>
              <div className="flex justify-center gap-4">
                {Object.entries(socialLinks).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:scale-110 transition-transform"
                    aria-label={platform}
                  >
                    {platform === 'facebook' && '📘'}
                    {platform === 'instagram' && '📷'}
                    {platform === 'linkedin' && '💼'}
                    {platform === 'youtube' && '📺'}
                    {platform === 'tiktok' && '🎵'}
                    {platform === 'twitter' && '🐦'}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
