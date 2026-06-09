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


## UI media upgrade

This build replaces emoji/cartoon visuals and copied reference files with newly generated local SVG assets in `public/media/generated`. The match-ball gallery uses official ball names with generated visual approximations, so no uploaded reference image is directly embedded in the project.

## Live schedule feed

The bundled `/api/fifa-schedule` route returns fallback fixtures by default. To connect an approved schedule provider, add this Vercel environment variable:

```bash
FIFA_SCHEDULE_FEED_URL=https://your-approved-feed.example.com/fixtures.json
```
