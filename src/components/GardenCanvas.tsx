import { flowers } from "../data/flowers";
import FlowerNode from "./FlowerNode";

const diamondRows = [
  [0],
  [1, 2],
  [3, 4, 5],
  [6, 7],
  [8],
];

export default function GardenCanvas() {
  return (
    <div className="garden-canvas">

      <h2 className="garden-title">
        Flower Guard
      </h2>

      <div className="diamond-layout">

        {diamondRows.map((row, index) => (
          <div 
            key={index}
            className="diamond-row"
          >

            {row.map((flowerIndex) => {
              const flower = flowers[flowerIndex];

              return (
                <FlowerNode
                  key={flower.id}
                  flower={flower}
                />
              );
            })}

          </div>
        ))}

      </div>

    </div>
  );
}