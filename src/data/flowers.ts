// src/data/flowerData.ts

export type StatType =
  | "strength"
  | "wisdom"
  | "morale"
  | "agility"
  | "stamina";

export type FlowerSlot =
  | "NW"
  | "N"
  | "NE"
  | "W"
  | "E"
  | "SW"
  | "S"
  | "SE";

export interface Flower {
  id: string;
  name: string;

  level: number;
  power: number;

  primary: StatType;
  secondary: StatType;

  position: {
    row: number;
    col: number;
  };

  stats: Record<StatType, number>;

  main?: boolean;
  prioritized?: boolean;
}


/**
 * Unlock rules:
 *
 *      NW   N   NE
 *       |   |
 *      W -- F -- E
 *       |   |
 *      SW   S   SE
 *
 */
export const unlockRules: Record<number, FlowerSlot[]> = {
  1: ["N", "S", "E", "W"],
  3: ["NW"],
  5: ["NE"],
  7: ["SW"],
  9: ["SE"],
};


export const getUnlockedSlots = (
  level: number
): FlowerSlot[] => {
  return Object.entries(unlockRules)
    .filter(([required]) => level >= Number(required))
    .flatMap(([, slots]) => slots);
};


export const flowers: Flower[] = [
  {
    id: "strawbie",
    name: "Strawbie",

    level: 7,
    power: 77700,

    primary: "morale",
    secondary: "agility",

    position: {
      row: 1,
      col: 1,
    },

    stats: {
      wisdom: 550,
      morale: 1270,
      strength: 550,
      agility: 970,
      stamina: 800,
    },
  },


  {
    id: "tradescantia",
    name: "Tradescantia",

    level: 10,
    power: 257390,

    primary: "stamina",
    secondary: "wisdom",

    position: {
      row: 2,
      col: 1,
    },

    stats: {
      wisdom: 3010,
      morale: 2290,
      strength: 2650,
      agility: 1930,
      stamina: 3730,
    },
  },


  {
    id: "sweet_cherry",
    name: "Sweet Cherry",

    level: 7,
    power: 93020,

    primary: "morale",
    secondary: "agility",

    position: {
      row: 2,
      col: 2,
    },

    stats: {
      wisdom: 720,
      morale: 1270,
      strength: 700,
      agility: 970,
      stamina: 500,
    },
  },


  {
    id: "lacecap",
    name: "Lacecap",

    level: 9,
    power: 152710,

    primary: "stamina",
    secondary: "wisdom",

    position: {
      row: 3,
      col: 1,
    },

    stats: {
      wisdom: 1560,
      morale: 1010,
      strength: 950,
      agility: 1240,
      stamina: 1860,
    },
  },


  {
    id: "velvet_futon",
    name: "Velvet Futon",

    level: 9,
    power: 276170,

    main: true,
    prioritized: true,

    primary: "wisdom",
    secondary: "morale",

    position: {
      row: 3,
      col: 2,
    },

    stats: {
      wisdom: 3190,
      morale: 2300,

      // hidden in screenshot,
      // placeholder until captured
      strength: 0,
      agility: 0,
      stamina: 0,
    },
  },


  {
    id: "lacordini",
    name: "Lacordini",

    level: 7,
    power: 86330,

    primary: "wisdom",
    secondary: "strength",

    position: {
      row: 3,
      col: 3,
    },

    stats: {
      wisdom: 1270,
      morale: 700,
      strength: 970,
      agility: 700,
      stamina: 500,
    },
  },


  {
    id: "morning_glory",
    name: "Morning Glory",

    level: 7,
    power: 78130,

    primary: "wisdom",
    secondary: "agility",

    position: {
      row: 4,
      col: 1,
    },

    stats: {
      wisdom: 1270,
      morale: 590,
      strength: 550,
      agility: 970,
      stamina: 800,
    },
  },


  {
    id: "wind_chime",
    name: "Wind Chime",

    level: 7,
    power: 108460,

    primary: "wisdom",
    secondary: "agility",

    position: {
      row: 4,
      col: 2,
    },

    stats: {
      wisdom: 1270,
      morale: 920,
      strength: 920,
      agility: 990,
      stamina: 500,
    },
  },


  {
    id: "passion_coconut",
    name: "Passion Coconut",

    level: 7,
    power: 86330,

    primary: "wisdom",
    secondary: "strength",

    position: {
      row: 5,
      col: 1,
    },

    stats: {
      wisdom: 1270,
      morale: 550,
      strength: 970,
      agility: 550,
      stamina: 800,
    },
  },
];



/**
 * Diamond display:
 *
 *              Strawbie
 *
 *     Tradescantia   Sweet Cherry
 *
 * Lacecap   Velvet Futon   Lacordini
 *
 *     Morning Glory  Wind Chime
 *
 *          Passion Coconut
 *
 */
export const diamondLayout = [
  ["strawbie"],

  [
    "tradescantia",
    "sweet_cherry",
  ],

  [
    "lacecap",
    "velvet_futon",
    "lacordini",
  ],

  [
    "morning_glory",
    "wind_chime",
  ],

  ["passion_coconut"],
];


export const mainFlower = {
  id: "velvet_futon",

  priorityStats: [
    "wisdom",
    "morale",
  ] satisfies StatType[],
};