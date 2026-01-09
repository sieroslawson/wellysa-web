# Wdrożenie Wellysa.com Online

## Opcja 1: Vercel (Rekomendowane - Najprostsze)

Vercel to platforma stworzona przez twórców Next.js - oferuje darmowy hosting i automatyczne deploje.

### Kroki:

1. **Zarejestruj się na Vercel:**
   - Przejdź na https://vercel.com
   - Zaloguj się przez GitHub (użyj tego samego konta co do repo)

2. **Dodaj projekt:**
   - Kliknij "Add New Project"
   - Wybierz repozytorium `Wellysa/docs`
   - W ustawieniach projektu:
     - **Root Directory:** `wellysa-web`
     - **Framework Preset:** Next.js (auto-detect)
     - **Build Command:** `npm run build` (auto)
     - **Output Directory:** `.next` (auto)

3. **Dodaj zmienne środowiskowe:**
   - W ustawieniach projektu → Environment Variables
   - Dodaj:
     ```
     NEXT_PUBLIC_INTERCOM_APP_ID=twoj_intercom_app_id
     NEXT_PUBLIC_GA_ID=twoj_google_analytics_id (opcjonalnie)
     ```

4. **Deploy:**
   - Kliknij "Deploy"
   - Vercel automatycznie zbuduje i wdroży projekt
   - Otrzymasz URL: `https://wellysa-web-xxx.vercel.app`

5. **Domena własna (opcjonalnie):**
   - W ustawieniach projektu → Domains
   - Dodaj domenę `wellysa.com`
   - Skonfiguruj DNS zgodnie z instrukcjami Vercel

### Automatyczne deploje:
- Każdy push do brancha `LeslawSandbox` automatycznie wdroży nową wersję
- Możesz ustawić produkcję na branch `main`

---

## Opcja 2: Netlify

1. Przejdź na https://netlify.com
2. Zaloguj się przez GitHub
3. "Add new site" → "Import an existing project"
4. Wybierz repo i ustaw:
   - **Base directory:** `wellysa-web`
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`

---

## Opcja 3: Cloudflare Pages

1. Przejdź na https://pages.cloudflare.com
2. Połącz z GitHub
3. Wybierz repo i ustaw:
   - **Framework preset:** Next.js
   - **Build command:** `npm run build`
   - **Root directory:** `wellysa-web`

---

## Szybki Deploy przez Vercel CLI (Alternatywa)

Jeśli masz zainstalowany Vercel CLI:

```bash
cd wellysa-web
npm i -g vercel
vercel
```

Postępuj zgodnie z instrukcjami w terminalu.

---

## Po wdrożeniu:

1. ✅ Sprawdź czy strona działa
2. ✅ Skonfiguruj Intercom (dodaj App ID)
3. ✅ Dodaj Google Analytics (opcjonalnie)
4. ✅ Skonfiguruj domenę własną (jeśli potrzebna)
5. ✅ Testuj wszystkie sekcje i funkcjonalności

---

## Troubleshooting:

**Problem:** Build fails
- Sprawdź czy wszystkie zależności są w `package.json`
- Sprawdź logi build w Vercel dashboard

**Problem:** Strona nie ładuje się
- Sprawdź czy zmienne środowiskowe są ustawione
- Sprawdź console w przeglądarce

**Problem:** Intercom nie działa
- Upewnij się że `NEXT_PUBLIC_INTERCOM_APP_ID` jest ustawione
- Sprawdź czy App ID jest poprawne
