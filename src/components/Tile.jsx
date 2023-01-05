import React from "react";

export default function Tile({ title, value }) {
  return (
    <div className="tile rounded-lg bg-transparent backdrop-blur-sm align-middle text-center border-solid border-2 border-white p-4">
      <p className="fd text-xl">{title}</p>
      <p className="fd text-4xl">{value}</p>
    </div>
  );
}
