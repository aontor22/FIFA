
import type { Region } from '@/lib/types';

const regions: Region[] = ['All', 'Europe', 'South America', 'North America', 'Asia', 'Africa', 'Multiple Regions'];

type EditionFiltersProps = {
  query: string;
  region: Region;
  onQueryChange: (value: string) => void;
  onRegionChange: (value: Region) => void;
};

export default function EditionFilters({ query, region, onQueryChange, onRegionChange }: EditionFiltersProps) {
  return (
    <div className="filters-wrap">
      <label className="search-box">
        <span>Search</span>
        <input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Try Brazil, 1986, Qatar, Mbappé, final venue..."
        />
      </label>
      <div className="filter-chips" aria-label="Filter by host region">
        {regions.map((item) => (
          <button key={item} className={region === item ? 'chip active' : 'chip'} onClick={() => onRegionChange(item)}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
