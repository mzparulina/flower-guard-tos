import StatSummary from "./components/StatSummary";
import GardenCanvas from "./components/GardenCanvas";
import "./styles/globals.css";

export default function App() {
  return (
    <main className="app-shell">
      <StatSummary />
      <GardenCanvas />
    </main>
  );
}