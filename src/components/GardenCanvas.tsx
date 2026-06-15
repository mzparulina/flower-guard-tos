import { flowers } from "../data/flowers";
import FlowerNode from "./FlowerNode";

const rows = [1, 2, 3, 4, 5];

export default function GardenCanvas() {
  return (
    <section className="garden-canvas">
      <div className="garden-title-block">
        <h2>Flower Guard</h2>
        <p>Diamond flowerbed simulation</p>
      </div>

      <div className="flowerbed">
        {rows.map(row => {
          const rowFlowers = flowers
            .filter(flower => flower.position.row === row)
            .sort((a, b) => a.position.col - b.position.col);

          return (
            <div
              key={row}
              className={`flowerbed-row flowerbed-row-${rowFlowers.length}`}
            >
              {rowFlowers.map(flower => (
                <FlowerNode key={flower.id} flower={flower} />
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}