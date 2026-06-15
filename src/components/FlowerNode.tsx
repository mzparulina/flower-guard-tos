import type { Flower } from "../data/flowers";

type FlowerNodeProps = {
  flower: Flower;
};

const statLabel: Record<string, string> = {
  strength: "STR",
  wisdom: "WIS",
  morale: "MOR",
  agility: "AGI",
  stamina: "STA"
};

export default function FlowerNode({ flower }: FlowerNodeProps) {
  const isMain = flower.role === "main";

  return (
    <div className={`flower-node ${isMain ? "flower-node-main" : ""}`}>
      <div className="flower-header">
        <span className="flower-name">{flower.name}</span>
        <span className="flower-level">Lv {flower.level}</span>
      </div>

      <div className="flower-role">
        {isMain ? "MAIN" : `${Math.round(flower.absorbRate * 100)}%`}
      </div>

      <div className="flower-focus">
        {statLabel[flower.primary]} / {statLabel[flower.secondary]}
      </div>

      <div className="flower-stats">
        <div>WIS {flower.stats.wisdom}</div>
        <div>MOR {flower.stats.morale}</div>
        <div>STA {flower.stats.stamina}</div>
        <div>STR {flower.stats.strength}</div>
        <div>AGI {flower.stats.agility}</div>
      </div>

      <div className="flower-power">
        Power {flower.combat.power.toLocaleString()}
      </div>
    </div>
  );
}