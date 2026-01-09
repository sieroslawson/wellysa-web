'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const onboardingSteps = [
  {
    id: 1,
    title: 'Witaj w Wellysa',
    content: 'Twój osobisty asystent zdrowia, który pomoże Ci dbać o zdrowie każdego dnia.',
    image: '👋',
  },
  {
    id: 2,
    title: 'Proste Badania',
    content: 'Zamawiaj badania laboratoryjne i genetyczne w prosty sposób, bez wychodzenia z domu.',
    image: '🧬',
  },
  {
    id: 3,
    title: 'Inteligentna Analiza',
    content: 'Otrzymuj spersonalizowane rekomendacje zdrowotne na podstawie Twoich wyników.',
    image: '📊',
  },
  {
    id: 4,
    title: 'Asystent 24/7',
    content: 'Nasz asystent AI jest dostępny całą dobę, aby odpowiedzieć na Twoje pytania.',
    image: '💬',
  },
  {
    id: 5,
    title: 'Twoje Metryki',
    content: 'Śledź swoje parametry zdrowotne w czasie i obserwuj postępy.',
    image: '📈',
  },
  {
    id: 6,
    title: 'Gotowy?',
    content: 'Pobierz aplikację i rozpocznij swoją podróż ze zdrowiem już dziś!',
    image: '🚀',
  },
];

export default function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const nextStep = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Last step - redirect to app
      window.open('https://apps.apple.com/app/wellysa', '_blank');
      setIsOpen(false);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const openOnboarding = () => {
    setIsOpen(true);
    setCurrentStep(0);
  };

  return (
    <>
      {/* Trigger button - can be placed anywhere */}
      <button
        onClick={openOnboarding}
        className="hidden"
        id="onboarding-trigger"
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg p-8 max-w-md w-full"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="text-center"
                >
                  <div className="text-6xl mb-6">{onboardingSteps[currentStep].image}</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {onboardingSteps[currentStep].title}
                  </h3>
                  <p className="text-gray-600 mb-8">
                    {onboardingSteps[currentStep].content}
                  </p>

                  {/* Progress dots */}
                  <div className="flex justify-center gap-2 mb-6">
                    {onboardingSteps.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-2 h-2 rounded-full ${
                          idx === currentStep ? 'bg-wellysa-green' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Navigation buttons */}
                  <div className="flex gap-4">
                    {currentStep > 0 && (
                      <button
                        onClick={prevStep}
                        className="flex-1 px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                      >
                        Wstecz
                      </button>
                    )}
                    <button
                      onClick={nextStep}
                      className="flex-1 px-6 py-2 bg-wellysa-green text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                      {currentStep === onboardingSteps.length - 1 ? 'Pobierz Apkę' : 'Dalej'}
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>

              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
