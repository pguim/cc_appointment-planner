import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ items }) => {
  const tiles = items.map((item) => {
    console.log(item)
    const { name, ...description } = item
    return <Tile name={name} description={description} />
  })
  return (
    <div>
      {tiles}
    </div>
  );
};
