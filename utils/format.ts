
export function formatNumber(value: number | null | undefined) {
  if (value === null || value === undefined) return 'TBD';
  return new Intl.NumberFormat('en').format(value);
}

export function goalsPerMatch(goals: number | null, matches: number) {
  if (!goals) return 'TBD';
  return (goals / matches).toFixed(2);
}
