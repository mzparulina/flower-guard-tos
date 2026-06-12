import { useMemo } from "react";
import { flowers } from "../data/flowers";
import { sharedPlants } from "../data/sharedPlants";
import { buildGraph } from "../utils/buildGraph";
import { solveDiamond } from "../utils/diamondSolver";
import { getLayoutBounds, toPixelLayout } from "../utils/layoutMath";
import { buildOverlapMaps } from "../utils/overlapSolver";

export function useDiamondLayout() {
  return useMemo(() => {
    const graph = buildGraph(sharedPlants);
    const positions = solveDiamond(graph, "kumquat");
    const bounds = getLayoutBounds(positions);
    const pixelLayout = toPixelLayout(positions, bounds);
    const overlapMaps = buildOverlapMaps(sharedPlants, flowers);

    return {
      positions,
      bounds,
      pixelLayout,
      overlapOwners: overlapMaps.owners,
      hiddenSlots: overlapMaps.hidden
    };
  }, []);
}