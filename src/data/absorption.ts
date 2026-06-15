import type { Flower, StatType } from "./flowers";

export type SlotDirection =
  | "NW"
  | "N"
  | "NE"
  | "W"
  | "E"
  | "SW"
  | "S"
  | "SE";

export type PlantBonus = Partial<Record<StatType, number>>;

export type FlowerAbsorption = {
  flowerId: Flower["id"];
  plants: Partial<Record<SlotDirection, PlantBonus>>;
};

export const unlockSlotsByLevel = (level: number): SlotDirection[] => {
  const slots: SlotDirection[] = ["N", "S", "E", "W"];

  if (level >= 3) slots.push("NW");
  if (level >= 5) slots.push("NE");
  if (level >= 7) slots.push("SW");
  if (level >= 9) slots.push("SE");

  return slots;
};

export const getAbsorbRate = (flower: Pick<Flower, "role" | "level">): number => {
  if (flower.role === "main") return 1;
  if (flower.level >= 9) return 0.65;
  return 0.5;
};

export const absorptionData: FlowerAbsorption[] = [
  {
    flowerId: "velvet_futon",
    plants: {
      NW: { wisdom: 250 },
      N: { wisdom: 144, morale: 144 },
      NE: { wisdom: 250 },
      W: { wisdom: 114, morale: 114 },
      E: { wisdom: 144, morale: 144 },
      SW: { wisdom: 250 },
      S: { wisdom: 114, morale: 114 },
      SE: { wisdom: 340 }
    }
  },

  {
    flowerId: "strawbie",
    plants: {
      NW: { stamina: 114, morale: 114 },
      N: { stamina: 114, morale: 114 },
      NE: { stamina: 114, morale: 114 },
      W: { stamina: 340 },
      E: { morale: 340 },
      SW: { stamina: 190 },
      S: { stamina: 114, morale: 114 }
    }
  },

  {
    flowerId: "tradescantia",
    plants: {
      NW: { stamina: 190 },
      N: { stamina: 114, wisdom: 114 },
      NE: { stamina: 340 },
      W: { stamina: 114, wisdom: 114 },
      E: { stamina: 190 },
      SW: { stamina: 189, wisdom: 189 },
      S: { stamina: 189, wisdom: 189 },
      SE: { wisdom: 250 }
    }
  },

  {
    flowerId: "sweet_cherry",
    plants: {
      NW: { morale: 340 },
      N: { wisdom: 114, morale: 114 },
      NE: { wisdom: 114, morale: 114 },
      W: { morale: 290 },
      E: { wisdom: 114, morale: 114 },
      SW: { wisdom: 250 },
      S: { wisdom: 224, morale: 224 }
    }
  },

  {
    flowerId: "lacecap",
    plants: {
      NW: { stamina: 250 },
      N: { stamina: 189, wisdom: 189 },
      NE: { stamina: 189, wisdom: 189 },
      W: { stamina: 190 },
      E: { stamina: 250 },
      SW: { stamina: 190 },
      S: { stamina: 144, wisdom: 144 },
      SE: { stamina: 114, wisdom: 114 }
    }
  },

  {
    flowerId: "lacordini",
    plants: {
      NW: { wisdom: 224, morale: 224 },
      N: { wisdom: 144, morale: 144 },
      NE: { wisdom: 114, morale: 114 },
      W: { wisdom: 114, morale: 114 },
      E: { wisdom: 250 },
      SW: { wisdom: 144, morale: 144 },
      S: { wisdom: 114, morale: 114 }
    }
  },

  {
    flowerId: "morning_glory",
    plants: {
      NW: { wisdom: 144, stamina: 144 },
      N: { wisdom: 114, stamina: 114 },
      NE: { wisdom: 250 },
      W: { wisdom: 190 },
      E: { wisdom: 144, stamina: 144 },
      SW: { wisdom: 190 },
      S: { wisdom: 190 }
    }
  },

  {
    flowerId: "wind_chime",
    plants: {
      NW: { wisdom: 340 },
      N: { wisdom: 144, morale: 144 },
      NE: { wisdom: 114, morale: 114 },
      W: { wisdom: 340 },
      E: { wisdom: 190 },
      SW: { wisdom: 340 },
      S: { wisdom: 174, morale: 174 }
    }
  },

  {
    flowerId: "passion_coconut",
    plants: {
      NW: { stamina: 144, wisdom: 144 },
      N: { wisdom: 190 },
      NE: { wisdom: 340 },
      W: { stamina: 144, wisdom: 144 },
      E: { wisdom: 340 },
      SW: { wisdom: 190 },
      S: { wisdom: 190 }
    }
  }
];