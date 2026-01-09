# Struktura Projektu Wellysa.com

## Przegląd

Projekt zbudowany w Next.js 14 z App Router, TypeScript i Tailwind CSS.

## Struktura Folderów

```
wellysa-web/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Główny layout z metadata SEO
│   ├── page.tsx           # Strona główna
│   ├── globals.css        # Globalne style
│   ├── sitemap.ts         # Automatyczny sitemap
│   └── robots.ts          # Robots.txt
│
├── components/             # Komponenty React
│   ├── Hero.tsx           # Ekran powitalny z Ludzikiem
│   ├── MainNavigation.tsx  # Główne menu (5 ikon)
│   ├── Assistant.tsx      # Interaktywny chatbot
│   ├── KnowledgeSection.tsx    # Sekcja WIEDZA
│   ├── ResultsSection.tsx      # Sekcja WYNIKI (wyblurowane)
│   ├── ProfileSection.tsx      # Sekcja PROFIL (wyblurowane)
│   ├── CollaborationSection.tsx # Sekcja WSPÓŁPRACA
│   ├── NewsletterPopup.tsx      # Popup newslettera (po 30s)
│   ├── OnboardingFlow.tsx      # 6 ekranów onboardingowych
│   └── IntercomProvider.tsx    # Provider dla Intercom
│
├── lib/                    # Utilities i helpers
│   ├── config.ts          # Centralna konfiguracja
│   └── qr-tracking.ts     # Tracking QR kodów
│
├── public/                 # Statyczne pliki
│   └── (obrazy, ikony, etc.)
│
└── Konfiguracja
    ├── package.json
    ├── tsconfig.json
    ├── next.config.js
    ├── tailwind.config.js
    └── .env.example
```

## Główne Komponenty

### Hero (Ekran Powitalny)
- Ludzik (Avatar) - zawsze zielony na web
- Główne CTA: "Pobierz Apkę" i "Poznaj Wellysa"
- Animacje z Framer Motion

### MainNavigation
- 5 głównych ikon: PROFIL, WIEDZA, ASYSTENT, WYNIKI, WSPÓŁPRACA
- Sticky navigation
- ASYSTENT otwiera Intercom chat

### Assistant
- Interaktywny chatbot
- Disclaimer o testowej rozmowie
- Integracja z Intercom (do skonfigurowania)
- CTA do pobrania aplikacji

### KnowledgeSection
- Wikipedia ekosystemu Wellysa
- Kafelki: Statystyki, Organizator, Partnerzy, Produkty, Legals

### ResultsSection
- Wyblurowane wizualizacje:
  - Genogram
  - Metryki Krwi
  - Metryki DNA
- CTA: "Tu Znajdziesz Swoje Metryki – Pobierz Apkę"

### ProfileSection
- Wyblurowane dane profilowe
- Pokazuje co użytkownik zyska po rejestracji

### CollaborationSection
- 4 typy współpracy:
  - Klient → Pobierz Apkę
  - Agent/Partner → Formularz
  - Punkt Poboru → Formularz
  - Inwestor/Media → Formularz

### NewsletterPopup
- Pojawia się po 30 sekundach
- Formularz newslettera
- Linki do social media

### OnboardingFlow
- 6 ekranów wprowadzających
- Ostatni ekran → przekierowanie do App Store

## Integracje

### Intercom
- Chatbot AI
- Konfiguracja w `IntercomProvider.tsx`
- Wymaga App ID w `.env.local`

### Formularze
- Integracja z serwisem formularzy (np. Klikam)
- Używane w `CollaborationSection`

### QR Tracking
- Wszystkie QR kody z trackingiem
- Utility w `lib/qr-tracking.ts`

## SEO

- Metadata w `app/layout.tsx`
- Automatyczny sitemap
- Robots.txt
- Open Graph tags
- Structured data (można dodać)

## Branding

Kolory Wellysa (zdefiniowane w Tailwind):
- Green: `#4CAF50`
- Red: `#F44336`
- Yellow: `#FFC107`

## Następne Kroki

1. Zastąp placeholder Ludzika prawdziwym komponentem/obrazem
2. Dodaj prawdziwe obrazy i grafiki
3. Skonfiguruj Intercom z App ID
4. Wytrenuj Intercom bota na danych Wellysa
5. Zintegruj formularze z serwisem (Klikam)
6. Dodaj Google Analytics
7. Testuj responsywność
8. Optymalizuj performance
9. Dodaj więcej treści do sekcji WIEDZA
10. Zaimplementuj integrację z WAP (opcjonalnie)
