import { useMemo, useState } from "react";
import type { Flower, StatType } from "../data/flowers";

type OptimizerPanelProps = {
  flowers: Flower[];
};

type Weights = Record<StatType, number>;

const statOrder: StatType[] = [
  "wisdom",
  "morale",
  "stamina",
  "strength",
  "agility"
];

const defaultWeights: Weights = {
  wisdom: 1,
  morale: 0.7,
  stamina: 0.3,
  strength: 0.2,
  agility: 0.2
};

function scoreFlower(flower: Flower, weights: Weights) {
  return statOrder.reduce(
    (score, stat) => score + flower.stats[stat] * weights[stat],
    0
  );
}

export default function OptimizerPanel({ flowers }: OptimizerPanelProps) {
  const [weights, setWeights] = useState<Weights>(defaultWeights);

  const ranked = useMemo(() => {
    return [...flowers]
      .map(flower => ({
        flower,
        score: scoreFlower(flower, weights)
      }))
      .sort((a, b) => b.score - a.score);
  }, [flowers, weights]);

  return (
    <section className="tool-panel">
      <h2>Optimizer</h2>

      <div className="weight-grid">
        {statOrder.map(stat => (
          <label key={stat} className="weight-row">
            <span>{stat.toUpperCase()}</span>
            <input
              type="number"
              step="0.1"
              value={weights[stat]}
              onChange={event =>
                setWeights(prev => ({
                  ...prev,
                  [stat]: Number(event.target.value)
                }))
              }
            />
          </label>
        ))}
      </div>

      <div className="optimizer-results">
        {ranked.slice(0, 5).map((item, index) => (
          <div key={item.flower.id} className="optimizer-row">
            <span>
              #{index + 1} {item.flower.name}
            </span>
            <strong>{Math.round(item.score).toLocaleString()}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}