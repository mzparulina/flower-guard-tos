import type { Flower } from "./flowers";

export type DiamondPosition = {
  row: number;
  col: number;
};

export type FlowerPlacement = {
  flowerId: Flower["id"];
  row: number;
  col: number;
};

export const diamondPlacements: FlowerPlacement[] = [
  { flowerId: "strawbie", row: 1, col: 1 },

  { flowerId: "tradescantia", row: 2, col: 1 },
  { flowerId: "sweet_cherry", row: 2, col: 2 },

  { flowerId: "lacecap", row: 3, col: 1 },
  { flowerId: "velvet_futon", row: 3, col: 2 },
  { flowerId: "lacordini", row: 3, col: 3 },

  { flowerId: "morning_glory", row: 4, col: 1 },
  { flowerId: "wind_chime", row: 4, col: 2 },

  { flowerId: "passion_coconut", row: 5, col: 1 }
];

export const MAIN_FLOWER_ID = "velvet_futon";