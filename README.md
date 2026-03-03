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


## Video
