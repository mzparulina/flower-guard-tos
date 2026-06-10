import { useMemo } from "react";

import { sharedPlants }
  from "../data/sharedPlants";

import { buildGraph }
  from "../utils/buildGraph";

import { solveDiamond }
  from "../utils/diamondSolver";

export function useDiamondLayout() {

  return useMemo(() => {

    const graph =
      buildGraph(
        sharedPlants
      );

    const positions =
      solveDiamond(
        graph,
        "kumquat"
      );

    return positions;

  }, []);
}