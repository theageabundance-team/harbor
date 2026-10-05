# Harbor

Harbor is a daily devotional web app (in French): ask any question about the
Bible and get clear, Scripture-based answers, plus a daily reading, guided
prayers, and worship music — all in one quiet place.

Built with Next.js (App Router) + Tailwind CSS, ready to deploy on Vercel.

## Features

- **Ask the Bible** — a chat interface backed by Claude (Anthropic) that
  answers questions about Scripture, grounded in Bible references.
- **Daily Reading** — a 14-day rotating devotional plan using the Bible
  Segond 1910 (French, public domain), with an original reflection and
  prayer prompt for each day.
- **Guided Prayer** — six original guided prayers for different moods
  (gratitude, anxiety, weariness, overwhelm, morning, evening).
- **Worship** — a curated set of worship songs, streamed directly from their
  official YouTube channels (Harbor doesn't host any audio/video itself).
- **Entry screen** — visitors enter with their name and email. This is a
  soft gate (no verification against a purchase list) — see "Adding real
  purchase verification" below if you want to restrict access later.
- **Admin panel** (`/dashboard/admin`) — visible only to the email set in
  `ADMIN_EMAIL` (defaults to `biafwrr@gmail.com`). Lists everyone who has
  signed in, with their purchase name, email, first sign-in date, last
  access, and total number of visits. See "Admin panel & making it
  persistent" below — it needs a real database to work reliably once
  deployed.

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
3. Add environment variables in the Vercel project settings (Settings →
   Environment Variables):
   - `ANTHROPIC_API_KEY` — for live Bible AI answers.
   - `ADMIN_EMAIL` — optional, only needed if the admin panel should use a
     different email than `biafwrr@gmail.com`.
4. Deploy. Vercel will auto-detect Next.js — no extra configuration needed.
5. Follow "Admin panel & making it persistent" below so the user list
   actually sticks around in production.

Every future push to the main branch will auto-deploy.

## Admin panel & making it persistent

The admin panel at `/dashboard/admin` currently stores its user list in a
JSON file on local disk (`.data/users.json`, managed by
[`src/lib/users-store.ts`](src/lib/users-store.ts)). That works fine for
local development, but **it will not reliably persist once deployed to
Vercel** — serverless functions each get their own short-lived filesystem,
so entries can silently disappear or vary depending on which instance
handles a request.

To make the user list durable in production, connect a real database and
swap the three functions in `src/lib/users-store.ts` (`recordLogin`,
`listUsers`, and the internal read/write helpers) for calls to it. Nothing
else in the app needs to change — `src/app/actions.ts` and the admin page
only ever call `recordLogin` / `listUsers`.

Recommended: **Upstash Redis**, since it's the least setup for this use case:

1. In your Vercel project, go to Storage → Browse Marketplace → Upstash →
   create a free Redis database, and connect it to the project (this adds
   the required environment variables automatically).
2. `npm install @upstash/redis`.
3. In `src/lib/users-store.ts`, replace the file read/write with
   `Redis.fromEnv()` and use a Redis hash (`hset`/`hgetall`) keyed by
   `users`, with each field being a user's email and its value the
   JSON-stringified `StoredUser`.

A SQL option (Vercel Postgres or [Neon](https://neon.tech)) works too if you
think you'll want more structured data later — it just needs a `users`
table and a couple of queries in the same file.

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
      admin/                   Admin-only user list
  components/                 UI components
  data/                       Readings, prayers, worship track lists
  lib/session.ts              Cookie-based session helpers
  lib/admin.ts                 Admin email check
  lib/users-store.ts           User login tracking (see note below)
  lib/format.ts                 Date/relative-time formatting
  proxy.ts                    Protects /dashboard routes (+ admin-only check)
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
