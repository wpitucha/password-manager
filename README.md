# Password Manager
Projekt grupowy – menedżer haseł z analizą siły haseł i wykrywaniem wycieków.

## Funkcje:
- przechowywanie haseł
- analiza siły hasła
- sprawdzanie wycieków (np. API haveibeenpwned)
- logowanie użytkownika

## Technologie:
- Node.js (backend)
- React (frontend)
- MongoDB / SQLite

## Jak uruchomić:

- Na początek zainstalować w systmie, node, npm, express /jeśli nie ma/

Sprawdzenie instalacji:

- node -v
- npm -v

jesli nic nie zwróci, instalujemy pakiety (linux):

- apt install nodejs
- apt install npm

- Wejdź do katalogu projektu

cd password-manager/backend

/pakiet express instalujemy już lokalnie

npm install express

- Uruchomienie backend'u:

node src/app.js

Sprawdzić czy działa w przeglądarce:

http://localhost:3000

Powinieneś zobaczyć:

Backend działa!



