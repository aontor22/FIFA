import type { CSSProperties } from 'react';
import { worldCups } from '@/data/worldCups';
import SectionHeader from '@/components/common/SectionHeader';

const memoryYears = [1930, 1950, 1970, 1986, 1998, 2010, 2022, 2026];

export default function ParallaxMemories() {
  const memories = memoryYears
    .map((year) => worldCups.find((cup) => cup.year === year))
    .filter(Boolean);

  return (
    <section className="section history-cinema" id="memories">
      <div className="cinema-bg" aria-hidden="true" />
      <SectionHeader
        eyebrow="Memorable history"
        title="A cinematic scroll through football’s most iconic World Cup eras."
        description="Parallax cards blend custom illustrated archive images, trophies, host cities, and tournament moments into a more emotional browsing experience."
      />
      <div className="memory-track">
        {memories.map((cup, index) => cup && (
          <article className="memory-card" key={cup.year} style={{ '--shift': `${index * 16}px` } as CSSProperties}>
            <div className="memory-image-wrap">
              <img src={cup.image} alt={`${cup.year} World Cup illustrated history`} />
              <img className="memory-trophy" src={cup.trophyImage} alt={`${cup.year} trophy illustration`} />
            </div>
            <div className="memory-copy">
              <span>{cup.year} · {cup.host}</span>
              <h3>{cup.memorable}</h3>
              <p>{cup.finalScore}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
