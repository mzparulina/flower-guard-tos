export type StatType =
  | "strength"
  | "wisdom"
  | "morale"
  | "agility"
  | "stamina";

export type StatTotals = Record<StatType, number>;

export interface SlotStats extends StatTotals {}

export interface FlowerStats {
  flowerId: string;
  slots: Record<string, SlotStats>;
}

export const EMPTY_SLOT_STATS: SlotStats = {
  strength: 0,
  wisdom: 0,
  morale: 0,
  agility: 0,
  stamina: 0
};

export const STAT_TYPES: StatType[] = [
  "strength",
  "wisdom",
  "morale",
  "agility",
  "stamina"
];