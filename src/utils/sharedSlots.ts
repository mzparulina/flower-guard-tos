import type { Flower } from "../data/flowers";
import type { SlotDirection } from "../data/absorption";

export type SharedSlotPair = {
  flowerA: string;
  slotA: SlotDirection;
  flowerB: string;
  slotB: SlotDirection;
};

export type SharedSlotOwner = {
  ownerId: string;
  hiddenFlowerId: string;
  hiddenSlot: SlotDirection;
};

export const sharedSlotPairs: SharedSlotPair[] = [
  // Row 1 ↔ Row 2
  { flowerA: "strawbie", slotA: "SW", flowerB: "tradescantia", slotB: "N" },
  { flowerA: "strawbie", slotA: "SE", flowerB: "sweet_cherry", slotB: "N" },

  // Row 2 ↔ Row 3
  { flowerA: "tradescantia", slotA: "SW", flowerB: "lacecap", slotB: "N" },
  { flowerA: "tradescantia", slotA: "SE", flowerB: "velvet_futon", slotB: "NW" },

  { flowerA: "sweet_cherry", slotA: "SW", flowerB: "velvet_futon", slotB: "NE" },
  { flowerA: "sweet_cherry", slotA: "SE", flowerB: "lacordini", slotB: "N" },

  // Row 3 ↔ Row 4
  { flowerA: "lacecap", slotA: "SE", flowerB: "morning_glory", slotB: "NW" },
  { flowerA: "velvet_futon", slotA: "SW", flowerB: "morning_glory", slotB: "NE" },
  { flowerA: "velvet_futon", slotA: "SE", flowerB: "wind_chime", slotB: "NW" },
  { flowerA: "lacordini", slotA: "SW", flowerB: "wind_chime", slotB: "NE" },

  // Row 4 ↔ Row 5
  { flowerA: "morning_glory", slotA: "SE", flowerB: "passion_coconut", slotB: "NW" },
  { flowerA: "wind_chime", slotA: "SW", flowerB: "passion_coconut", slotB: "NE" },
];

export function getSharedSlotOwner(
  flowerA: Flower,
  flowerB: Flower
): string {
  if (flowerA.level > flowerB.level) return flowerA.id;
  if (flowerB.level > flowerA.level) return flowerB.id;

  return flowerA.id.localeCompare(flowerB.id) <= 0
    ? flowerA.id
    : flowerB.id;
}

export function getHiddenSharedSlots(flowers: Flower[]) {
  const hidden: Record<string, SlotDirection[]> = {};

  for (const pair of sharedSlotPairs) {
    const flowerA = flowers.find(flower => flower.id === pair.flowerA);
    const flowerB = flowers.find(flower => flower.id === pair.flowerB);

    if (!flowerA || !flowerB) continue;

    const ownerId = getSharedSlotOwner(flowerA, flowerB);

    const hiddenFlowerId =
      ownerId === flowerA.id ? flowerB.id : flowerA.id;

    const hiddenSlot =
      ownerId === flowerA.id ? pair.slotB : pair.slotA;

    if (!hidden[hiddenFlowerId]) {
      hidden[hiddenFlowerId] = [];
    }

    hidden[hiddenFlowerId].push(hiddenSlot);
  }

  return hidden;
}

export function isSharedSlot(
  flowerId: string,
  slot: SlotDirection
): boolean {
  return sharedSlotPairs.some(
    pair =>
      (pair.flowerA === flowerId && pair.slotA === slot) ||
      (pair.flowerB === flowerId && pair.slotB === slot)
  );
}