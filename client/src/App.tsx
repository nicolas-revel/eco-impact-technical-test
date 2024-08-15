import "./App.css";
import MapDisplayer from "./components/MapDisplayer";
import MapGenerator from "./components/MapGenerator";
import { MapProvider } from "./contexts/map.context";

function App() {
  return (
    <MapProvider>
      <h1>Map Generator</h1>
      <MapGenerator />
      <MapDisplayer />
    </MapProvider>
  );
}

export default App;
