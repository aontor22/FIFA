import type { CSSProperties } from 'react';
import { worldCups } from '@/data/worldCups';
import { getEditionMedia } from '@/data/editionMedia';
import SectionHeader from '@/components/common/SectionHeader';
import type { WorldCupEdition } from '@/lib/types';

const memoryYears = [1930, 1950, 1970, 1986, 1998, 2010, 2022, 2026];

function isWorldCupEdition(cup: WorldCupEdition | undefined): cup is WorldCupEdition {
  return Boolean(cup);
}

export default function ParallaxMemories() {
  const memories = memoryYears
    .map((year) => worldCups.find((cup) => cup.year === year))
    .filter(isWorldCupEdition);

  return (
    <section className="section history-cinema" id="memories">
      <div className="cinema-bg" aria-hidden="true" />
      <SectionHeader
        eyebrow="Memorable history"
        title="A cinematic scroll through football’s most iconic World Cup eras."
        description="Parallax cards use generated realistic-style trophy and ball visuals, host memories, final stories, and tournament records instead of emoji or placeholder graphics."
      />
      <div className="memory-track">
        {memories.map((cup, index) => {
          const media = getEditionMedia(cup.year);

          return (
            <article className="memory-card" key={cup.year} style={{ '--shift': `${index * 16}px` } as CSSProperties}>
              <div className="memory-image-wrap">
                <img src={media.historyImage} alt={`${cup.year} ${cup.host} World Cup historical visual`} loading="lazy" />
                <img className="memory-trophy" src={media.trophyImage} alt={`${media.trophyEra} trophy`} loading="lazy" />
                <img className="memory-ball" src={media.ballImage} alt={`${media.ballName} match ball`} loading="lazy" />
              </div>
              <div className="memory-copy">
                <span>{cup.year} · {cup.host}</span>
                <h3>{cup.memorable}</h3>
                <p>{cup.finalScore}</p>
                <small>Official match ball: {media.ballName}</small>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
