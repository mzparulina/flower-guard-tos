// src/data/flowers.ts

export type StatType =
  | "strength"
  | "wisdom"
  | "stamina"
  | "agility"
  | "morale";

export type StatBonus = Partial<Record<StatType, number>>;

export type FlowerPosition = {
  row: number;
  col: number;
};

export type FlowerData = {
  id: string;
  name: string;
  level: number;
  power: number;
  position: FlowerPosition;
  isMain?: boolean;
  prioritized?: boolean;
  absorbRate: number;
  preferredStats: StatType[];
  totalStats: Record<StatType, number>;
  equippedPlants: StatBonus[];
};

export const flowers: FlowerData[] = [
  {
    id: "strawbie",
    name: "Strawbie",
    level: 7,
    power: 105354,
    position: { row: 1, col: 1 },
    absorbRate: 0.5,
    preferredStats: ["morale", "stamina"],
    totalStats: {
      strength: 550,
      wisdom: 550,
      stamina: 986,
      agility: 970,
      morale: 796,
    },
    equippedPlants: [
      { stamina: 114, morale: 114 },
      { stamina: 114, morale: 114 },
      { stamina: 114, morale: 114 },
      { stamina: 340 },
      { morale: 340 },
      { stamina: 190 },
      { stamina: 114, morale: 114 },
    ],
  },

  {
    id: "tradescantia",
    name: "Tradescantia",
    level: 10,
    power: 197120,
    position: { row: 2, col: 1 },
    absorbRate: 0.65,
    preferredStats: ["stamina", "wisdom"],
    totalStats: {
      strength: 2650,
      wisdom: 856,
      stamina: 1326,
      agility: 1930,
      morale: 2290,
    },
    equippedPlants: [
      { stamina: 190 },
      { stamina: 114, wisdom: 114 },
      { stamina: 340 },
      { stamina: 114, wisdom: 114 },
      { stamina: 190 },
      { stamina: 189, wisdom: 189 },
      { stamina: 189, wisdom: 189 },
      { wisdom: 250 },
    ],
  },

  {
    id: "sweet_cherry",
    name: "Sweet Cherry",
    level: 7,
    power: 122820,
    position: { row: 2, col: 2 },
    absorbRate: 0.5,
    preferredStats: ["morale", "wisdom"],
    totalStats: {
      strength: 700,
      wisdom: 816,
      stamina: 500,
      agility: 970,
      morale: 1196,
    },
    equippedPlants: [
      { morale: 340 },
      { wisdom: 114, morale: 114 },
      { wisdom: 114, morale: 114 },
      { morale: 290 },
      { wisdom: 114, morale: 114 },
      { wisdom: 250 },
      { wisdom: 224, morale: 224 },
    ],
  },

  {
    id: "lacecap",
    name: "Lacecap",
    level: 9,
    power: 165420,
    position: { row: 3, col: 1 },
    absorbRate: 0.65,
    preferredStats: ["stamina", "wisdom"],
    totalStats: {
      strength: 950,
      wisdom: 636,
      stamina: 1516,
      agility: 1240,
      morale: 1010,
    },
    equippedPlants: [
      { stamina: 250 },
      { stamina: 189, wisdom: 189 },
      { stamina: 189, wisdom: 189 },
      { stamina: 190 },
      { stamina: 250 },
      { stamina: 190 },
      { stamina: 144, wisdom: 144 },
      { stamina: 114, wisdom: 114 },
    ],
  },

  {
    id: "velvet_futon",
    name: "Velvet Futon",
    level: 9,
    power: 415882,
    position: { row: 3, col: 2 },
    isMain: true,
    prioritized: true,
    absorbRate: 1,
    preferredStats: ["wisdom", "morale"],
    totalStats: {
      strength: 0,
      wisdom: 1606,
      stamina: 0,
      agility: 0,
      morale: 516,
    },
    equippedPlants: [
      { wisdom: 250 },
      { wisdom: 144, morale: 144 },
      { wisdom: 250 },
      { wisdom: 114, morale: 114 },
      { wisdom: 144, morale: 144 },
      { wisdom: 250 },
      { wisdom: 114, morale: 114 },
      { wisdom: 340 },
    ],
  },

  {
    id: "lacordini",
    name: "Lacordini",
    level: 7,
    power: 117441,
    position: { row: 3, col: 3 },
    absorbRate: 0.5,
    preferredStats: ["wisdom", "morale"],
    totalStats: {
      strength: 970,
      wisdom: 1104,
      stamina: 500,
      agility: 700,
      morale: 854,
    },
    equippedPlants: [
      { wisdom: 224, morale: 224 },
      { wisdom: 144, morale: 144 },
      { wisdom: 114, morale: 114 },
      { wisdom: 114, morale: 114 },
      { wisdom: 250 },
      { wisdom: 144, morale: 144 },
      { wisdom: 114, morale: 114 },
    ],
  },

  {
    id: "morning_glory",
    name: "Morning Glory",
    level: 7,
    power: 114293,
    position: { row: 4, col: 1 },
    absorbRate: 0.5,
    preferredStats: ["wisdom", "stamina"],
    totalStats: {
      strength: 550,
      wisdom: 1222,
      stamina: 402,
      agility: 970,
      morale: 590,
    },
    equippedPlants: [
      { wisdom: 144, stamina: 144 },
      { wisdom: 114, stamina: 114 },
      { wisdom: 250 },
      { wisdom: 190 },
      { wisdom: 144, stamina: 144 },
      { wisdom: 190 },
      { wisdom: 190 },
    ],
  },

  {
    id: "wind_chime",
    name: "Wind Chime",
    level: 7,
    power: 150478,
    position: { row: 4, col: 2 },
    absorbRate: 0.5,
    preferredStats: ["wisdom", "morale"],
    totalStats: {
      strength: 920,
      wisdom: 1642,
      stamina: 500,
      agility: 990,
      morale: 432,
    },
    equippedPlants: [
      { wisdom: 340 },
      { wisdom: 144, morale: 144 },
      { wisdom: 114, morale: 114 },
      { wisdom: 340 },
      { wisdom: 190 },
      { wisdom: 340 },
      { wisdom: 174, morale: 174 },
    ],
  },

  {
    id: "passion_coconut",
    name: "Passion Coconut",
    level: 7,
    power: 117930,
    position: { row: 5, col: 1 },
    absorbRate: 0.5,
    preferredStats: ["wisdom", "stamina"],
    totalStats: {
      strength: 970,
      wisdom: 1538,
      stamina: 288,
      agility: 550,
      morale: 550,
    },
    equippedPlants: [
      { wisdom: 144, stamina: 144 },
      { wisdom: 190 },
      { wisdom: 340 },
      { wisdom: 144, stamina: 144 },
      { wisdom: 340 },
      { wisdom: 190 },
      { wisdom: 190 },
    ],
  },
];

export const inventory = {
  singleStatsOwned: 23,
  doubleStatsOwned: 24,

  availableTypes: [
    "strength",
    "wisdom",
    "stamina",
    "agility",
    "morale",
  ] as StatType[],

  doubleStatTypes: [
    ["strength", "wisdom"],
    ["strength", "stamina"],
    ["strength", "agility"],
    ["strength", "morale"],
    ["wisdom", "stamina"],
    ["wisdom", "agility"],
    ["wisdom", "morale"],
    ["stamina", "agility"],
    ["stamina", "morale"],
    ["agility", "morale"],
  ] as [StatType, StatType][],
};