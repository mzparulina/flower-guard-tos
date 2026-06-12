import { STAT_LEVELS }
from "../data/statThresholds";

import type {
  FlowerStats,
  StatType
}
from "../types/stats";

export function getStatLevel(
  points:number
){

  let level = 0;

  for(const row of STAT_LEVELS){

    if(points >= row.points){
      level = row.level;
    }
  }

  return level;
}

export function getFlowerTotals(
  stats: FlowerStats
){

  const totals = {

    strength:0,
    wisdom:0,
    morale:0,
    agility:0,
    stamina:0
  };

  Object.values(
    stats.slots
  ).forEach(slot => {

    totals.strength += slot.strength;
    totals.wisdom += slot.wisdom;
    totals.morale += slot.morale;
    totals.agility += slot.agility;
    totals.stamina += slot.stamina;

  });

  return totals;
}

export function getFlowerLevels(
  stats: FlowerStats
){

  const totals =
    getFlowerTotals(stats);

  return {

    strength:
      getStatLevel(
        totals.strength
      ),

    wisdom:
      getStatLevel(
        totals.wisdom
      ),

    morale:
      getStatLevel(
        totals.morale
      ),

    agility:
      getStatLevel(
        totals.agility
      ),

    stamina:
      getStatLevel(
        totals.stamina
      )
  };
}