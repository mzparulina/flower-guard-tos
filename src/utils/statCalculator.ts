import { STAT_LEVELS } from "../data/statThresholds";
import { EMPTY_SLOT_STATS, STAT_TYPES } from "../types/stats";
import type { FlowerStats, StatTotals } from "../types/stats";

export function getStatLevel(points: number): number {
  let level = 0;

  for (const threshold of STAT_LEVELS) {
    if (points >= threshold.points) {
      level = threshold.level;
    }
  }

  return level;
}

export function createEmptyTotals(): StatTotals {
  return { ...EMPTY_SLOT_STATS };
}

export function getFlowerTotals(flowerStats?: FlowerStats): StatTotals {
  const totals = createEmptyTotals();

  if (!flowerStats) return totals;

  for (const slot of Object.values(flowerStats.slots)) {
    for (const stat of STAT_TYPES) {
      totals[stat] += slot[stat] ?? 0;
    }
  }

  return totals;
}

export function getFlowerLevels(totals: StatTotals): StatTotals {
  const levels = createEmptyTotals();

  for (const stat of STAT_TYPES) {
    levels[stat] = getStatLevel(totals[stat]);
  }

  return levels;
}

export function getEmptySlotStats() {
  return { ...EMPTY_SLOT_STATS };
}