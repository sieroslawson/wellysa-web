# Instrukcja Wdrożenia Wellysa.com

## Wymagania

- Node.js 18+
- npm lub yarn

## Instalacja

1. Zainstaluj zależności:
```bash
npm install
```

2. Skonfiguruj zmienne środowiskowe:
```bash
cp .env.example .env.local
```

Edytuj `.env.local` i uzupełnij:
- `NEXT_PUBLIC_INTERCOM_APP_ID` - ID aplikacji Intercom
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID (opcjonalnie)
- Linki do App Store
- Linki do social media

3. Uruchom serwer deweloperski:
```bash
npm run dev
```

Strona dostępna pod: http://localhost:3000

## Build Produkcyjny

```bash
npm run build
npm start
```

## Integracje

### Intercom (Chatbot)

1. Utwórz konto na Intercom
2. Pobierz App ID
3. Dodaj do `.env.local` jako `NEXT_PUBLIC_INTERCOM_APP_ID`
4. Wytrenuj bota na danych Wellysa (koszty, partnerzy, laboratoria, produkty)

### Formularze (Klikam lub inny)

1. Skonfiguruj serwis formularzy
2. Dodaj URL do `.env.local` jako `NEXT_PUBLIC_FORM_SERVICE_URL`
3. Zaktualizuj `CollaborationSection.tsx` z endpointami

### Analytics

1. Dodaj Google Analytics ID do `.env.local`
2. Dodaj Google Tag Manager do `app/layout.tsx` jeśli potrzebne

## Wdrożenie

### Vercel (Rekomendowane)

1. Połącz repozytorium z Vercel
2. Dodaj zmienne środowiskowe w ustawieniach projektu
3. Deploy automatyczny przy każdym pushu

### Inne platformy

Projekt Next.js można wdrożyć na:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Własny serwer (Node.js)

## SEO

- Sitemap automatycznie generowany: `/sitemap.xml`
- Robots.txt: `/robots.txt`
- Metadata w `app/layout.tsx`
- Open Graph tags skonfigurowane

## Następne Kroki

1. Zastąp placeholder Ludzika prawdziwym obrazem/komponentem
2. Dodaj prawdziwe obrazy i grafiki
3. Wytrenuj Intercom bota na danych Wellysa
4. Zintegruj z formularzami (Klikam)
5. Dodaj tracking (Google Analytics, etc.)
6. Testuj na różnych urządzeniach
7. Optymalizuj obrazy i performance
