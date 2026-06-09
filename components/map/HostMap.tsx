
'use client';

import { hostPoints } from '@/data/hostPoints';
import { worldCups } from '@/data/worldCups';
import type { WorldCupEdition } from '@/lib/types';
import SectionHeader from '@/components/common/SectionHeader';

type HostMapProps = {
  onSelectCup: (cup: WorldCupEdition) => void;
};

export default function HostMap({ onSelectCup }: HostMapProps) {
  function handlePin(host: string) {
    const matches = worldCups.filter((cup) => cup.host === host);
    if (matches.length) onSelectCup(matches[matches.length - 1]);
  }

  return (
    <section className="section" id="map">
      <SectionHeader
        eyebrow="Host map"
        title="Tap a glowing host pin to jump into a tournament."
        description="This stylized map keeps the website lightweight while still giving visitors a global host geography experience."
      />
      <div className="host-map-shell">
        <div className="world-map" role="img" aria-label="Stylized world map with World Cup host locations">
          <span className="continent north-america" />
          <span className="continent south-america" />
          <span className="continent europe" />
          <span className="continent africa" />
          <span className="continent asia" />
          <span className="continent australia" />
          {hostPoints.map((point) => (
            <button
              key={`${point.host}-${point.x}-${point.y}`}
              className="map-pin"
              style={{ left: `${point.x}%`, top: `${point.y}%` }}
              onClick={() => handlePin(point.host)}
              title={`${point.host}: ${point.label}`}
              aria-label={`Open ${point.host} World Cup information`}
            >
              <span />
            </button>
          ))}
        </div>
        <aside className="map-side-panel">
          <h3>Global host pattern</h3>
          <p>Europe and the Americas dominated early hosting, while Asia, Africa and the three-country North American edition show how the tournament footprint expanded.</p>
          <div className="map-legend"><i /> Host location</div>
          <div className="map-legend"><i className="gold" /> Multi-host era</div>
        </aside>
      </div>
    </section>
  );
}
