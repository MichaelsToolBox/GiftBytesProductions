# Developer commands

Run these from the `giftbytesproductions` folder, the one that contains `package.json`.

Node.js 20.19 or newer is required. Vite 7 does not start on older Node versions. 22.12 or newer is also fine.

## Install

Use the lockfile so everyone gets the same packages:

```powershell
npm ci
```

`npm install` is only for when you are intentionally changing dependencies. After that, commit the updated `package-lock.json` with the dependency change.

## Local site

```powershell
npm run dev
```

Vite prints a local URL, usually http://127.0.0.1:5173/. Saving a file in `src` reloads the page.

To pin the address:

```powershell
npm run dev -- --host 127.0.0.1 --port 5173
```

Stop the server with Ctrl+C in that terminal.

## Production build

```powershell
npm run build
```

Output goes to `dist/`. The files there are minified, and this project does not emit source maps, so the production bundle is not the readable source from `src/`. The browser still has to receive the program in order to run the page. Serve `dist/` to check the built site:

```powershell
npm run preview
```

## Typecheck

There is no `typecheck` script. This uses the project `tsconfig.json` and does not emit files:

```powershell
npx tsc --noEmit
```

`noUnusedLocals` and `noUnusedParameters` are on, so an unused import fails the check.

## Where to edit

| Task | Command or file |
| --- | --- |
| Change visible copy | `src/locales/en.json`, then the same key in the other locale files |
| Add a section | New file in `src/sections/`, then render it from `src/home-page.tsx` |
| Change colors or radius | `src/utils/themePrimitives.ts` and `src/theme/` |
| Change the page title or preview image | `index.html` |
