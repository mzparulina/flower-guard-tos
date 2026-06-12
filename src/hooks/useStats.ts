import { useState } from "react";
import { getEmptySlotStats } from "../utils/statCalculator";
import type { FlowerStats, SlotStats } from "../types/stats";

export function useStats() {
  const [stats, setStats] = useState<Record<string, FlowerStats>>({});

  function getSlotStats(flowerId: string, slot: string): SlotStats {
    return stats[flowerId]?.slots[slot] ?? getEmptySlotStats();
  }

  function updateSlotStats(
    flowerId: string,
    slot: string,
    values: SlotStats
  ) {
    setStats(prev => ({
      ...prev,
      [flowerId]: {
        flowerId,
        slots: {
          ...(prev[flowerId]?.slots ?? {}),
          [slot]: values
        }
      }
    }));
  }

  function resetStats() {
    setStats({});
  }

  return {
    stats,
    getSlotStats,
    updateSlotStats,
    resetStats
  };
}