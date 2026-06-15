import { flowers, type Flower, type FlowerStats, type StatType } from "./flowers";
import { absorptionData, getAbsorbRate, unlockSlotsByLevel, type PlantBonus } from "./absorption";

export type StatWeights = Partial<Record<StatType, number>>;

export type OptimizedFlowerResult = {
  flowerId: Flower["id"];
  name: string;
  role: Flower["role"];
  level: number;
  absorbRate: number;
  baseStats: FlowerStats;
  absorbedStats: FlowerStats;
  finalStats: FlowerStats;
  score: number;
};

const emptyStats = (): FlowerStats => ({
  strength: 0,
  wisdom: 0,
  morale: 0,
  agility: 0,
  stamina: 0
});

const addBonus = (
  total: FlowerStats,
  bonus: PlantBonus,
  absorbRate: number
): FlowerStats => {
  return {
    strength: total.strength + Math.floor((bonus.strength ?? 0) * absorbRate),
    wisdom: total.wisdom + Math.floor((bonus.wisdom ?? 0) * absorbRate),
    morale: total.morale + Math.floor((bonus.morale ?? 0) * absorbRate),
    agility: total.agility + Math.floor((bonus.agility ?? 0) * absorbRate),
    stamina: total.stamina + Math.floor((bonus.stamina ?? 0) * absorbRate)
  };
};

const addStats = (a: FlowerStats, b: FlowerStats): FlowerStats => ({
  strength: a.strength + b.strength,
  wisdom: a.wisdom + b.wisdom,
  morale: a.morale + b.morale,
  agility: a.agility + b.agility,
  stamina: a.stamina + b.stamina
});

export const calculateScore = (
  stats: FlowerStats,
  weights: StatWeights
): number => {
  return (
    stats.strength * (weights.strength ?? 0) +
    stats.wisdom * (weights.wisdom ?? 0) +
    stats.morale * (weights.morale ?? 0) +
    stats.agility * (weights.agility ?? 0) +
    stats.stamina * (weights.stamina ?? 0)
  );
};

export const defaultWeights: StatWeights = {
  wisdom: 1,
  morale: 0.7,
  stamina: 0.3,
  strength: 0.2,
  agility: 0.2
};

export const calculateFlowerResult = (
  flower: Flower,
  weights: StatWeights = defaultWeights
): OptimizedFlowerResult => {
  const absorbRate = getAbsorbRate(flower);
  const unlockedSlots = unlockSlotsByLevel(flower.level);

  const absorption = absorptionData.find(
    item => item.flowerId === flower.id
  );

  let absorbedStats = emptyStats();

  if (absorption) {
    for (const slot of unlockedSlots) {
      const plant = absorption.plants[slot];

      if (plant) {
        absorbedStats = addBonus(absorbedStats, plant, absorbRate);
      }
    }
  }

  const finalStats = addStats(flower.stats, absorbedStats);

  return {
    flowerId: flower.id,
    name: flower.name,
    role: flower.role,
    level: flower.level,
    absorbRate,
    baseStats: flower.stats,
    absorbedStats,
    finalStats,
    score: calculateScore(finalStats, weights)
  };
};

export const calculateAllFlowerResults = (
  weights: StatWeights = defaultWeights
): OptimizedFlowerResult[] => {
  return flowers
    .map(flower => calculateFlowerResult(flower, weights))
    .sort((a, b) => b.score - a.score);
};

export const getBestFlowerByStat = (
  stat: StatType
): OptimizedFlowerResult | undefined => {
  return calculateAllFlowerResults({ [stat]: 1 })[0];
};

export const getMainFlowerResult = (): OptimizedFlowerResult | undefined => {
  const main = flowers.find(flower => flower.role === "main");

  if (!main) return undefined;

  return calculateFlowerResult(main, defaultWeights);
};