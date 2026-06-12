import type {
  PlantDirection,
  Flower,
  SharedPlant
} from "../types/flower";

export type SlotMap =
Partial<
 Record<
  string,
  Partial<Record<PlantDirection, boolean>>
 >
>;

export interface OverlapResult {
  owners: SlotMap;
  hidden: SlotMap;
}

export function buildOverlapMaps(
  sharedPlants: SharedPlant[],
  flowers: Flower[]
): OverlapResult {
  const owners: SlotMap = {};
  const hidden: SlotMap = {};

  for (const sharedPlant of sharedPlants) {
    const ids = Object.keys(sharedPlant.flowers);
    if (ids.length < 2) continue;

    const [a, b] = ids;

    const flowerA = flowers.find(f => f.id === a);
    const flowerB = flowers.find(f => f.id === b);

    if (!flowerA || !flowerB) continue;

    const owner =
      flowerA.level > flowerB.level
        ? flowerA.id
        : flowerB.level > flowerA.level
        ? flowerB.id
        : [flowerA.id, flowerB.id].sort()[0];

    const loser = owner === flowerA.id ? flowerB.id : flowerA.id;

    owners[owner] ??= {};
    hidden[loser] ??= {};

    owners[owner]![sharedPlant.flowers[owner]] = true;
    hidden[loser]![sharedPlant.flowers[loser]] = true;
  }

  return { owners, hidden };
}