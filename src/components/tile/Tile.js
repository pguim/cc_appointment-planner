import React from "react";

export const Tile = ({ name, title, description }) => {
  console.log(name, Array.from(description))
  return (
    <div className="tile-container">
      {name ? <p className="tile-title">{name}</p> : <p className="tile-title">{title}</p>}
      {Object.values(description).map(v => {
        return <p className="tile">{v}</p>
      })}
    </div>
  );
};
