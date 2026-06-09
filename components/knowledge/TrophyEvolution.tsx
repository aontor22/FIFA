export default function TrophyEvolution() {
  return (
    <article className="knowledge-card trophy-card trophy-card-real">
      <span className="eyebrow">Trophy story</span>
      <h2>From the Jules Rimet Trophy era to the modern World Cup trophy era.</h2>
      <p>
        The original trophy era ended after Brazil’s third victory in 1970. The modern trophy era began in 1974 and continues today. These visuals are newly generated for this project, not copied reference images.
      </p>
      <div className="trophy-real-layout">
        <figure>
          <img src="/media/generated/trophy-1930.svg" alt="Generated Jules Rimet trophy era visual" loading="lazy" />
          <figcaption>1930–1970 era</figcaption>
        </figure>
        <figure>
          <img src="/media/generated/trophy-2026.svg" alt="Generated modern World Cup trophy era visual" loading="lazy" />
          <figcaption>1974–present era</figcaption>
        </figure>
      </div>
    </article>
  );
}
