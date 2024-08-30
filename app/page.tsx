"use client";
import { useState } from "react";

import Grid from "@/robotic-owl/components/Grid";
import Layout from "@/robotic-owl/components/Layout";
import Robot from "@/robotic-owl/components/Robot/Robot";
import Buttons from "@/robotic-owl/components/Buttons";

import { type GridPosition } from "@/robotic-owl/models/grid";
import {
  DIRECTION_MOVEMENT_VALUE,
  type Direction,
} from "@/robotic-owl/models/robot";

export default function Home() {
  const [position, setPosition] = useState<GridPosition>({ x: 1, y: 1 });
  const [direction, setDirection] = useState<Direction>("east");

  const move = () => {
    const newX = position.x + DIRECTION_MOVEMENT_VALUE[direction].x;
    const newY = position.y + DIRECTION_MOVEMENT_VALUE[direction].y;

    if (newX > 0 && newY > 0 && newX <= 3 && newY <= 3) {
      setPosition({ x: newX, y: newY });
      return;
    }

    alert("Cannot move towards the direction!");
  };

  const changeDirection = (value: Direction) => {
    setDirection(value);
  };

  return (
    <Layout>
      <h1 className=" text-2xl text-center">lbexp`s robotic owl</h1>

      <Grid gridPosition={position}>
        <Robot direction={direction} />
      </Grid>

      <Buttons onChangeDirection={changeDirection} onMove={move} />
    </Layout>
  );
}
