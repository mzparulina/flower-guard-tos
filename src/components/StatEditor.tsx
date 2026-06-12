import type {
  SlotStats
}
from "../types/stats";

interface Props {

  value: SlotStats;

  onChange:(
    value:SlotStats
  )=>void;
}

export default function StatEditor({
  value,
  onChange
}:Props){

  const update =
    (
      key:keyof SlotStats,
      amount:number
    ) => {

      onChange({
        ...value,
        [key]: amount
      });
    };

  return (

    <div className="grid grid-cols-2 gap-2">

      <input
        type="number"
        value={value.strength}
        onChange={e =>
          update(
            "strength",
            Number(e.target.value)
          )
        }
      />

      <input
        type="number"
        value={value.wisdom}
        onChange={e =>
          update(
            "wisdom",
            Number(e.target.value)
          )
        }
      />

      <input
        type="number"
        value={value.morale}
        onChange={e =>
          update(
            "morale",
            Number(e.target.value)
          )
        }
      />

      <input
        type="number"
        value={value.agility}
        onChange={e =>
          update(
            "agility",
            Number(e.target.value)
          )
        }
      />

      <input
        type="number"
        value={value.stamina}
        onChange={e =>
          update(
            "stamina",
            Number(e.target.value)
          )
        }
      />

    </div>
  );
}