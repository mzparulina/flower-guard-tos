import type { Direction } from "../types/flower";

export const DIR_COORDS: Record<
  Direction,
  [number, number]
> = {
  NW: [0, 0],
  N: [0, 1],
  NE: [0, 2],

  W: [1, 0],
  C: [1, 1],
  E: [1, 2],

  SW: [2, 0],
  S: [2, 1],
  SE: [2, 2]
};