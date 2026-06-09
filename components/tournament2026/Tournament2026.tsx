import SectionHeader from '@/components/common/SectionHeader';
import GroupsBoard from '@/components/tournament2026/GroupsBoard';
import HostCities from '@/components/tournament2026/HostCities';
import FormatExplainer from '@/components/tournament2026/FormatExplainer';
import Highlights2026 from '@/components/tournament2026/Highlights2026';
import UpcomingSchedule from '@/components/tournament2026/UpcomingSchedule';

export default function Tournament2026() {
  return (
    <section className="section section-2026" id="2026">
      <SectionHeader
        eyebrow="2026 hub"
        title="Designed for the biggest World Cup yet."
        description="Now upgraded with a highlight wall and an auto-refreshing schedule module that can connect to an approved live fixture feed."
      />
      <Highlights2026 />
      <div id="schedule" className="schedule-anchor">
        <UpcomingSchedule />
      </div>
      <div className="tournament-layout">
        <FormatExplainer />
        <GroupsBoard />
        <HostCities />
      </div>
    </section>
  );
}
