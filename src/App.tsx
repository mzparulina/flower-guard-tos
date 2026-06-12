import GardenCanvas from "./components/GardenCanvas";

export default function App() {
  return (
    <div>
      <header className="header">
        <h1>
          Flower Guardian Planner
        </h1>

        <p>
          Diamond Layout & Shared Plant Visualization
        </p>
      </header>

      <GardenCanvas />
    </div>
  );
}