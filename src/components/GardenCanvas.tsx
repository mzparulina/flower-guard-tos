import { useDiamondLayout } from "../hooks/useDiamondLayout";

const NODE_SIZE = 180;

export default function GardenCanvas() {
  const positions = useDiamondLayout();

  return (
    <div className="relative w-[1200px] h-[800px] border border-slate-700">

      {Object.entries(positions).map(
        ([flower, pos]) => (
          <div
            key={flower}
            className="absolute bg-slate-800 border border-slate-600 rounded-lg p-3"
            style={{
              left: pos.col * NODE_SIZE + 400,
              top: pos.row * NODE_SIZE + 50
            }}
          >
            {flower}
          </div>
        )
      )}

    </div>
  );
}