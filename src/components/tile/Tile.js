import React from "react";

export const Tile = ({ name, description }) => {
  console.log(name, Array.from(description))
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {Object.values(description).map(v => {
        return <p className="tile">{v}</p>
      })}
    </div>
  );
};
