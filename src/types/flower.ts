export type Direction =
  | "NW"
  | "N"
  | "NE"
  | "W"
  | "C"
  | "E"
  | "SW"
  | "S"
  | "SE";

export interface Flower {
  id: string;
  name: string;
  level: number;
}

export interface SharedPlant {
  id: string;

  flowers: {
    [flowerId: string]: Direction;
  };
}

export interface Position {
  row: number;
  col: number;
}