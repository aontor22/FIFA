
import { worldCup2026 } from '@/data/worldCup2026';

export default function HostCities() {
  return (
    <article className="tournament-card host-cities-card">
      <h3>Host cities</h3>
      <div className="city-list">
        {worldCup2026.hostCities.map((city) => <span key={city}>{city}</span>)}
      </div>
    </article>
  );
}
