import { STAT_TYPES } from "../types/stats";
import type { SlotStats } from "../types/stats";

interface Props {
  value: SlotStats;
  allowedStats: string[];
  onChange: (value: SlotStats) => void;
}

export default function StatEditor({
  value,
  allowedStats,
  onChange
}: Props) {
  function update(stat: keyof SlotStats, amount: number) {
    onChange({
      ...value,
      [stat]: Math.max(0, amount)
    });
  }

  return (
    <div className="grid grid-cols-1 gap-1 stat-editor">
      {STAT_TYPES.filter(stat => allowedStats.includes(stat)).map(stat => (
        <label key={stat} className="flex items-center justify-between gap-1 text-[10px]">
          <span className="uppercase text-slate-400">{stat.slice(0, 3)}</span>
          <input
            type="number"
            min={0}
            value={value[stat]}
            onChange={e => update(stat, Number(e.target.value))}
            className="w-14 rounded border border-slate-700 bg-slate-950 px-1 py-0.5 text-right text-slate-100"
          />
        </label>
      ))}
    </div>
  );
}