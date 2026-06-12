import type {
  Direction,
  Flower,
  SharedPlant
} from "../types/flower";

export type OverlapOwnerMap = Partial<
  Record<string, Partial<Record<Direction, boolean>>>
>;

export interface SharedPlantOwnership {
  sharedPlantId: string;
  ownerFlowerId: string;
  loserFlowerId: string;
  ownerSlot: Direction;
  loserSlot: Direction;
  reason: "higher-level" | "alphabetical-tie";
}

export function determineOwner(
  sharedPlant: SharedPlant,
  flowers: Flower[]
): string | null {
  const ids = Object.keys(sharedPlant.flowers);

  if (ids.length < 2) return null;

  const [a, b] = ids;

  const flowerA = flowers.find(f => f.id === a);
  const flowerB = flowers.find(f => f.id === b);

  if (!flowerA || !flowerB) return null;

  if (flowerA.level > flowerB.level) return flowerA.id;
  if (flowerB.level > flowerA.level) return flowerB.id;

  return [flowerA.id, flowerB.id].sort()[0];
}

export function getSharedPlantOwnerships(
  sharedPlants: SharedPlant[],
  flowers: Flower[]
): SharedPlantOwnership[] {
  const ownerships: SharedPlantOwnership[] = [];

  for (const sharedPlant of sharedPlants) {
    const ids = Object.keys(sharedPlant.flowers);

    if (ids.length < 2) continue;

    const [a, b] = ids;

    const flowerA = flowers.find(f => f.id === a);
    const flowerB = flowers.find(f => f.id === b);

    if (!flowerA || !flowerB) continue;

    const ownerFlowerId = determineOwner(sharedPlant, flowers);

    if (!ownerFlowerId) continue;

    const loserFlowerId =
      ownerFlowerId === flowerA.id
        ? flowerB.id
        : flowerA.id;

    const reason =
      flowerA.level === flowerB.level
        ? "alphabetical-tie"
        : "higher-level";

    ownerships.push({
      sharedPlantId: sharedPlant.id,
      ownerFlowerId,
      loserFlowerId,
      ownerSlot: sharedPlant.flowers[ownerFlowerId],
      loserSlot: sharedPlant.flowers[loserFlowerId],
      reason
    });
  }

  return ownerships;
}

export function buildOverlapOwner(
  sharedPlants: SharedPlant[],
  flowers: Flower[]
): OverlapOwnerMap {
  const map: OverlapOwnerMap = {};

  const ownerships =
    getSharedPlantOwnerships(sharedPlants, flowers);

  for (const item of ownerships) {
    map[item.ownerFlowerId] ??= {};
    map[item.ownerFlowerId]![item.ownerSlot] = true;
  }

  return map;
}