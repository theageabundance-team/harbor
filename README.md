# Harbor

Harbor is a daily devotional web app: ask any question about the Bible and
get clear, Scripture-based answers, plus a daily reading, guided prayers, and
worship music — all in one quiet place.

Built with Next.js (App Router) + Tailwind CSS, ready to deploy on Vercel.

## Features

- **Ask the Bible** — a chat interface backed by Claude (Anthropic) that
  answers questions about Scripture, grounded in Bible references.
- **Daily Reading** — a 14-day rotating devotional plan using the World
  English Bible (public domain), with an original reflection and prayer
  prompt for each day.
- **Guided Prayer** — six original guided prayers for different moods
  (gratitude, anxiety, weariness, overwhelm, morning, evening).
- **Worship** — a curated set of worship songs, streamed directly from their
  official YouTube channels (Harbor doesn't host any audio/video itself).
- **Entry screen** — visitors enter with their name and email. This is a
  soft gate (no verification against a purchase list) — see "Adding real
  purchase verification" below if you want to restrict access later.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Connecting the Bible AI

"Ask the Bible" needs an Anthropic API key to give live answers. Without one,
it shows a friendly placeholder message instead of erroring.

1. Get a key at [console.anthropic.com](https://console.anthropic.com/settings/keys).
2. Copy `.env.example` to `.env.local` and paste your key:
   ```bash
   cp .env.example .env.local
   ```
3. Restart `npm run dev`.

## Deploying to Vercel

1. Push this repository to GitHub (already set up at
   `theageabundance-team/harbor`).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Add the `ANTHROPIC_API_KEY` environment variable in the Vercel project
   settings (Settings → Environment Variables).
4. Deploy. Vercel will auto-detect Next.js — no extra configuration needed.

Every future push to the main branch will auto-deploy.

## Project structure

```
src/
  app/
    page.tsx                 Landing + entry screen
    actions.ts                Server actions (enter / leave)
    api/ask/route.ts          Bible AI endpoint (Claude)
    dashboard/
      layout.tsx               Sidebar / mobile nav, session check
      page.tsx                 Dashboard home
      ask/                     Ask the Bible
      reading/                 Daily Reading
      prayer/                  Guided Prayer
      worship/                 Worship
  components/                 UI components
  data/                       Readings, prayers, worship track lists
  lib/session.ts              Cookie-based session helpers
  proxy.ts                    Protects /dashboard routes
```

## Adding real purchase verification

Right now, anyone who enters a name and email reaches the dashboard. If you
later want to restrict access to actual buyers (e.g. from Hotmart, Kiwify, or
Stripe), the place to add that check is `enterHarbor` in
[`src/app/actions.ts`](src/app/actions.ts) — look up the submitted email
against your buyer list (a database table, a synced spreadsheet, or your
payment provider's API) before setting the session cookie, and return an
error if it isn't found.

## Content & licensing notes

- Scripture text is the **World English Bible (WEB)**, which is in the
  public domain.
- Reflections and guided prayers are original writing for Harbor.
- Worship videos are embedded from official artist/label YouTube uploads —
  swap the `youtubeId` values in [`src/data/worship.ts`](src/data/worship.ts)
  if you'd like a different lineup.
