
export type EditionMedia = {
  year: number;
  trophyImage: string;
  historyImage: string;
  ballName: string;
  ballImage: string;
  ballNote: string;
  trophyEra: string;
};

const localTrophy = '/media/world-cup-trophy-real.png';
const localBall2026 = '/media/world-cup-2026-ball-real.png';
const localLogo2026 = '/media/world-cup-2026-logo.png';
const genericGrassBall = 'https://commons.wikimedia.org/wiki/Special:FilePath/Adidas_soccer_ball_on_a_grass_pitch_(Unsplash).jpg';
const modernTrophy = 'https://commons.wikimedia.org/wiki/Special:FilePath/FIFA_World_Cup_Trophy_at_National_Football_Museum,_Manchester_02.jpg';
const julesRimet = 'https://commons.wikimedia.org/wiki/Special:FilePath/FIFA_World_Cup_Trophy_(Jules_Rimet_Trophy)_at_National_Football_Museum,_Manchester_01.jpg';

export const editionMedia: EditionMedia[] = [
  { year: 1930, trophyImage: julesRimet, historyImage: julesRimet, ballName: 'Tiento / T-Model', ballImage: genericGrassBall, ballNote: 'Early hand-stitched leather balls used in the first final.', trophyEra: 'Jules Rimet Trophy era' },
  { year: 1934, trophyImage: julesRimet, historyImage: julesRimet, ballName: 'Federale 102', ballImage: genericGrassBall, ballNote: 'Leather panel ball used in Italy 1934.', trophyEra: 'Jules Rimet Trophy era' },
  { year: 1938, trophyImage: julesRimet, historyImage: julesRimet, ballName: 'Allen', ballImage: genericGrassBall, ballNote: 'French-made leather match ball.', trophyEra: 'Jules Rimet Trophy era' },
  { year: 1950, trophyImage: julesRimet, historyImage: julesRimet, ballName: 'Duplo T', ballImage: genericGrassBall, ballNote: 'Brazil 1950 leather ball design.', trophyEra: 'Jules Rimet Trophy era' },
  { year: 1954, trophyImage: julesRimet, historyImage: julesRimet, ballName: 'Swiss World Champion', ballImage: genericGrassBall, ballNote: 'Swiss-made orange leather ball.', trophyEra: 'Jules Rimet Trophy era' },
  { year: 1958, trophyImage: julesRimet, historyImage: julesRimet, ballName: 'Top Star', ballImage: genericGrassBall, ballNote: 'Selected from blind testing before Sweden 1958.', trophyEra: 'Jules Rimet Trophy era' },
  { year: 1962, trophyImage: julesRimet, historyImage: julesRimet, ballName: 'Crack', ballImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Balon_mundial_1962.jpg', ballNote: 'Chile 1962 official ball design.', trophyEra: 'Jules Rimet Trophy era' },
  { year: 1966, trophyImage: julesRimet, historyImage: julesRimet, ballName: 'Slazenger Challenge 4-Star', ballImage: genericGrassBall, ballNote: 'Orange leather ball used in England 1966.', trophyEra: 'Jules Rimet Trophy era' },
  { year: 1970, trophyImage: julesRimet, historyImage: julesRimet, ballName: 'Adidas Telstar', ballImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Adidas_Telstar_Mexico_1970_Official_ball.jpg', ballNote: 'First Adidas World Cup ball, known for the black-and-white TV-friendly design.', trophyEra: 'Jules Rimet Trophy era' },
  { year: 1974, trophyImage: localTrophy, historyImage: localTrophy, ballName: 'Adidas Telstar Durlast', ballImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/1974_TelstarDurlast.jpg', ballNote: 'Water-resistant Telstar evolution.', trophyEra: 'FIFA World Cup Trophy era' },
  { year: 1978, trophyImage: localTrophy, historyImage: localTrophy, ballName: 'Adidas Tango', ballImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Adidas_Tango.jpg', ballNote: 'Introduced the famous Tango visual language.', trophyEra: 'FIFA World Cup Trophy era' },
  { year: 1982, trophyImage: localTrophy, historyImage: localTrophy, ballName: 'Adidas Tango España', ballImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Adidas_Tango_Espa%C3%B1a.jpg', ballNote: 'Last genuine leather World Cup ball.', trophyEra: 'FIFA World Cup Trophy era' },
  { year: 1986, trophyImage: localTrophy, historyImage: localTrophy, ballName: 'Adidas Azteca', ballImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Adidas_Azteca.jpg', ballNote: 'First fully synthetic World Cup ball.', trophyEra: 'FIFA World Cup Trophy era' },
  { year: 1990, trophyImage: localTrophy, historyImage: localTrophy, ballName: 'Adidas Etrusco Unico', ballImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ballon_Adidas_Etrusco.jpg', ballNote: 'Inspired by Etruscan art and Italian heritage.', trophyEra: 'FIFA World Cup Trophy era' },
  { year: 1994, trophyImage: localTrophy, historyImage: localTrophy, ballName: 'Adidas Questra', ballImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Adidas_Questra_USA_1994_Official_ball.jpg', ballNote: 'Space-age visual design for USA 1994.', trophyEra: 'FIFA World Cup Trophy era' },
  { year: 1998, trophyImage: localTrophy, historyImage: localTrophy, ballName: 'Adidas Tricolore', ballImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Adidas_Tricolore.jpg', ballNote: 'First multi-coloured World Cup final tournament ball.', trophyEra: 'FIFA World Cup Trophy era' },
  { year: 2002, trophyImage: localTrophy, historyImage: localTrophy, ballName: 'Adidas Fevernova', ballImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Fevernova_(4592803569).jpg', ballNote: 'A major visual break from the Tango family.', trophyEra: 'FIFA World Cup Trophy era' },
  { year: 2006, trophyImage: localTrophy, historyImage: localTrophy, ballName: 'Adidas Teamgeist', ballImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Adidas_(3246553092).jpg', ballNote: 'Panel design promoted cleaner striking zones.', trophyEra: 'FIFA World Cup Trophy era' },
  { year: 2010, trophyImage: localTrophy, historyImage: localTrophy, ballName: 'Adidas Jabulani', ballImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Adidas_Jabulani_Official_World_Cup_2010_(4158450149).jpg', ballNote: 'Known for its controversial flight behaviour.', trophyEra: 'FIFA World Cup Trophy era' },
  { year: 2014, trophyImage: localTrophy, historyImage: localTrophy, ballName: 'Adidas Brazuca', ballImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Adidas_brazuca.jpg', ballNote: 'Tested extensively before Brazil 2014.', trophyEra: 'FIFA World Cup Trophy era' },
  { year: 2018, trophyImage: localTrophy, historyImage: localTrophy, ballName: 'Adidas Telstar 18', ballImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Adidas_Telstar_18.jpg', ballNote: 'A modern callback to the original Telstar.', trophyEra: 'FIFA World Cup Trophy era' },
  { year: 2022, trophyImage: localTrophy, historyImage: localTrophy, ballName: 'Adidas Al Rihla', ballImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Al-Rihla_(cropped).jpg', ballNote: 'Connected-ball technology supported semi-automated offside decisions.', trophyEra: 'FIFA World Cup Trophy era' },
  { year: 2026, trophyImage: localTrophy, historyImage: localLogo2026, ballName: 'Adidas Trionda', ballImage: localBall2026, ballNote: 'Official 2026 match ball representing the three host nations.', trophyEra: 'FIFA World Cup Trophy era' }
];

export function getEditionMedia(year: number): EditionMedia {
  return editionMedia.find((item) => item.year === year) || editionMedia[editionMedia.length - 1];
}
