'use client';

import { useMemo, useState } from 'react';
import { useUpcomingSchedule } from '@/hooks/useUpcomingSchedule';

const stages = ['All', 'Group stage', 'Round of 32', 'Final'];

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  }).format(new Date(date));
}

export default function UpcomingSchedule() {
  const { fixtures, source, updatedAt, loading } = useUpcomingSchedule();
  const [stage, setStage] = useState('All');

  const filtered = useMemo(() => {
    return fixtures.filter((fixture) => stage === 'All' || fixture.stage === stage);
  }, [fixtures, stage]);

  return (
    <article className="tournament-card schedule-card">
      <div className="schedule-head">
        <div>
          <span className="eyebrow">Auto-updating schedule</span>
          <h3>Upcoming FIFA World Cup fixtures</h3>
          <p>
            This panel refreshes from <code>/api/fifa-schedule</code> every 10 minutes. Add a live feed URL in
            <code> FIFA_SCHEDULE_FEED_URL </code> to auto-update from your own approved data provider.
          </p>
        </div>
        <div className="sync-pill">{loading ? 'Syncing…' : `Synced · ${source}`}</div>
      </div>

      <div className="schedule-tabs">
        {stages.map((item) => (
          <button className={stage === item ? 'active' : ''} key={item} onClick={() => setStage(item)}>
            {item}
          </button>
        ))}
      </div>

      <div className="fixture-list">
        {filtered.map((fixture) => (
          <div className="fixture-row" key={fixture.id}>
            <div className="fixture-date">
              <strong>{formatDate(fixture.date)}</strong>
              <span>{fixture.stage}{fixture.group ? ` · ${fixture.group}` : ''}</span>
            </div>
            <div className="fixture-teams">
              <strong>{fixture.home}</strong>
              <span>vs</span>
              <strong>{fixture.away}</strong>
            </div>
            <div className="fixture-venue">
              <strong>{fixture.venue}</strong>
              <span>{fixture.city}</span>
            </div>
            {fixture.highlight && <p>{fixture.highlight}</p>}
          </div>
        ))}
      </div>
      <small>Last checked: {formatDate(updatedAt)}</small>
    </article>
  );
}
