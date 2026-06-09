
import type { TimelineItem } from '@/lib/types';
import SectionHeader from '@/components/common/SectionHeader';

type TimelineProps = {
  items: TimelineItem[];
};

export default function Timeline({ items }: TimelineProps) {
  return (
    <section className="section" id="history">
      <SectionHeader
        eyebrow="History timeline"
        title="The tournament grew from a small invitation event into football’s largest global stage."
        description="A quick storytelling timeline gives visitors the main history before they explore the full tournament archive."
      />
      <div className="timeline-rail">
        {items.map((item) => (
          <article className="timeline-card" key={`${item.year}-${item.title}`}>
            <span>{item.year}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
