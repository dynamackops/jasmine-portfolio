# jasmine-portfolio

React + Vite migration of jasminemack.netlify.app

## Project structure

```
src/
  App.jsx              ← page state lives here (change page = change this)
  main.jsx             ← entry point, don't touch
  styles/
    global.css         ← all CSS, exact copy from original
  hooks/
    useFadeUp.js       ← scroll animation logic
  components/
    Nav.jsx            ← shared navigation bar
  pages/
    Hub.jsx            ← landing page + rooms
    Work.jsx           ← Work & AI room
    Give.jsx           ← Give & Advocate room
    Create.jsx         ← Create & Life room
    Write.jsx          ← Write & Voice room
```

## Setup

```bash
npm install
npm run dev
```

## Deploy to Netlify

1. Push to GitHub
2. Connect repo in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

Or drag the `dist` folder into Netlify's manual deploy.

## Editing a room

Each room is its own file. To edit the Work page, open `src/pages/Work.jsx` — that's it.
No scrolling through 935 lines.

## Adding a new section

1. Open the relevant page file (e.g. `Work.jsx`)
2. Add your new section JSX after the existing sections
3. Add any new CSS classes to `src/styles/global.css`
4. `npm run dev` to preview

## Notes

- CSS is unchanged from the original — same classes, same variables, same design
- `goTo(pageName)` navigates between rooms — pass it as a prop where needed
- `useFadeUp()` hook handles all scroll animations — call it once at the top of each page component
