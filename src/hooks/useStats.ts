import { useState }
from "react";

import type {
  FlowerStats,
  SlotStats
}
from "../types/stats";

export function useStats(){

  const [stats,setStats]
    = useState<
      Record<
        string,
        FlowerStats
      >
    >({});

  const updateSlot = (
    flowerId:string,
    position:string,
    values:SlotStats
  ) => {

    setStats(prev => ({

      ...prev,

      [flowerId]: {

        flowerId,

        slots: {

          ...(prev[flowerId]
            ?.slots ?? {}),

          [position]: values
        }
      }
    }));
  };

  return {

    stats,
    updateSlot
  };
}