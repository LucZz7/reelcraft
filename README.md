# ReelCraft Studio — AI Reel Factory

A 100% free, fully client-side "text-to-reel" generator. Type a topic in **Hindi, Marathi or English**,
pick a tone and duration — get a complete reel package in under a minute:

- **Script engine** — hook + value scenes + CTA, written from real per-language / per-tone template banks
- **Voiceover preview** — Web Speech API with automatic Hindi/Marathi voice selection
- **Vertical video** — animated 1080×1920 canvas with kinetic typography, progress bar, scene counter
- **4 premium templates** — Bold Red, Dark Premium, Neon Glow, Minimal White
- **Record & download** — canvas.captureStream + MediaRecorder → `.webm` file, ready for Instagram Reels
- **Caption + 20 hashtags** — generated per language, one-tap copy buttons
- **Zero backend** — no servers, no API keys, no sign-up. Your topics never leave the browser.

## Pages

| File | What |
|---|---|
| `index.html` | Landing: hero with live demo phone, features, 3-step how-it-works, template gallery, FAQ, CTA |
| `studio.html` | The generator app |
| `css/style.css` | Glassmorphism design system (red/black/white) |
| `js/app.js` | Script engine, voice, canvas renderer, recorder |
| `js/landing.js` | Landing interactions |

## Deploy

### GitHub Pages (free)
1. Create a new **public** repo, upload all files to the repo root (or `main` branch).
2. Repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main` → folder `/ (root)` → Save.
3. Your site is live at `https://<you>.github.io/<repo>/` in ~1 minute.
   (The `.nojekyll` file is included so GitHub serves everything as-is.)

### Vercel (free)
1. Push the same files to a GitHub repo.
2. [vercel.com](https://vercel.com) → **Add New → Project** → import the repo → Deploy.
   `vercel.json` is included (static config, clean URLs). No build step needed.

## Free-tier notes

- Everything runs on built-in browser APIs — there is **nothing to pay for**, ever, for the site itself.
- Voiceover uses the device's own TTS voices (free, offline-capable). Quality varies by device; Chrome/Edge on Android and desktop have the best Hindi/Marathi voices.
- Recording uses `MediaRecorder` → `.webm`. Best in **Chrome / Edge** (desktop or Android). Safari and Firefox may lack canvas recording support — the app shows a friendly message in that case.
- The downloaded `.webm` uploads directly to Instagram Reels, YouTube Shorts and WhatsApp Status.

## Local development

```bash
cd reelcraft-website
python3 -m http.server 8000
# open http://localhost:8000/
```

## Browser support

| Feature | Chrome/Edge | Firefox | Safari |
|---|---|---|---|
| Script + preview | Yes | Yes | Yes |
| Voiceover | Yes | Partial | Partial |
| Record & download | Yes | Partial | No (graceful message) |
