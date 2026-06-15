export type StatType =
  | "strength"
  | "wisdom"
  | "morale"
  | "agility"
  | "stamina";

export interface FlowerStats {
  strength: number;
  wisdom: number;
  morale: number;
  agility: number;
  stamina: number;
}

export interface Flower {
  id: string;
  name: string;

  level: number;
  role: "main" | "sub";
  absorbRate: number;

  primary: StatType;
  secondary: StatType;

  position: {
    row: number;
    col: number;
  };

  stats: FlowerStats;

  combat: {
    power: number;
    pvpAtk: number;
    pvpHp: number;
    shield: number;
    mergedShield: number;
  };
}


export const flowers: Flower[] = [
  {
    id: "strawbie",
    name: "Strawbie",

    level: 7,
    role: "sub",
    absorbRate: 0.5,

    primary: "morale",
    secondary: "agility",

    position: {
      row: 1,
      col: 1
    },

    stats: {
      stamina: 587,
      strength: 210,
      wisdom: 210,
      agility: 577,
      morale: 1137
    },

    combat: {
      power: 105354,
      pvpAtk: 2070,
      pvpHp: 41400,
      shield: 49500,
      mergedShield: 159750
    }
  },


  {
    id: "tradescantia",
    name: "Tradescantia",

    level: 10,
    role: "sub",
    absorbRate: 0.65,

    primary: "stamina",
    secondary: "wisdom",

    position: {
      row: 2,
      col: 1
    },

    stats: {
      stamina: 3433,
      strength: 850,
      wisdom: 1219,
      agility: 625,
      morale: 737
    },

    combat: {
      power: 197120,
      pvpAtk: 8397,
      pvpHp: 167940,
      shield: 184875,
      mergedShield: 327187
    }
  },


  {
    id: "sweet_cherry",
    name: "Sweet Cherry",

    level: 7,
    role: "sub",
    absorbRate: 0.5,

    primary: "morale",
    secondary: "agility",

    position: {
      row: 2,
      col: 2
    },

    stats: {
      stamina: 254,
      strength: 326,
      wisdom: 578,
      agility: 707,
      morale: 1487
    },

    combat: {
      power: 122820,
      pvpAtk: 2070,
      pvpHp: 41400,
      shield: 67500,
      mergedShield: 204750
    }
  },


  {
    id: "lacecap",
    name: "Lacecap",

    level: 9,
    role: "sub",
    absorbRate: 0.65,

    primary: "stamina",
    secondary: "wisdom",

    position: {
      row: 3,
      col: 1
    },

    stats: {
      stamina: 2740,
      strength: 460,
      wisdom: 885,
      agility: 572,
      morale: 483
    },

    combat: {
      power: 165420,
      pvpAtk: 3450,
      pvpHp: 69000,
      shield: 105000,
      mergedShield: 262500
    }
  },


  {
    id: "velvet_futon",
    name: "Velvet Futon",

    level: 9,
    role: "main",
    absorbRate: 1,

    primary: "wisdom",
    secondary: "morale",

    position: {
      row: 3,
      col: 2
    },

    stats: {
      stamina: 2565,
      strength: 3327,
      wisdom: 6010,
      agility: 4404,
      morale: 3843
    },

    combat: {
      power: 415882,
      pvpAtk: 22850,
      pvpHp: 457000,
      shield: 762500,
      mergedShield: 1456250
    }
  },


  {
    id: "lacordini",
    name: "Lacordini",

    level: 7,
    role: "sub",
    absorbRate: 0.5,

    primary: "wisdom",
    secondary: "strength",

    position: {
      row: 3,
      col: 3
    },

    stats: {
      stamina: 222,
      strength: 638,
      wisdom: 1361,
      agility: 290,
      morale: 546
    },

    combat: {
      power: 117441,
      pvpAtk: 2070,
      pvpHp: 41400,
      shield: 58500,
      mergedShield: 182250
    }
  },


  {
    id: "morning_glory",
    name: "Morning Glory",

    level: 7,
    role: "sub",
    absorbRate: 0.5,

    primary: "wisdom",
    secondary: "agility",

    position: {
      row: 4,
      col: 1
    },

    stats: {
      stamina: 412,
      strength: 210,
      wisdom: 1350,
      agility: 577,
      morale: 223
    },

    combat: {
      power: 114293,
      pvpAtk: 2070,
      pvpHp: 41400,
      shield: 49500,
      mergedShield: 159750
    }
  },


  {
    id: "wind_chime",
    name: "Wind Chime",

    level: 7,
    role: "sub",
    absorbRate: 0.5,

    primary: "wisdom",
    secondary: "morale",

    position: {
      row: 4,
      col: 2
    },

    stats: {
      stamina: 288,
      strength: 449,
      wisdom: 1793,
      agility: 793,
      morale: 578
    },

    combat: {
      power: 150478,
      pvpAtk: 2070,
      pvpHp: 41400,
      shield: 81000,
      mergedShield: 238500
    }
  },


  {
    id: "passion_coconut",
    name: "Passion Coconut",

    level: 7,
    role: "sub",
    absorbRate: 0.5,

    primary: "wisdom",
    secondary: "strength",

    position: {
      row: 5,
      col: 1
    },

    stats: {
      stamina: 411,
      strength: 638,
      wisdom: 1578,
      agility: 239,
      morale: 239
    },

    combat: {
      power: 117930,
      pvpAtk: 2070,
      pvpHp: 41400,
      shield: 58500,
      mergedShield: 182250
    }
  }
];