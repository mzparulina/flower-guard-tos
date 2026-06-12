import type { StatType } from "./stats";


export type Direction =
  | "NW" | "N" | "NE"
  | "W" | "C" | "E"
  | "SW" | "S" | "SE";

export type PlantDirection = Exclude<Direction, "C">;

export interface Flower {
  id: string;
  name: string;
  level: number;
  primaryStat: StatType;
  secondaryStat: StatType;
}

export interface SharedPlant {
  id: string;
  flowers: Record<string, Direction>;
}

export interface Position {
  row: number;
  col: number;
}
