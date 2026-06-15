import { flowers, type FlowerStats, type StatType } from "../data/flowers";

const statOrder: StatType[] = [
  "wisdom",
  "morale",
  "stamina",
  "strength",
  "agility"
];

const statLabel: Record<StatType, string> = {
  wisdom: "Wisdom",
  morale: "Morale",
  stamina: "Stamina",
  strength: "Strength",
  agility: "Agility"
};

const getTotals = (): FlowerStats => {
  return flowers.reduce(
    (total, flower) => ({
      wisdom: total.wisdom + flower.stats.wisdom,
      morale: total.morale + flower.stats.morale,
      stamina: total.stamina + flower.stats.stamina,
      strength: total.strength + flower.stats.strength,
      agility: total.agility + flower.stats.agility
    }),
    {
      wisdom: 0,
      morale: 0,
      stamina: 0,
      strength: 0,
      agility: 0
    }
  );
};

export default function StatSummary() {
  const totals = getTotals();

  const totalPower = flowers.reduce(
    (sum, flower) => sum + flower.combat.power,
    0
  );

  return (
    <section className="summary-panel">
      <h2>Garden Summary</h2>

      <div className="summary-power">
        Total Power: {totalPower.toLocaleString()}
      </div>

      <div className="summary-grid">
        {statOrder.map(stat => (
          <div key={stat} className="summary-card">
            <span>{statLabel[stat]}</span>
            <strong>{totals[stat].toLocaleString()}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}