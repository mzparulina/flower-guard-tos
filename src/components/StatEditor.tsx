import type { Flower, StatType } from "../data/flowers";

type StatEditorProps = {
  flower: Flower;
  onSetMain: () => void;
};

const statOrder: StatType[] = [
  "wisdom",
  "morale",
  "stamina",
  "strength",
  "agility"
];

export default function StatEditor({ flower, onSetMain }: StatEditorProps) {
  return (
    <section className="tool-panel">
      <h2>Selected Flower</h2>

      <div className="selected-name">
        {flower.name} · Lv {flower.level}
      </div>

      <div className="selected-role">
        {flower.role === "main"
          ? "Main Flower · 100%"
          : `Sub Flower · ${Math.round(flower.absorbRate * 100)}%`}
      </div>

      <button
        type="button"
        className="primary-button"
        onClick={onSetMain}
      >
        Set as Main
      </button>

      <div className="editor-stats">
        {statOrder.map(stat => (
          <div key={stat} className="editor-stat-row">
            <span>{stat.toUpperCase()}</span>
            <strong>{flower.stats[stat].toLocaleString()}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}