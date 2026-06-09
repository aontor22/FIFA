'use client';

import { useEffect, useState } from 'react';
import { upcomingFixtures } from '@/data/upcomingSchedule';
import type { UpcomingFixture } from '@/lib/types';

type ScheduleState = {
  fixtures: UpcomingFixture[];
  source: string;
  updatedAt: string;
  loading: boolean;
};

export function useUpcomingSchedule() {
  const [state, setState] = useState<ScheduleState>({
    fixtures: upcomingFixtures,
    source: 'bundled',
    updatedAt: new Date().toISOString(),
    loading: true
  });

  useEffect(() => {
    let active = true;

    async function loadSchedule() {
      try {
        const response = await fetch('/api/fifa-schedule', { cache: 'no-store' });
        const data = await response.json();
        if (!active) return;
        setState({
          fixtures: data.fixtures?.length ? data.fixtures : upcomingFixtures,
          source: data.source || 'bundled',
          updatedAt: data.updatedAt || new Date().toISOString(),
          loading: false
        });
      } catch {
        if (!active) return;
        setState((current) => ({ ...current, loading: false }));
      }
    }

    loadSchedule();
    const interval = window.setInterval(loadSchedule, 600000);

    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, []);

  return state;
}
