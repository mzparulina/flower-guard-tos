import StatSummary from "./StatSummary";

import {
  getFlowerTotals,
  getFlowerLevels
} from "../utils/statCalculator";

import type {
  Flower
} from "../types/flower";

import type {
  FlowerStats
} from "../types/stats";

interface Props {
  flower: Flower;

  flowerStats: FlowerStats;

  overlaps?: Record<
    string,
    boolean
  >;
}

const SLOT_ORDER = [
  "NW",
  "N",
  "NE",

  "W",
  "C",
  "E",

  "SW",
  "S",
  "SE"
];

function getUnlockedSlots(
  level: number
) {
  const open = new Set<string>();

  if (level >= 1) {
    open.add("N");
    open.add("S");
    open.add("E");
    open.add("W");
  }

  if (level >= 3)
    open.add("NW");

  if (level >= 5)
    open.add("NE");

  if (level >= 7)
    open.add("SW");

  if (level >= 9)
    open.add("SE");

  return open;
}

export default function FlowerNode({
  flower,
  flowerStats,
  overlaps = {}
}: Props) {

  const unlocked =
    getUnlockedSlots(
      flower.level
    );

  const totals =
    getFlowerTotals(
      flowerStats
    );

  const levels =
    getFlowerLevels(
      flowerStats
    );

  return (
    <div className="w-[220px]">

      <div
        className="
          rounded-xl
          border
          border-slate-700
          bg-slate-800
          p-2
        "
      >

        <div
          className="
            mb-2
            text-center
            text-sm
            font-bold
          "
        >
          {flower.name}
        </div>

        <div
          className="
            grid
            grid-cols-3
            gap-1
          "
        >

          {SLOT_ORDER.map(
            slot => {

              if (
                slot === "C"
              ) {
                return (
                  <div
                    key={slot}
                    className="
                      flex
                      h-14
                      items-center
                      justify-center
                      rounded
                      bg-blue-700
                      text-xs
                      font-bold
                    "
                  >
                    <div className="text-center">
                      <div>
                        {flower.name[0]}
                      </div>

                      <div>
                        Lv {flower.level}
                      </div>
                    </div>
                  </div>
                );
              }

              const open =
                unlocked.has(
                  slot
                );

              const overlap =
                overlaps[
                  slot
                ];

              return (
                <div
                  key={slot}
                  className={`
                    relative
                    flex
                    h-14
                    items-center
                    justify-center
                    rounded
                    text-[10px]
                    border

                    ${
                      open
                        ? `
                          bg-green-900/30
                          border-green-500
                        `
                        : `
                          bg-red-900/20
                          border-red-500
                        `
                    }
                  `}
                >

                  {slot}

                  {overlap && (
                    <div
                      className="
                        absolute
                        inset-1
                        rounded
                        border-2
                        border-cyan-400
                      "
                    />
                  )}

                </div>
              );
            }
          )}

        </div>

        <div className="mt-2 text-center text-xs text-slate-400">

          Primary:
          {" "}
          <span className="text-green-400">
            {flower.primaryStat}
          </span>

          <br />

          Secondary:
          {" "}
          <span className="text-cyan-400">
            {flower.secondaryStat}
          </span>

        </div>

      </div>

      <StatSummary
        primaryStat={
          flower.primaryStat
        }
        secondaryStat={
          flower.secondaryStat
        }
        totals={totals}
        levels={levels}
      />

    </div>
  );
}