"use client";
import { useState } from "react";

import Grid from "@/robotic-owl/components/Grid";
import Layout from "@/robotic-owl/components/Layout";
import Robot from "@/robotic-owl/components/Robot/Robot";

import { type GridPosition } from "@/robotic-owl/models/grid";
import { type Direction } from "@/robotic-owl/models/robot";

export default function Home() {
  const [position, setPosition] = useState<GridPosition>({ x: 1, y: 1 });
  const [direction, setDirection] = useState<Direction>("west");

  return (
    <Layout>
      <h1 className=" text-2xl text-orange-800 text-center">
        lbexp`s robotic owl
      </h1>
      <Grid gridPosition={position}>
        <Robot />
      </Grid>
    </Layout>
  );
}
