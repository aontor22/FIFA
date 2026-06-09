import { upcomingFixtures } from '@/data/upcomingSchedule';

export const dynamic = 'force-dynamic';

export async function GET() {
  const externalFeed = process.env.FIFA_SCHEDULE_FEED_URL;

  if (externalFeed) {
    try {
      const response = await fetch(externalFeed, { cache: 'no-store' });
      if (!response.ok) throw new Error(`External feed returned ${response.status}`);
      const data = await response.json();
      return Response.json({
        source: 'external',
        updatedAt: new Date().toISOString(),
        refreshMs: 600000,
        fixtures: Array.isArray(data) ? data : data.fixtures || []
      });
    } catch (error) {
      return Response.json({
        source: 'bundled-fallback',
        updatedAt: new Date().toISOString(),
        refreshMs: 600000,
        fixtures: upcomingFixtures,
        warning: 'External FIFA_SCHEDULE_FEED_URL failed, so bundled fixtures were used.'
      });
    }
  }

  return Response.json({
    source: 'bundled',
    updatedAt: new Date().toISOString(),
    refreshMs: 600000,
    fixtures: upcomingFixtures
  });
}
