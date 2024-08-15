import "./App.css";
import MapDisplayer from "./components/MapDisplayer";
import MapGenerator from "./components/MapGenerator";

function App() {
  return (
    <>
      <h1>Map Generator</h1>
      <MapGenerator />
      <MapDisplayer />
    </>
  );
}

export default App;
