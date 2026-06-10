import GardenCanvas from "./components/GardenCanvas";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 p-4">
        <h1 className="text-2xl font-bold">
          Flower Guardian Planner
        </h1>

        <p className="text-sm text-slate-400">
          Diamond Layout & Shared Plant Visualization
        </p>
      </header>

      <main className="p-4">
        <GardenCanvas />
      </main>
    </div>
  );
}

export default App;