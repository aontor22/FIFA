import { upcomingHighlights } from '@/data/upcomingSchedule';

export default function Highlights2026() {
  return (
    <div className="highlights-grid">
      {upcomingHighlights.map((item) => (
        <article className="highlight-card" key={item.title}>
          <img src={item.image} alt={item.title} />
          <div>
            <span>{item.eyebrow} · {item.date}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
