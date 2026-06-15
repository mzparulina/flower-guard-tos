import type { Flower } from "../data/flowers";
import AbsorptionGrid from "./AbsorptionGrid";

type FlowerNodeProps = {
  flower: Flower;
};

const statLabel = {
  strength: "STR",
  wisdom: "WIS",
  morale: "MOR",
  agility: "AGI",
  stamina: "STA",
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

      <AbsorptionGrid flower={flower} />

      <div className="flower-power">
        Power {flower.combat.power.toLocaleString()}
      </div>
    </div>
  );
}