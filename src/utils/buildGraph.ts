import type { SharedPlant } from "../types/flower";
import { DIR_COORDS } from "./directions";

export interface Edge {
  target: string;
  rowDelta: number;
  colDelta: number;
}

export function buildGraph(
  sharedPlants: SharedPlant[]
) {
  const graph = new Map<
    string,
    Edge[]
  >();

  const addEdge = (
    from: string,
    target: string,
    rowDelta: number,
    colDelta: number
  ) => {
    if (!graph.has(from)) {
      graph.set(from, []);
    }

    graph.get(from)!.push({
      target,
      rowDelta,
      colDelta
    });
  };

  sharedPlants.forEach(plant => {

    const [a, b] =
      Object.keys(plant.flowers);

    const dirA =
      plant.flowers[a];

    const dirB =
      plant.flowers[b];

    const [ra, ca] =
      DIR_COORDS[dirA];

    const [rb, cb] =
      DIR_COORDS[dirB];

    addEdge(
      a,
      b,
      ra - rb,
      ca - cb
    );

    addEdge(
      b,
      a,
      rb - ra,
      cb - ca
    );
  });

  return graph;
}