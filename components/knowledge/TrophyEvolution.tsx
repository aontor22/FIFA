import { worldCups } from '@/data/worldCups';

export default function TrophyEvolution() {
  return (
    <article className="knowledge-card trophy-card trophy-gallery-card">
      <span className="eyebrow">Trophy story</span>
      <h2>From the Jules Rimet era to the modern World Cup trophy era.</h2>
      <p>
        Every edition now includes a custom trophy illustration. These are original web-safe visuals, so the project avoids copyrighted official trophy photography while staying visually rich.
      </p>
      <div className="trophy-era-row">
        <div><strong>1930-1970</strong><span>Jules Rimet era</span></div>
        <i />
        <div><strong>1974-2026</strong><span>Modern trophy era</span></div>
      </div>
      <div className="trophy-gallery">
        {worldCups.map((cup) => (
          <figure key={cup.year}>
            <img src={cup.trophyImage} alt={`${cup.year} trophy illustration`} />
            <figcaption>{cup.year}</figcaption>
          </figure>
        ))}
      </div>
    </article>
  );
}
