import { type Direction } from "@/robotic-owl/models/robot";

interface Props {
  onChangeDirection: (direction: Direction) => void;
  onMove: () => void;
}

function Buttons({ onChangeDirection, onMove }: Props) {
  return (
    <div className="flex items-center gap-12">
      <button onClick={onMove}>move</button>

      <div className="flex flex-col gap-2">
        <button onClick={() => onChangeDirection("north")}>up</button>
        <div className="flex gap-4">
          <button onClick={() => onChangeDirection("west")}>left</button>
          <button onClick={() => onChangeDirection("east")}>right</button>
        </div>
        <button onClick={() => onChangeDirection("south")}>down</button>
      </div>
    </div>
  );
}

export default Buttons;
