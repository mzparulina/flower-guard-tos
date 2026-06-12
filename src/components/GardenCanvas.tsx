import { flowers } from "../data/flowers";
import { useDiamondLayout } from "../hooks/useDiamondLayout";
import { useStats } from "../hooks/useStats";
import FlowerNode from "./FlowerNode";

export default function GardenCanvas() {
  const {
    pixelLayout,
    bounds,
    overlapOwners,
    hiddenSlots
  } = useDiamondLayout();

  const {
    stats,
    getSlotStats,
    updateSlotStats
  } = useStats();

  return (
    <div className="garden-viewport">
      <div
        className="garden-canvas"
        style={{
          width: bounds.width,
          height: bounds.height
        }}
      >
        {flowers.map(flower => {
          const pos = pixelLayout[flower.id];

          if (!pos) return null;

          return (
            <div
              key={flower.id}
              className="flower-position"
              style={{
                transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`
              }}
            >
              <FlowerNode
                flower={flower}
                flowerStats={stats[flower.id]}
                overlaps={overlapOwners[flower.id]}
                hiddenSlots={hiddenSlots[flower.id]}
                getSlotStats={getSlotStats}
                updateSlotStats={updateSlotStats}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}