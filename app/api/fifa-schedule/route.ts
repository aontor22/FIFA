
import { NextResponse } from 'next/server';
import { upcomingFixtures } from '@/data/upcomingFixtures';

export async function GET() {
  const externalFeed = process.env.FIFA_SCHEDULE_FEED_URL;

  if (externalFeed) {
    try {
      const response = await fetch(externalFeed, { next: { revalidate: 600 } });
      if (response.ok) {
        const data = await response.json();
        return NextResponse.json({ source: 'external', updatedAt: new Date().toISOString(), fixtures: data.fixtures || data });
      }
    } catch {}
  }

  return NextResponse.json({ source: 'bundled', updatedAt: new Date().toISOString(), fixtures: upcomingFixtures });
}
