import FlowerNode from "./FlowerNode";
import { flowers } from "../data/flowers";
import { sharedPlants } from "../data/sharedPlants";
import { useStats } from "../hooks/useStats";
import { buildGraph } from "../utils/buildGraph";
import { solveDiamond } from "../utils/diamondSolver";
import { buildOverlapOwner } from "../utils/overlapSolver";

const NODE_SIZE = 260;

export default function GardenCanvas() {
  const {
    stats,
    getSlotStats,
    updateSlotStats
  } = useStats();

  const graph = buildGraph(sharedPlants);
  const positions = solveDiamond(graph, "kumquat");
  const overlaps = buildOverlapOwner(sharedPlants, flowers);

  return (
    <div className="relative min-h-[1100px] min-w-[1300px] overflow-auto rounded-xl border border-slate-700 bg-slate-950 p-10">
      {flowers.map(flower => {
        const pos = positions[flower.id];

        if (!pos) return null;

        return (
          <div
            key={flower.id}
            className="absolute"
            style={{
              left: pos.col * NODE_SIZE + 500,
              top: pos.row * NODE_SIZE + 40
            }}
          >
            <FlowerNode
              flower={flower}
              flowerStats={stats[flower.id]}
              overlaps={overlaps[flower.id]}
              getSlotStats={getSlotStats}
              updateSlotStats={updateSlotStats}
            />
          </div>
        );
      })}
    </div>
  );
}