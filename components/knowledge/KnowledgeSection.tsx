
import TrophyEvolution from '@/components/knowledge/TrophyEvolution';
import FAQSection from '@/components/knowledge/FAQSection';
import MatchBallGallery from '@/components/knowledge/MatchBallGallery';

export default function KnowledgeSection() {
  return (
    <section className="section knowledge-section knowledge-section-expanded">
      <TrophyEvolution />
      <FAQSection />
      <MatchBallGallery />
    </section>
  );
}
