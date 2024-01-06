<!-- ### -->

---

### How to add live-server to project

```js
npm install live-server concurrently --save-dev
```

Adn then, add/modyfi this line

```js
"scripts": {
  "dev": "concurrently \"npx tailwindcss -i ./src/main.css -o ./dist/main.css --watch\" \"live-server --port=YOUR_PORT_NUMBER\""
}

```

---

**SPACING SYSTEM (px)**
_2 / 4 / 8 / 12 / 16 / 24 / 128_
**FONT SIZE SYSTEM (px)**
_10 / 12 / 14 / 16 / 18 / 62 / 74 / 86 / 98_
**MY FONT SIZE SYSTEM (px)**

_**H1** 47.78px / **H2** 39.81px / **H3** 33.18px /**H4** 27.65px / **H5** 23.04px / **H6** 19.2px / **P** 16px / **SMALL** 13.33px_

go to https://typescale.com/

---

# Fonts

Google fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
	href="https://fonts.googleapis.com/css2?family=Arimo:wght@400;500;700&family=Source+Sans+3:wght@500;700&display=swap"
	rel="stylesheet" />
```

css

```css
font-family: 'Arimo', sans-serif;
font-family: 'Source Sans 3', sans-serif;
```

---
