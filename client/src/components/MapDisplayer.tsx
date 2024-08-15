import { useMap } from "../hooks/map.hook";

export default function MapDisplayer() {
  const colorTable = {
    plain: "bg-green-500",
    desert: "bg-yellow-500",
    forest: "bg-green-800",
    ocean: "bg-blue-500",
  };

  const map = useMap();

  return (
    <div>
      <h2>Map</h2>
      <table>
        {map.grid.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className={`h-10 w-10 ${colorTable[cell.biome]}`}
              ></td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}
