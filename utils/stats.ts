
import { worldCups } from '@/data/worldCups';

export function getCompletedCups() {
  return worldCups.filter((cup) => cup.champion !== 'TBD');
}

export function getTitleTable() {
  const table = new Map<string, number>();
  getCompletedCups().forEach((cup) => {
    table.set(cup.champion, (table.get(cup.champion) || 0) + 1);
  });
  return Array.from(table.entries())
    .map(([country, titles]) => ({ country, titles }))
    .sort((a, b) => b.titles - a.titles || a.country.localeCompare(b.country));
}

export function getGlobalStats() {
  const completed = getCompletedCups();
  return {
    editions: completed.length,
    matches: completed.reduce((sum, cup) => sum + cup.matches, 0),
    goals: completed.reduce((sum, cup) => sum + (cup.goals || 0), 0),
    highestGoals: Math.max(...completed.map((cup) => cup.goals || 0))
  };
}
