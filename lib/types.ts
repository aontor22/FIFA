
export type Region = 'All' | 'Europe' | 'South America' | 'North America' | 'Asia' | 'Africa' | 'Multiple Regions';

export type WorldCupEdition = {
  year: number;
  edition: number;
  host: string;
  hostFlag: string;
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
  historyImage?: string;
  trophyImage?: string;
  ballName?: string;
  ballImage?: string;
  ballNote?: string;
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
