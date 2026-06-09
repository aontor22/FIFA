
import { worldCups } from '@/data/worldCups';
import type { WorldCupEdition } from '@/lib/types';

type GoalChartProps = {
  onSelectCup: (cup: WorldCupEdition) => void;
};

export default function GoalChart({ onSelectCup }: GoalChartProps) {
  const completed = worldCups.filter((cup) => cup.goals !== null);
  const max = Math.max(...completed.map((cup) => cup.goals || 0));
  return (
    <article className="record-card goal-card">
      <h3>Goals by edition</h3>
      <div className="goal-chart">
        {completed.map((cup) => (
          <button
            key={cup.year}
            className="goal-bar"
            style={{ height: `${((cup.goals || 0) / max) * 100}%` }}
            onClick={() => onSelectCup(cup)}
            title={`${cup.year}: ${cup.goals} goals`}
          >
            <span>{cup.year}</span>
          </button>
        ))}
      </div>
    </article>
  );
}
