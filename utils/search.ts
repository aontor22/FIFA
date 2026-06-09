
import type { Region, WorldCupEdition } from '@/lib/types';

export function filterEditions(cups: WorldCupEdition[], query: string, region: Region) {
  const term = query.trim().toLowerCase();
  return cups.filter((cup) => {
    const regionOk = region === 'All' || cup.region === region;
    const haystack = [
      cup.year,
      cup.host,
      cup.champion,
      cup.runnerUp,
      cup.third,
      cup.fourth,
      cup.finalScore,
      cup.finalVenue,
      cup.topScorer,
      cup.memorable
    ].join(' ').toLowerCase();
    return regionOk && (!term || haystack.includes(term));
  });
}
