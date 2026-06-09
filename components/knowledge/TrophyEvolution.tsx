
export default function TrophyEvolution() {
  return (
    <article className="knowledge-card trophy-card trophy-card-real">
      <span className="eyebrow">Trophy story</span>
      <h2>From the Jules Rimet Trophy to the modern FIFA World Cup Trophy.</h2>
      <p>
        The original trophy era ended after Brazil’s third victory in 1970. The modern trophy era began in 1974 and continues today.
      </p>
      <div className="trophy-real-layout">
        <figure>
          <img src="https://commons.wikimedia.org/wiki/Special:FilePath/FIFA_World_Cup_Trophy_(Jules_Rimet_Trophy)_at_National_Football_Museum,_Manchester_01.jpg" alt="Jules Rimet Trophy" />
          <figcaption>1930–1970 era</figcaption>
        </figure>
        <figure>
          <img src="/media/world-cup-trophy-real.png" alt="Modern FIFA World Cup Trophy" />
          <figcaption>1974–present era</figcaption>
        </figure>
      </div>
    </article>
  );
}
