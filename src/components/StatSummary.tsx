interface Props {
  primaryStat: string;
  secondaryStat: string;

  totals: {
    strength: number;
    wisdom: number;
    morale: number;
    agility: number;
    stamina: number;
  };

  levels: {
    strength: number;
    wisdom: number;
    morale: number;
    agility: number;
    stamina: number;
  };
}

export default function StatSummary({
  primaryStat,
  secondaryStat,
  totals,
  levels
}: Props) {
  const statRows = [
    "strength",
    "wisdom",
    "morale",
    "agility",
    "stamina"
  ] as const;

  return (
    <div className="mt-2 rounded bg-slate-900 p-2 text-xs">

      <div className="mb-2 font-bold">
        Stats
      </div>

      {statRows.map(stat => {

        const isPrimary =
          stat === primaryStat;

        const isSecondary =
          stat === secondaryStat;

        return (
          <div
            key={stat}
            className={`
              flex justify-between py-0.5
              ${
                isPrimary
                  ? "text-green-400 font-bold"
                  : isSecondary
                  ? "text-cyan-400 font-semibold"
                  : "text-slate-300"
              }
            `}
          >
            <span>
              {stat.toUpperCase()}
            </span>

            <span>
              {totals[stat]}
              {" "}
              (Lv {levels[stat]})
            </span>
          </div>
        );
      })}

      <div className="mt-2 border-t border-slate-700 pt-1 text-[10px] text-slate-500">
        Green = Primary
        <br />
        Cyan = Secondary
      </div>

    </div>
  );
}