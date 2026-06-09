
import { editionMedia } from '@/data/editionMedia';

export default function MatchBallGallery() {
  return (
    <article className="knowledge-card match-ball-gallery">
      <span className="eyebrow">Official match balls</span>
      <h2>Every World Cup ball, shown with generated image slots.</h2>
      <p>
        The gallery lists the official match ball identity for each edition. Each edition uses a locally generated visual inspired by the official match-ball identity, avoiding direct copied reference images.
      </p>
      <div className="ball-gallery-grid">
        {editionMedia.map((item) => (
          <div className="ball-gallery-card" key={item.year}>
            <img src={item.ballImage} alt={`${item.year} ${item.ballName} match ball`} loading="lazy" />
            <div>
              <strong>{item.year}</strong>
              <span>{item.ballName}</span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
