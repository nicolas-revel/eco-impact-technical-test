export default function MapDisplayer() {
  const map = {
    width: 10,
    height: 10,
    grid: [],
  };
  return (
    <div>
      <h2>Map</h2>
      <div>
        {map.grid.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <div key={cellIndex}>{cell.biome}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
