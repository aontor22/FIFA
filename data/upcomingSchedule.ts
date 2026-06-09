import type { UpcomingFixture, UpcomingHighlight } from '@/lib/types';

export const upcomingFixtures: UpcomingFixture[] = [
  {
    id: '2026-001',
    date: '2026-06-11T19:00:00Z',
    stage: 'Group stage',
    group: 'Group A',
    home: 'Mexico',
    away: 'South Africa',
    venue: 'Mexico City Stadium',
    city: 'Mexico City',
    status: 'scheduled',
    highlight: 'Opening match of the first 48-team World Cup.'
  },
  {
    id: '2026-002',
    date: '2026-06-11T22:00:00Z',
    stage: 'Group stage',
    group: 'Group A',
    home: 'Korea Republic',
    away: 'Czechia',
    venue: 'Estadio Guadalajara',
    city: 'Guadalajara',
    status: 'scheduled',
    highlight: 'Second matchday fixture from the opening group.'
  },
  {
    id: '2026-003',
    date: '2026-06-12T18:00:00Z',
    stage: 'Group stage',
    group: 'Group B',
    home: 'Canada',
    away: 'TBD',
    venue: 'Toronto Stadium',
    city: 'Toronto',
    status: 'scheduled',
    highlight: 'Canada starts its home World Cup campaign.'
  },
  {
    id: '2026-004',
    date: '2026-06-12T21:00:00Z',
    stage: 'Group stage',
    group: 'Group D',
    home: 'United States',
    away: 'TBD',
    venue: 'Los Angeles Stadium',
    city: 'Los Angeles',
    status: 'scheduled',
    highlight: 'The United States plays its opening host-nation match.'
  },
  {
    id: '2026-005',
    date: '2026-06-14T16:00:00Z',
    stage: 'Group stage',
    group: 'Group E',
    home: "Côte d'Ivoire",
    away: 'Ecuador',
    venue: 'Philadelphia Stadium',
    city: 'Philadelphia',
    status: 'scheduled',
    highlight: 'A high-energy intercontinental group fixture.'
  },
  {
    id: '2026-006',
    date: '2026-06-14T19:00:00Z',
    stage: 'Group stage',
    group: 'Group E',
    home: 'Germany',
    away: 'Curaçao',
    venue: 'Houston Stadium',
    city: 'Houston',
    status: 'scheduled',
    highlight: 'Germany begins its tournament against Curaçao.'
  },
  {
    id: '2026-007',
    date: '2026-06-14T22:00:00Z',
    stage: 'Group stage',
    group: 'Group F',
    home: 'Netherlands',
    away: 'Japan',
    venue: 'Dallas Stadium',
    city: 'Dallas',
    status: 'scheduled',
    highlight: 'A major tactical clash between two technical teams.'
  },
  {
    id: '2026-008',
    date: '2026-06-15T01:00:00Z',
    stage: 'Group stage',
    group: 'Group F',
    home: 'Sweden',
    away: 'Tunisia',
    venue: 'Estadio Monterrey',
    city: 'Monterrey',
    status: 'scheduled',
    highlight: 'A competitive Group F fixture in Mexico.'
  },
  {
    id: '2026-r32',
    date: '2026-06-28T16:00:00Z',
    stage: 'Round of 32',
    home: 'TBD',
    away: 'TBD',
    venue: 'Multiple venues',
    city: 'Canada, Mexico and USA',
    status: 'tbd',
    highlight: 'First World Cup edition with a Round of 32 knockout phase.'
  },
  {
    id: '2026-final',
    date: '2026-07-19T19:00:00Z',
    stage: 'Final',
    home: 'TBD',
    away: 'TBD',
    venue: 'New York New Jersey Stadium',
    city: 'East Rutherford',
    status: 'tbd',
    highlight: 'The champion of the expanded tournament will be crowned.'
  }
];

export const upcomingHighlights: UpcomingHighlight[] = [
  {
    eyebrow: 'Opening night',
    title: 'Mexico City launches the 2026 story',
    date: '11 June 2026',
    text: 'The tournament opens at Mexico City Stadium as Mexico face South Africa in Group A.',
    image: '/history/world-cup-1970.svg'
  },
  {
    eyebrow: 'New era',
    title: '48 teams and 104 fixtures',
    date: '2026 format',
    text: 'The tournament expands from 32 to 48 teams with twelve groups of four and a Round of 32.',
    image: '/history/world-cup-2026.svg'
  },
  {
    eyebrow: 'Final destination',
    title: 'New York New Jersey hosts the final',
    date: '19 July 2026',
    text: 'The final is scheduled for New York New Jersey Stadium in East Rutherford.',
    image: '/trophies/trophy-2026.svg'
  }
];
