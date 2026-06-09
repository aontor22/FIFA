
import { getGlobalStats } from '@/utils/stats';
import AnimatedStadium from '@/components/hero/AnimatedStadium';
import StatPill from '@/components/hero/StatPill';

type HeroProps = {
  onOpenLatest: () => void;
};

export default function Hero({ onOpenLatest }: HeroProps) {
  const stats = getGlobalStats();
  return (
    <section className="hero" id="home">
      <AnimatedStadium />
      <div className="hero-copy">
        <span className="eyebrow">Interactive football archive</span>
        <h1>Explore the full FIFA World Cup story from 1930 to 2026.</h1>
        <p>
          Search every tournament, compare champions, inspect finals, view host geography,
          learn major records, and follow the expanded 2026 format in a responsive product-style interface.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#editions">Browse every World Cup</a>
          <button className="ghost-button" onClick={onOpenLatest}>Open 2026 details</button>
        </div>
        <div className="hero-stats">
          <StatPill value={stats.editions} label="completed editions" />
          <StatPill value={stats.matches} label="matches recorded" />
          <StatPill value={stats.goals} label="goals scored" />
          <StatPill value={48} label="teams in 2026" />
        </div>
      </div>
      <aside className="hero-panel">
        <span className="status-badge">2026 tournament hub</span>
        <h2>Canada, Mexico and United States</h2>
        <p>Built for a live tournament experience with schedule, groups, city cards, and future results integration.</p>
        <div className="hero-panel-grid">
          <div><strong>104</strong><span>matches</span></div>
          <div><strong>16</strong><span>host cities</span></div>
          <div><strong>12</strong><span>groups</span></div>
          <div><strong>48</strong><span>teams</span></div>
        </div>
      </aside>
    </section>
  );
}
