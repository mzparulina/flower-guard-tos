import { STAT_TYPES } from "../types/stats";
import type { StatTotals, StatType } from "../types/stats";

interface Props {
  primaryStat: StatType;
  secondaryStat: StatType;
  totals: StatTotals;
  levels: StatTotals;
}

export default function StatSummary({
  primaryStat,
  secondaryStat,
  totals,
  levels
}: Props) {
  return (
    <div className="mt-2 rounded-lg border border-slate-700 bg-slate-950/80 p-2 text-xs">
      <div className="mb-2 font-bold text-slate-200">Stats</div>

      {STAT_TYPES.map(stat => {
        const isPrimary = stat === primaryStat;
        const isSecondary = stat === secondaryStat;

        return (
          <div
            key={stat}
            className={[
              "flex justify-between gap-2 py-0.5",
              isPrimary && "font-bold text-emerald-300",
              isSecondary && "font-semibold text-cyan-300",
              !isPrimary && !isSecondary && "text-slate-400"
            ].filter(Boolean).join(" ")}
          >
            <span>{stat.toUpperCase()}</span>
            <span>{totals[stat]} · Lv {levels[stat]}</span>
          </div>
        );
      })}

      <div className="mt-2 border-t border-slate-800 pt-1 text-[10px] text-slate-500">
        Emerald = Primary · Cyan = Secondary
      </div>
    </div>
  );
}