
import SectionHeader from '@/components/common/SectionHeader';
import GroupsBoard from '@/components/tournament2026/GroupsBoard';
import HostCities from '@/components/tournament2026/HostCities';
import FormatExplainer from '@/components/tournament2026/FormatExplainer';
import UpcomingSchedule from '@/components/tournament2026/UpcomingSchedule';

export default function Tournament2026() {
  return (
    <section className="section section-2026" id="2026">
      <SectionHeader
        eyebrow="2026 hub"
        title="Designed for the biggest World Cup yet."
        description="The section is ready for live data integration while showing the confirmed host format and city structure."
      />
      <div className="tournament-layout">
        <FormatExplainer />
        <GroupsBoard />
        <HostCities />
        <UpcomingSchedule />
      </div>
    </section>
  );
}
