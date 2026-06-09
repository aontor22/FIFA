
import type { WorldCupEdition } from '@/lib/types';
import { getEditionMedia } from '@/data/editionMedia';
import { formatNumber } from '@/utils/format';

type EditionCardProps = {
  cup: WorldCupEdition;
  onSelect: () => void;
};

export default function EditionCard({ cup, onSelect }: EditionCardProps) {
  const media = getEditionMedia(cup.year);

  return (
    <button className="edition-card edition-card-photo" onClick={onSelect}>
      <div className="edition-photo-wrap">
        <img className="edition-bg-img" src={media.historyImage} alt={`${cup.year} ${cup.host} World Cup visual`} loading="lazy" />
        <div className="edition-photo-overlay" />
        <div className="edition-photo-content">
          <div>
            <span className="edition-year">{cup.year}</span>
            <h3>{cup.host}</h3>
          </div>
          <img className="edition-ball-thumb" src={media.ballImage} alt={`${media.ballName} match ball`} loading="lazy" />
        </div>
      </div>
      <p>{cup.memorable}</p>
      <div className="mini-meta">
        <span>Winner: <strong>{cup.champion}</strong></span>
        <span>Final: <strong>{cup.finalScore}</strong></span>
        <span>Ball: <strong>{media.ballName}</strong></span>
        <span>{cup.teams} teams • {formatNumber(cup.goals)} goals</span>
      </div>
    </button>
  );
}
