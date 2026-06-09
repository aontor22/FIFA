
import { getTitleTable } from '@/utils/stats';

export default function ChampionsTable() {
  const titles = getTitleTable();
  const max = titles[0]?.titles || 1;
  return (
    <article className="record-card champions-card">
      <h3>Titles by country</h3>
      <div className="title-table">
        {titles.map((item) => (
          <div className="title-row" key={item.country}>
            <span>{item.country}</span>
            <div className="bar-bg"><i style={{ width: `${(item.titles / max) * 100}%` }} /></div>
            <strong>{item.titles}</strong>
          </div>
        ))}
      </div>
    </article>
  );
}
