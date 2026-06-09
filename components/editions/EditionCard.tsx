
import type { WorldCupEdition } from '@/lib/types';
import { formatNumber } from '@/utils/format';

type EditionCardProps = {
  cup: WorldCupEdition;
  onSelect: () => void;
};

export default function EditionCard({ cup, onSelect }: EditionCardProps) {
  return (
    <button className="edition-card" onClick={onSelect}>
      <div className="edition-card-top">
        <span className="edition-year">{cup.year}</span>
        <span className="edition-flag">{cup.hostFlag}</span>
      </div>
      <h3>{cup.host}</h3>
      <p>{cup.memorable}</p>
      <div className="mini-meta">
        <span>Winner: <strong>{cup.champion}</strong></span>
        <span>Final: <strong>{cup.finalScore}</strong></span>
        <span>{cup.teams} teams</span>
        <span>{formatNumber(cup.goals)} goals</span>
      </div>
    </button>
  );
}
