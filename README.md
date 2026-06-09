# World Cup Explorer Pro

A larger, component-based Next.js + React website for exploring the men’s FIFA World Cup history from 1930 to 2026.

## What changed from the small version

This version is split into a proper project structure with separate components, data files, hooks, utilities, SEO files and styling. It is easier to maintain, customize and expand.

## Features

- Responsive premium landing page
- Dark and light mode
- Hero section with animated football stadium visuals
- Full edition explorer from 1930 to 2026
- Search by year, host, champion, player, final venue or story
- Region filters
- Clickable details modal for every World Cup
- Stylized interactive host map
- Champion title table
- Goals by edition chart
- 2026 tournament hub
- Host cities section
- FAQ and trophy history section
- Sources section with official and archival links
- SEO metadata, robots and sitemap files

## Run locally

```bash
npm install
npm run dev
```

Then open:

```bash
http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Important data note

This is an unofficial educational/fan archive template. No official FIFA logos, photographs, mascots or protected tournament graphics are included. Verify tournament data again before publishing commercially, especially the live 2026 schedule, groups and match results.


## New in this upgraded version

- Custom illustrated image for every World Cup edition from 1930 to 2026
- Custom trophy illustration for every edition
- Cinematic parallax memorable-history section
- Upcoming FIFA World Cup 2026 highlights
- Auto-refreshing schedule module powered by `/api/fifa-schedule`
- Optional external schedule feed through `FIFA_SCHEDULE_FEED_URL`
- Enhanced edition cards and modals with images and trophy visuals
- Cooler football-history background atmosphere

## Auto-updating schedule setup

The website works immediately with bundled fallback fixtures. For live or managed updates, add this environment variable in Vercel:

```bash
FIFA_SCHEDULE_FEED_URL=https://your-approved-schedule-feed.example.com/fixtures.json
```

The feed should return either an array of fixtures or an object shaped like:

```json
{ "fixtures": [] }
```

Each fixture supports: `id`, `date`, `stage`, `group`, `home`, `away`, `venue`, `city`, `status`, and `highlight`.

## Media note

The included images are original SVG illustrations created for this project. They are not official FIFA logos, official trophy photographs, player images, or copyrighted match photos. Replace them with licensed assets only if you have permission.
