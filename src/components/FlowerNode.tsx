import StatEditor from "./StatEditor";
import StatSummary from "./StatSummary";
import { getFlowerLevels, getFlowerTotals } from "../utils/statCalculator";
import type { Direction, Flower } from "../types/flower";
import type { FlowerStats, SlotStats } from "../types/stats";

const SLOT_ORDER: Direction[] = [
  "NW", "N", "NE",
  "W", "C", "E",
  "SW", "S", "SE"
];

function getUnlockedSlots(level: number) {
  const open = new Set<Direction>();

  if (level >= 1) {
    open.add("N");
    open.add("S");
    open.add("E");
    open.add("W");
  }

  if (level >= 3) open.add("NW");
  if (level >= 5) open.add("NE");
  if (level >= 7) open.add("SW");
  if (level >= 9) open.add("SE");

  return open;
}

interface Props {
  flower: Flower;
  flowerStats?: FlowerStats;
  overlaps?: Partial<Record<Direction, boolean>>;
  getSlotStats: (flowerId: string, slot: Direction) => SlotStats;
  updateSlotStats: (
    flowerId: string,
    slot: Direction,
    values: SlotStats
  ) => void;
}

export default function FlowerNode({
  flower,
  flowerStats,
  overlaps = {},
  getSlotStats,
  updateSlotStats
}: Props) {
  const unlocked = getUnlockedSlots(flower.level);
  const totals = getFlowerTotals(flowerStats);
  const levels = getFlowerLevels(totals);

  const allowedStats = [
    flower.primaryStat,
    flower.secondaryStat
  ];

  return (
    <div className="w-[240px]">
      <div className="rounded-xl border border-slate-700 bg-slate-900 p-3 shadow-lg">
        <div className="mb-2 text-center">
          <div className="font-bold text-slate-100">{flower.name}</div>
          <div className="text-xs text-slate-400">
            Primary: <span className="text-emerald-300">{flower.primaryStat}</span>
            {" · "}
            Secondary: <span className="text-cyan-300">{flower.secondaryStat}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1">
          {SLOT_ORDER.map(slot => {
            if (slot === "C") {
              return (
                <div
                  key={slot}
                  className="flex h-20 items-center justify-center rounded-lg border border-blue-400 bg-blue-900/50 text-center text-xs font-bold text-blue-100"
                >
                  <div>
                    <div>{flower.name[0].toUpperCase()}</div>
                    <div>Lv {flower.level}</div>
                  </div>
                </div>
              );
            }

            const isOpen = unlocked.has(slot);
            const isOverlap = overlaps[slot];

            return (
              <div
                key={slot}
                className={[
                  "relative min-h-20 rounded-lg border p-1",
                  isOpen
                    ? "border-emerald-500 bg-emerald-950/40"
                    : "border-rose-700 bg-rose-950/20 opacity-60"
                ].join(" ")}
              >
                <div className="mb-1 flex items-center justify-between text-[10px]">
                  <span className="font-bold text-slate-300">{slot}</span>
                  <span className={isOpen ? "text-emerald-300" : "text-rose-300"}>
                    {isOpen ? "OPEN" : "LOCKED"}
                  </span>
                </div>

                {isOpen && (
                  <StatEditor
                    value={getSlotStats(flower.id, slot)}
                    allowedStats={allowedStats}
                    onChange={value => updateSlotStats(flower.id, slot, value)}
                  />
                )}

                {isOverlap && (
                  <div className="pointer-events-none absolute inset-1 rounded-md border-2 border-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.45)]" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <StatSummary
        primaryStat={flower.primaryStat}
        secondaryStat={flower.secondaryStat}
        totals={totals}
        levels={levels}
      />
    </div>
  );
}