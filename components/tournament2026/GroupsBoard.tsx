
import { worldCup2026 } from '@/data/worldCup2026';

export default function GroupsBoard() {
  return (
    <article className="tournament-card groups-board">
      <h3>Group board</h3>
      <p>The layout supports 12 groups of four and can be connected to live standings.</p>
      <div className="groups-grid">
        {worldCup2026.groups.map((group) => (
          <div className="group-mini" key={group.group}>
            <strong>Group {group.group}</strong>
            <span>{group.note}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
