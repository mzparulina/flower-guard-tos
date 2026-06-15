import type { Flower } from "../data/flowers";
import {
  absorptionData,
  unlockSlotsByLevel,
  type SlotDirection,
  type PlantBonus
} from "../data/absorption";
import {
  getHiddenSharedSlots,
  isSharedSlot
} from "../utils/sharedSlots";
import { flowers } from "../data/flowers";

type AbsorptionGridProps = {
  flower: Flower;
};

const slotLayout: (SlotDirection | "CENTER")[] = [
  "NW", "N", "NE",
  "W", "CENTER", "E",
  "SW", "S", "SE"
];

const statLabel: Record<string, string> = {
  wisdom: "WIS",
  morale: "MOR",
  stamina: "STA",
  strength: "STR",
  agility: "AGI"
};

function formatPlantBonus(bonus?: PlantBonus) {
  if (!bonus) return null;

  return Object.entries(bonus).map(([stat, value]) => (
    <div key={stat} className={`plant-stat plant-stat-${stat}`}>
      +{value} {statLabel[stat]}
    </div>
  ));
}

export default function AbsorptionGrid({ flower }: AbsorptionGridProps) {
  const unlockedSlots = unlockSlotsByLevel(flower.level);
  const hiddenSlots = getHiddenSharedSlots(flowers);

  const flowerAbsorption = absorptionData.find(
    item => item.flowerId === flower.id
  );

  return (
    <div className="absorption-grid">
      {slotLayout.map(slot => {
        if (slot === "CENTER") {
          return (
            <div key="CENTER" className="absorption-center">
              🌸
            </div>
          );
        }

        const isUnlocked = unlockedSlots.includes(slot);
        const isHidden = hiddenSlots[flower.id]?.includes(slot) ?? false;
        const shared = isSharedSlot(flower.id, slot);
        const plant = flowerAbsorption?.plants[slot];

        if (isHidden) {
          return (
            <div
              key={slot}
              className="absorption-slot absorption-slot-hidden"
            />
          );
        }

        return (
          <div
            key={slot}
            className={[
              "absorption-slot",
              isUnlocked ? "absorption-slot-open" : "absorption-slot-locked",
              shared ? "absorption-slot-shared" : "",
              flower.role === "main" ? "absorption-slot-main" : ""
            ].join(" ")}
          >
            <span className="slot-label">{slot}</span>

            {isUnlocked && plant ? (
              <div className="slot-bonus">
                {formatPlantBonus(plant)}
              </div>
            ) : isUnlocked ? (
              <div className="slot-empty">+</div>
            ) : (
              <div className="slot-locked-text">Locked</div>
            )}
          </div>
        );
      })}
    </div>
  );
}