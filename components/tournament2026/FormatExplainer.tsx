
import { worldCup2026 } from '@/data/worldCup2026';

export default function FormatExplainer() {
  return (
    <article className="tournament-card format-card">
      <span className="status-badge">Confirmed format shell</span>
      <h3>{worldCup2026.host}</h3>
      <p>{worldCup2026.dates}</p>
      <div className="format-kpis">
        <div><strong>{worldCup2026.teams}</strong><span>teams</span></div>
        <div><strong>{worldCup2026.matches}</strong><span>matches</span></div>
        <div><strong>16</strong><span>host cities</span></div>
      </div>
      <p>{worldCup2026.format}</p>
      <p><strong>Final:</strong> {worldCup2026.finalVenue}</p>
    </article>
  );
}
