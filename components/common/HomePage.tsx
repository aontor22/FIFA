
'use client';

import { useMemo, useState } from 'react';
import { worldCups } from '@/data/worldCups';
import { fifaTimeline } from '@/data/timeline';
import type { Region, WorldCupEdition } from '@/lib/types';
import { useTheme } from '@/hooks/useTheme';
import { useDebouncedValue } from '@/hooks/useDebouncedValue';
import { filterEditions } from '@/utils/search';
import Header from '@/components/common/Header';
import Hero from '@/components/hero/Hero';
import Timeline from '@/components/history/Timeline';
import EditionExplorer from '@/components/editions/EditionExplorer';
import EditionModal from '@/components/editions/EditionModal';
import HostMap from '@/components/map/HostMap';
import RecordsDashboard from '@/components/records/RecordsDashboard';
import Tournament2026 from '@/components/tournament2026/Tournament2026';
import KnowledgeSection from '@/components/knowledge/KnowledgeSection';
import SourcesSection from '@/components/sources/SourcesSection';
import Footer from '@/components/footer/Footer';

export default function HomePage() {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState<Region>('All');
  const [selectedCup, setSelectedCup] = useState<WorldCupEdition | null>(worldCups.find((cup) => cup.year === 2022) || null);
  const debouncedQuery = useDebouncedValue(query);
  const { theme, toggleTheme } = useTheme();

  const filteredCups = useMemo(() => filterEditions(worldCups, debouncedQuery, region), [debouncedQuery, region]);

  return (
    <main>
      <Header theme={theme} onThemeToggle={toggleTheme} />
      <Hero onOpenLatest={() => setSelectedCup(worldCups.find((cup) => cup.year === 2026) || null)} />
      <Timeline items={fifaTimeline} />
      <EditionExplorer
        query={query}
        region={region}
        cups={filteredCups}
        onQueryChange={setQuery}
        onRegionChange={setRegion}
        onSelectCup={setSelectedCup}
      />
      <HostMap onSelectCup={setSelectedCup} />
      <RecordsDashboard onSelectCup={setSelectedCup} />
      <Tournament2026 />
      <KnowledgeSection />
      <SourcesSection />
      <Footer />
      {selectedCup && <EditionModal cup={selectedCup} onClose={() => setSelectedCup(null)} />}
    </main>
  );
}
