import { useMemo, useState } from "react";
import GardenCanvas from "./components/GardenCanvas";
import StatSummary from "./components/StatSummary";
import OptimizerPanel from "./components/OptimizerPanel";
import StatEditor from "./components/StatEditor";
import { flowers as initialFlowers, type Flower } from "./data/flowers";
import "./styles/globals.css";

export default function App() {
  const [flowers, setFlowers] = useState<Flower[]>(initialFlowers);
  const [selectedFlowerId, setSelectedFlowerId] = useState<string>("velvet_futon");

  const selectedFlower = useMemo(
    () => flowers.find(flower => flower.id === selectedFlowerId) ?? flowers[0],
    [flowers, selectedFlowerId]
  );

  const setMainFlower = (flowerId: string) => {
    setFlowers(prev =>
      prev.map(flower => ({
        ...flower,
        role: flower.id === flowerId ? "main" : "sub",
        absorbRate:
          flower.id === flowerId ? 1 : flower.level >= 9 ? 0.65 : 0.5
      }))
    );
  };

  return (
    <main className="app-shell">
      <StatSummary flowers={flowers} />

      <GardenCanvas
        flowers={flowers}
        selectedFlowerId={selectedFlowerId}
        onSelectFlower={setSelectedFlowerId}
      />

      <div className="tool-grid">
        <StatEditor
          flower={selectedFlower}
          onSetMain={() => setMainFlower(selectedFlower.id)}
        />

        <OptimizerPanel flowers={flowers} />
      </div>
    </main>
  );
}