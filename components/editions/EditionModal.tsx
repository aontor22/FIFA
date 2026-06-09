
'use client';

import type { WorldCupEdition } from '@/lib/types';
import { formatNumber, goalsPerMatch } from '@/utils/format';

type EditionModalProps = {
  cup: WorldCupEdition;
  onClose: () => void;
};

export default function EditionModal({ cup, onClose }: EditionModalProps) {
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={`${cup.year} World Cup details`}>
      <article className="edition-modal">
        <button className="close-button" onClick={onClose} aria-label="Close details">×</button>
        <header className="modal-title">
          <span>{cup.hostFlag}</span>
          <div>
            <p>Edition {cup.edition}</p>
            <h2>{cup.year} FIFA World Cup</h2>
            <strong>{cup.host}</strong>
          </div>
        </header>
        <div className="modal-kpi-grid">
          <div><span>Champion</span><strong>{cup.championFlag} {cup.champion}</strong></div>
          <div><span>Runner-up</span><strong>{cup.runnerUp}</strong></div>
          <div><span>Third</span><strong>{cup.third}</strong></div>
          <div><span>Fourth</span><strong>{cup.fourth}</strong></div>
          <div><span>Teams</span><strong>{cup.teams}</strong></div>
          <div><span>Matches</span><strong>{cup.matches}</strong></div>
          <div><span>Goals</span><strong>{formatNumber(cup.goals)}</strong></div>
          <div><span>Goals per match</span><strong>{goalsPerMatch(cup.goals, cup.matches)}</strong></div>
        </div>
        <div className="modal-story">
          <h3>Final</h3>
          <p><strong>{cup.finalScore}</strong></p>
          <p>{cup.finalVenue}</p>
          <h3>Top scorer</h3>
          <p>{cup.topScorer}{cup.topScorerGoals ? `, ${cup.topScorerGoals} goals` : ''}</p>
          {cup.goldenBall && <><h3>Golden Ball</h3><p>{cup.goldenBall}</p></>}
          <h3>Why people remember it</h3>
          <p>{cup.memorable}</p>
          <h3>Format</h3>
          <p>{cup.formatNote}</p>
          {cup.hostCities && <><h3>Host cities</h3><p>{cup.hostCities.join(', ')}</p></>}
        </div>
      </article>
    </div>
  );
}
