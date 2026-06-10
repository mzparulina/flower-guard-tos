import type {
    Flower,
    SharedPlant
} from "../types/flower";

export function determineOwner(
  sharedPlant: SharedPlant,
  flowers: Flower[]
) {

  const ids =
    Object.keys(
      sharedPlant.flowers
    );

  const flowerA =
    flowers.find(
      f => f.id === ids[0]
    )!;

  const flowerB =
    flowers.find(
      f => f.id === ids[1]
    )!;

  if (
    flowerA.level >
    flowerB.level
  ) {
    return flowerA.id;
  }

  if (
    flowerB.level >
    flowerA.level
  ) {
    return flowerB.id;
  }

  return [
    flowerA.id,
    flowerB.id
  ]
    .sort()[0];
}