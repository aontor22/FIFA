
'use client';

import { useEffect, useState } from 'react';
import { upcomingFixtures } from '@/data/upcomingFixtures';

type Fixture = typeof upcomingFixtures[number];

export default function UpcomingSchedule() {
  const [fixtures, setFixtures] = useState<Fixture[]>(upcomingFixtures);
  const [updatedAt, setUpdatedAt] = useState<string>('bundled fallback');

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const response = await fetch('/api/fifa-schedule', { cache: 'no-store' });
        const data = await response.json();
        if (active && Array.isArray(data.fixtures)) {
          setFixtures(data.fixtures.slice(0, 8));
          setUpdatedAt(new Date(data.updatedAt).toLocaleString());
        }
      } catch {}
    };
    load();
    const interval = window.setInterval(load, 10 * 60 * 1000);
    return () => { active = false; window.clearInterval(interval); };
  }, []);

  return (
    <article className="tournament-card schedule-card">
      <div className="schedule-head">
        <div>
          <span className="status-badge">Auto update</span>
          <h3>Upcoming FIFA schedule</h3>
        </div>
        <small>Updated: {updatedAt}</small>
      </div>
      <div className="schedule-list">
        {fixtures.map((fixture) => (
          <div className="schedule-row" key={`${fixture.match}-${fixture.fixture}`}>
            <strong>Match {fixture.match}</strong>
            <span>{fixture.date} • {fixture.stage}</span>
            <p>{fixture.fixture}</p>
            <small>{fixture.venue}</small>
          </div>
        ))}
      </div>
    </article>
  );
}
