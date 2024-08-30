import { type GridPosition } from "../grid";
import { type Direction } from "./types";

export const DIRECTION: Record<Direction, string> = {
  east: "rotate-0",
  north: "-rotate-90",
  south: "rotate-90",
  west: "rotate-180",
};

export const DIRECTION_MOVEMENT_VALUE: Record<Direction, GridPosition> = {
  east: { x: 1, y: 0 },
  north: { x: 0, y: -1 },
  south: { x: 0, y: 1 },
  west: { x: -1, y: 0 },
};
