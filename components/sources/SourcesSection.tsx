
import { sourceLinks } from '@/data/sources';
import SectionHeader from '@/components/common/SectionHeader';

export default function SourcesSection() {
  return (
    <section className="section" id="sources">
      <SectionHeader
        eyebrow="Sources"
        title="Built as an unofficial educational fan archive with reputable source links."
        description="No official FIFA logos, photos, mascots or protected tournament graphics are included in the template."
      />
      <div className="sources-grid">
        {sourceLinks.map((source) => (
          <a className="source-card" href={source.url} target="_blank" rel="noreferrer" key={source.url}>
            <span>{source.publisher}</span>
            <strong>{source.title}</strong>
            <p>{source.note}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
