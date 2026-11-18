# Gift Bytes Productions

Marketing site for Gift Bytes Productions, a German studio for games, apps, and media. One page: hero, games, studio, the Byteflip demo, principles, latest work, testimonials, and FAQ.

The site is a Vite app with React, TypeScript, and Material UI. Copy lives in `src/locales` and is loaded with i18next. English is the fallback language.

## Run it

Node.js 20.19 or newer is required (22.12 or newer also works). From this folder:

```powershell
npm ci
npm run dev
```

Open http://127.0.0.1:5173/. Full install, build, preview, and typecheck commands are in [docs/commands.md](docs/commands.md).

## Layout

| Path | What it is |
| --- | --- |
| `index.html` | Page shell, title, and social preview tags |
| `src/index.tsx` | App entry |
| `src/home-page.tsx` | Section order |
| `src/sections/` | One file per section, including the Byteflip demo |
| `src/locales/` | One JSON file per language. English is `en.json` |
| `src/i18n.ts` | Language detection and lazy loading |
| `src/theme/` | Colors, light and dark mode |
| `public/` | Images, icons, and the public legal pages |
| `docs/legal/` | Source copies of the legal pages |

Header links scroll to section ids: `download`, `studio`, `demo`, `principles`, `latest`, `testimonials`, `faq`.

## Copy

Add a string in `src/locales/en.json` first, under the `translation` object. Then add the same key to every other file in `src/locales`. Missing keys fall back to English. Keep the files as UTF-8 with Windows line endings (`CRLF`), which is how they are stored today.
