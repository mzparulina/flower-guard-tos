export type StatType =
  | "strength"
  | "wisdom"
  | "morale"
  | "agility"
  | "stamina";

export interface SlotStats {
  strength: number;
  wisdom: number;
  morale: number;
  agility: number;
  stamina: number;
}

export interface FlowerStats {
  flowerId: string;

  slots: Record<
    string,
    SlotStats
  >;
}