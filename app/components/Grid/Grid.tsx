import { type PropsWithChildren } from "react";
import { GRID, type GridPosition } from "@/robotic-owl/models/grid";

interface Props {
  gridPosition: GridPosition;
}

function Grid({ children, gridPosition }: PropsWithChildren<Props>) {
  return (
    <div className="w-max grid grid-cols-3 grid-rows-3">
      {GRID.map((value, index) => (
        <div
          key={index}
          className="w-20 h-20 outline-dashed outline-2 outline-orange-800 flex items-center justify-center"
        >
          {value.x === gridPosition.x && value.y === gridPosition.y
            ? children
            : null}
        </div>
      ))}
    </div>
  );
}

export default Grid;
