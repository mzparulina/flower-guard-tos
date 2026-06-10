import type { Position } from "../types/flower";
import type { Edge } from "./buildGraph";

export function solveDiamond(
  graph: Map<string, Edge[]>,
  anchor = "kumquat"
) {

  const positions: Record<
    string,
    Position
  > = {
    [anchor]: {
      row: 0,
      col: 0
    }
  };

  const queue = [anchor];

  while (queue.length) {

    const current =
      queue.shift()!;

    const edges =
      graph.get(current) ?? [];

    edges.forEach(edge => {

      if (
        positions[edge.target]
      ) {
        return;
      }

      positions[
        edge.target
      ] = {
        row:
          positions[current].row +
          edge.rowDelta,

        col:
          positions[current].col +
          edge.colDelta
      };

      queue.push(
        edge.target
      );
    });
  }

  return positions;
}