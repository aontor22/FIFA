
'use client';

import type { WorldCupEdition } from '@/lib/types';
import SectionHeader from '@/components/common/SectionHeader';
import ChampionsTable from '@/components/records/ChampionsTable';
import GoalChart from '@/components/records/GoalChart';
import FactsPanel from '@/components/records/FactsPanel';
import QuizBox from '@/components/records/QuizBox';

type RecordsDashboardProps = {
  onSelectCup: (cup: WorldCupEdition) => void;
};

export default function RecordsDashboard({ onSelectCup }: RecordsDashboardProps) {
  return (
    <section className="section" id="records">
      <SectionHeader
        eyebrow="Records and insights"
        title="Champions, goal trends and fan-friendly facts in one dashboard."
        description="The dashboard is built from the same data layer used by the edition cards."
      />
      <div className="records-grid">
        <ChampionsTable />
        <GoalChart onSelectCup={onSelectCup} />
        <FactsPanel />
        <QuizBox />
      </div>
    </section>
  );
}
