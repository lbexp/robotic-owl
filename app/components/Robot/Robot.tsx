import { DIRECTION, type Direction } from "@/robotic-owl/models/robot";

function Robot({ direction }: { direction: Direction }) {
  return (
    <span className={`block text-6xl w-16 h-16 ${DIRECTION[direction]}`}>
      🦉
    </span>
  );
}

export default Robot;
