# Jash Panchal | A Mind in Progress

Personal portfolio built with **Next.js 14 (App Router), React 18 and TypeScript**.
Black, white and orange only. Orange is used for the string and for lines, never for text or backgrounds.

## Run it locally

```bash
npm install
npm run dev          # http://localhost:3000
```

Other scripts: `npm run typecheck`, `npm run lint`, `npm run build` (static site in `out/`).

## Push it to GitHub

```bash
git init
git add .
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Put it online

- **Netlify:** New site from Git, pick the repository. `netlify.toml` already sets the build command and the publish folder (`out`).
- **Vercel:** Import the repository. No settings are needed.

## Project structure

```
app/
  layout.tsx          fonts, metadata, page shell
  page.tsx            section order
  globals.css         all styles (palette, layout, animations)
components/
  Intro.tsx           signature opening
  Signature.tsx       draws the signature stroke
  Nav.tsx             navigation and mobile menu
  Thread.tsx          the orange string and its waypoints (<Wp />)
  Hero.tsx            opening headline
  Statement.tsx       Curious / Multidisciplinary / Technological rows
  About.tsx           about text and staggered boxes
  Education.tsx       education journey with the wrapped string
  Sections.tsx        Experience, Projects, Skills, Recognition, Interests
  Contact.tsx         contact text, LinkedIn and Instagram
  Closing.tsx         closing line, hook, pull string and email board
  Reveal.tsx, Head.tsx, JsFlag.tsx
lib/
  content.ts          all text lives here, edit this to update the site
  signature.ts        signature path (replace with a traced path of your real signature)
  util.ts
```

## Editing

- Change any wording, dates or lists in `lib/content.ts`.
- To add a project, add an entry to `PROJECTS` in `lib/content.ts`.
- The string passes through every `<Wp />` marker in page order. Move or add markers to change its route.
- Layering, back to front: section backgrounds, the string, then all text. The string always passes behind text.

## Notes

- Animations respect `prefers-reduced-motion`. The intro can be skipped (Skip button, Enter, Space or Esc).
- Nothing on the site is invented. Entries marked "Demo" are demo builds that have not been launched.
- The email board opens the visitor's own email app. Your address is not printed on the page.
