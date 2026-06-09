import type { UpcomingFixture, UpcomingHighlight } from '@/lib/types';

export const upcomingFixtures: UpcomingFixture[] = [
  { match: 1, date: '2026-06-11', time: 'TBD', stage: 'Group A', fixture: 'Mexico v South Africa', venue: 'Mexico City Stadium' },
  { match: 2, date: '2026-06-11', time: 'TBD', stage: 'Group A', fixture: 'Korea Republic v Czechia', venue: 'Estadio Guadalajara' },
  { match: 3, date: '2026-06-12', time: 'TBD', stage: 'Group B', fixture: 'Canada v Qatar', venue: 'Toronto Stadium' },
  { match: 4, date: '2026-06-12', time: 'TBD', stage: 'Group D', fixture: 'United States v Paraguay', venue: 'Los Angeles Stadium' },
  { match: 5, date: '2026-06-13', time: 'TBD', stage: 'Group C', fixture: 'Brazil v Morocco', venue: 'Miami Stadium' },
  { match: 6, date: '2026-06-13', time: 'TBD', stage: 'Group E', fixture: 'Germany v Curaçao', venue: 'Philadelphia Stadium' },
  { match: 7, date: '2026-06-14', time: 'TBD', stage: 'Group F', fixture: 'Netherlands v Japan', venue: 'Dallas Stadium' },
  { match: 104, date: '2026-07-19', time: 'TBD', stage: 'Final', fixture: 'Winner SF1 v Winner SF2', venue: 'New York New Jersey Stadium' }
];

export const upcomingHighlights: UpcomingHighlight[] = [
  {
    title: 'Expanded format',
    value: '48 teams',
    note: 'The largest men’s World Cup field so far.',
    eyebrow: 'Tournament format',
    date: '2026',
    text: 'The first 48-team men’s World Cup creates a longer global tournament journey.',
    image: '/media/generated/wc-2026-poster.svg'
  },
  {
    title: 'Total fixtures',
    value: '104 matches',
    note: 'A longer tournament journey from group stage to final.',
    eyebrow: 'Schedule scale',
    date: 'June to July 2026',
    text: 'The expanded fixture list covers group matches, a Round of 32, and the final.',
    image: '/media/generated/history-2026.svg'
  },
  {
    title: 'Host nations',
    value: '3 countries',
    note: 'Canada, Mexico and United States.',
    eyebrow: 'Host network',
    date: 'North America',
    text: 'Canada, Mexico, and the United States combine for the first three-country edition.',
    image: '/media/generated/hero-ball.svg'
  },
  {
    title: 'Final venue',
    value: 'New York New Jersey',
    note: 'The final is planned for East Rutherford.',
    eyebrow: 'Final stage',
    date: 'July 19, 2026',
    text: 'The final is planned for New York New Jersey Stadium in East Rutherford.',
    image: '/media/generated/hero-trophy.svg'
  }
];
