import { getFlowerLevels, getFlowerTotals } from "../utils/statCalculator";
import type {
  Direction,
  PlantDirection,
  Flower
} from "../types/flower";

import type { FlowerStats, SlotStats } from "../types/stats";

const SLOT_ORDER: Direction[] = [
  "NW", "N", "NE",
  "W", "C", "E",
  "SW", "S", "SE"
];

function getUnlockedSlots(level: number) {
  const open = new Set<Direction>();

  if (level >= 1) ["N", "S", "E", "W"].forEach(d => open.add(d as Direction));
  if (level >= 3) open.add("NW");
  if (level >= 5) open.add("NE");
  if (level >= 7) open.add("SW");
  if (level >= 9) open.add("SE");

  return open;
}

interface Props {
  flower: Flower;
  flowerStats?: FlowerStats;
  overlaps?: Partial<Record<PlantDirection, boolean>>;
  hiddenSlots?: Partial<Record<PlantDirection, boolean>>;
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
  hiddenSlots = {},
}: Props) {
  const unlocked = getUnlockedSlots(flower.level);
  const totals = getFlowerTotals(flowerStats);
  const levels = getFlowerLevels(totals);

  return (
    <div className="flower-node">
      <div className="flower-slots">
        {SLOT_ORDER.map(slot => {
          if (slot === "C") {
            return (
              <div key={slot} className="slot center">
                {flower.name[0].toLowerCase()}:{flower.level}
              </div>
            );
          }

          const plantSlot = slot as PlantDirection;
          const isOpen = unlocked.has(slot);
          const isOverlap = overlaps[plantSlot];
          const isHidden = hiddenSlots[plantSlot];

          return (
            <div
              key={slot}
              className={[
                "slot",
                isOpen ? "open" : "closed",
                isOverlap ? "overlap" : "",
                isHidden ? "hidden-slot" : ""
              ].filter(Boolean).join(" ")}
            />
          );
        })}
      </div>

      <div className="flower-stats-mini">
        {flower.primaryStat.slice(0, 3)} {totals[flower.primaryStat]} / Lv {levels[flower.primaryStat]}
        <br />
        {flower.secondaryStat.slice(0, 3)} {totals[flower.secondaryStat]} / Lv {levels[flower.secondaryStat]}
      </div>
    </div>
  );
}