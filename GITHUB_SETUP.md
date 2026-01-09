# Instrukcja - Przeniesienie do repozytorium GitHub (sieroslawson)

## Krok 1: Utwórz nowe repozytorium na GitHub

1. Przejdź na https://github.com/sieroslawson
2. Kliknij "New repository" (lub przejdź do https://github.com/new)
3. Wypełnij:
   - **Repository name:** `wellysa-web` (lub inna nazwa)
   - **Description:** "Wellysa.com - Main website and first contact center"
   - **Visibility:** Public lub Private (według preferencji)
   - **NIE zaznaczaj** "Initialize with README" (repo już ma pliki)
4. Kliknij "Create repository"

## Krok 2: Połącz lokalne repozytorium z GitHub

Po utworzeniu repozytorium GitHub pokaże Ci instrukcje. Użyj tych komend:

```bash
cd /Users/leslawsierocki/Desktop/Repo\ GitHub\ Wellysa\ Docs/docs/wellysa-web

# Dodaj remote (zastąp YOUR_USERNAME nazwą użytkownika sieroslawson)
git remote add origin https://github.com/sieroslawson/wellysa-web.git

# Zmień nazwę brancha na main (jeśli potrzebne)
git branch -M main

# Wypchnij kod
git push -u origin main
```

## Alternatywnie - przez SSH (jeśli masz skonfigurowane klucze):

```bash
git remote add origin git@github.com:sieroslawson/wellysa-web.git
git branch -M main
git push -u origin main
```

## Krok 3: Weryfikacja

Sprawdź czy kod jest na GitHub:
- Przejdź na https://github.com/sieroslawson/wellysa-web
- Powinny być widoczne wszystkie pliki projektu

## Krok 4: Wdrożenie na Vercel

Teraz możesz wdrożyć z nowego repozytorium:

1. W Vercel wybierz "Import Git Repository"
2. Znajdź `sieroslawson/wellysa-web`
3. Root Directory: pozostaw puste (projekt jest już w root)
4. Kliknij "Deploy"

---

## Jeśli masz GitHub CLI zainstalowany:

Możesz utworzyć repo przez CLI:

```bash
gh repo create wellysa-web --public --source=. --remote=origin --push
```
