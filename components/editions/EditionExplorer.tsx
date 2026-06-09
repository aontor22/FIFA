
import type { Region, WorldCupEdition } from '@/lib/types';
import SectionHeader from '@/components/common/SectionHeader';
import EditionFilters from '@/components/editions/EditionFilters';
import EditionCard from '@/components/editions/EditionCard';

type EditionExplorerProps = {
  query: string;
  region: Region;
  cups: WorldCupEdition[];
  onQueryChange: (value: string) => void;
  onRegionChange: (value: Region) => void;
  onSelectCup: (cup: WorldCupEdition) => void;
};

export default function EditionExplorer({ query, region, cups, onQueryChange, onRegionChange, onSelectCup }: EditionExplorerProps) {
  return (
    <section className="section editions-section" id="editions">
      <SectionHeader
        eyebrow="Every tournament"
        title="Search and open full details for every World Cup edition."
        description="The cards are clickable and include host, winner, final, teams, goals, top scorer and format notes."
      />
      <EditionFilters query={query} region={region} onQueryChange={onQueryChange} onRegionChange={onRegionChange} />
      <div className="edition-grid">
        {cups.map((cup) => <EditionCard key={cup.year} cup={cup} onSelect={() => onSelectCup(cup)} />)}
      </div>
      {cups.length === 0 && <p className="empty-state">No tournament matched your search.</p>}
    </section>
  );
}
