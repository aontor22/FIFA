
import { formatNumber } from '@/utils/format';

type StatPillProps = {
  value: number;
  label: string;
};

export default function StatPill({ value, label }: StatPillProps) {
  return (
    <div className="stat-pill">
      <strong>{formatNumber(value)}</strong>
      <span>{label}</span>
    </div>
  );
}
