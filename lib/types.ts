
export type Region = 'All' | 'Europe' | 'South America' | 'North America' | 'Asia' | 'Africa' | 'Multiple Regions';

export type WorldCupEdition = {
  year: number;
  edition: number;
  host: string;
  hostFlag: string;
  image: string;
  trophyImage: string;
  region: Exclude<Region, 'All'>;
  champion: string;
  championFlag: string;
  runnerUp: string;
  third: string;
  fourth: string;
  teams: number;
  matches: number;
  goals: number | null;
  finalScore: string;
  finalVenue: string;
  topScorer: string;
  topScorerGoals: number | null;
  goldenBall?: string;
  bestYoungPlayer?: string;
  memorable: string;
  formatNote: string;
  hostCities?: string[];
};

export type TimelineItem = {
  year: string;
  title: string;
  text: string;
};

export type SourceLink = {
  title: string;
  publisher: string;
  url: string;
  note: string;
};

export type HostPoint = {
  host: string;
  label: string;
  x: number;
  y: number;
};

export type UpcomingFixture = {
  id: string;
  date: string;
  stage: string;
  group?: string;
  home: string;
  away: string;
  venue: string;
  city: string;
  status: 'scheduled' | 'live' | 'finished' | 'tbd';
  highlight?: string;
};

export type UpcomingHighlight = {
  title: string;
  eyebrow: string;
  date: string;
  text: string;
  image: string;
};
