# Lab 4 - JavaScript | Disci-app

Disci-app is a web application built with plain HTML, CSS, and JavaScript. It allows users to create missions with a name, description, and difficulty, automatically assigns XP, and accumulates global XP only when a mission is completed. It also includes rank levels based on total XP and a button to reset everything.

## Main features

- Create missions with:
  - Name
  - Description
  - Difficulty: Easy, Normal, Hard
- XP per difficulty:
  - Easy: 10 XP
  - Normal: 25 XP
  - Hard: 50 XP
- When a mission is created, a `console.log` prints the mission object.
- Missions are displayed in a list.
- Each mission can be marked as completed and its status becomes **SUCCESFUL**.
- Global XP only sums XP from missions with **SUCCESFUL** status.
- Ranks based on global XP:
  - 0 to 49: Normal
  - 50 to 119: Disciplined
  - 120 or more: Legendary
- **Reset All** button to clear missions and reset XP and rank.
- Data persistence using `localStorage` so missions remain after reloading the page.

## Project structure

- `app/`
  - `index.html` Application UI: form to create missions, stats section, and mission list.
  - `styles.css` Visual styling for the application.
  - `main.js` Application logic: mission creation, XP, ranks, status updates, filters, persistence, and reset.
- `docs/`
  - `screenshots/` Folder intended for screenshots of the app running.
- `README.md` Project documentation.
- `.gitignore` Rules to ignore unnecessary files in the repository.

## How to run the app

Option 1
- Open `app/index.html` in a web browser.

Option 2
- Start a local server with Python and open it in the browser:
  - From the project root run:
    - `python3 -m http.server 8000`
  - Open:
    - `http://localhost:8000/app/`
## Ss
<img width="1030" height="851" alt="Captura de pantalla 2026-03-03 a la(s) 4 04 21 p  m" src="https://github.com/user-attachments/assets/444343ea-0d4a-4168-bf8f-050cffa3f732" />
<img width="1027" height="941" alt="Captura de pantalla 2026-03-03 a la(s) 4 04 34 p  m" src="https://github.com/user-attachments/assets/4d1e4e8c-511e-4b01-822f-7de403e25c9c" />
<img width="1001" height="936" alt="Captura de pantalla 2026-03-03 a la(s) 4 04 49 p  m" src="https://github.com/user-attachments/assets/539b88b8-541c-4d09-a7ac-d323611fa1c7" />
<img width="1006" height="1086" alt="Captura de pantalla 2026-03-03 a la(s) 4 04 58 p  m" src="https://github.com/user-attachments/assets/3ffadb73-b34d-4681-8e39-69eb52e0c12a" />
<img width="1006" height="1226" alt="Captura de pantalla 2026-03-03 a la(s) 4 05 11 p  m" src="https://github.com/user-attachments/assets/6c89e39f-523b-41cb-9065-5e74636c2911" />







## Video on Youtube
https://youtu.be/uCkMjRCEiWU
