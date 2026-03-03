# Laboratorio 4 - JavaScript (Disci-app)

Web-app hecha con **HTML + CSS + JavaScript puro** (sin librerías/frameworks) para gamificar hábitos usando misiones, XP global y rangos.  
Requisitos del laboratorio: crear misiones con nombre/descripcion/dificultad, asignar XP por dificultad, sumar XP global solo con actividades terminadas, elegir 3 categorías por XP, `console.log` por misión creada, mostrar misiones en lista, y marcar misión como **SUCCESFUL** al completarla.  

## Estructura del repo

- `app/` código fuente (no hay archivos de código en el root)
  - `index.html`
  - `styles.css`
  - `main.js`
- `docs/screenshots/` capturas (colócalas aquí y referencia en este README)
- `.gitignore`
- `README.md`

## Cómo correrlo

Opción A (rápida):
1. Abre `app/index.html` en tu navegador (doble click o “Open with…”).

Opción B (opcional, puntos extra con nginx):
1. Instala nginx con Homebrew: `brew install nginx`
2. Copia la carpeta `app` al root público de nginx (puede variar según tu setup). Ejemplo común en mac:
   ```bash
   PREFIX="$(brew --prefix)"
   sudo rm -rf "$PREFIX/var/www/lab4-js"
   sudo cp -R ./app "$PREFIX/var/www/lab4-js"
   brew services restart nginx
   ```
3. Abre la URL que tengas configurada (ejemplo frecuente): `http://localhost:8080/lab4-js/index.html`

## Qué debo demostrar en el video

- Crear misiones con nombre, descripción y dificultad.
- Mostrar que cada dificultad asigna XP: Fácil 10, Normal 25, Difícil 50.
- Mostrar el `console.log` que imprime el objeto de la misión al crearla.
- Mostrar la lista de misiones en pantalla.
- Marcar una misión como terminada y que quede con estado **SUCCESFUL**.
- Mostrar que el XP global sube solo con misiones terminadas.
- Mostrar cómo cambia el rango según el XP global.

## Capturas sugeridas (para la entrega)

Guarda imágenes en `docs/screenshots/` y agrega aquí enlaces:
- Pantalla principal con XP y rango
- Formulario con datos
- Lista con varias misiones
- Al menos una misión en estado **SUCCESFUL**
- Consola mostrando el `console.log` de una misión creada

## Commits mínimos (ejemplo)

1. `chore: estructura inicial + README + .gitignore`
2. `feat: crear misiones y renderizar lista`
3. `feat: completar misiones, XP global y rangos (localStorage)`

## Autor
- Tu nombre aquí
