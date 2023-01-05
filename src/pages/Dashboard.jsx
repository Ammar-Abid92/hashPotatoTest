import React from "react";
import Tile from "../components/Tile";

export default function Dashboard() {
  return (
    <div className="w-full">
      <div className="head flex justify-end w-full">
        <button className="rounded-full bg-yellow-500 text-white h-12 w-40 my-10">
          Buy PASS
        </button>
        <button className="connect rounded-full bg-transparent border-solid border-4 border-yellow-500 h-12 w-40 my-10 mx-10">
          Connect Wallet
        </button>
      </div>
      <div className="align-middle mx-36">
        <h1 className="text-yellow-600 text-center font-extrabold text-3xl m-12 mt-2">
          EPOCH STALKING
        </h1>
        <div className="grid grid-cols-2 gap-4 content-center">
          <Tile title="PASS Price" value="$1520.33" />
          <Tile title="APR  /  EPR" value="3280%     3%" />
          <Tile title="Market Cap" value="$1520.33" />
          <Tile title="Total Value Locked" value="$1520.33" />
          <Tile title="Treasury Balance" value="$1520.33" />
          <Tile title="PASS Supply" value="$1520.33" />
          <Tile title="Backing per PASS" value="$1520.33" />
          <Tile title="Current Index" value="3.48x" />
        </div>
      </div>
    </div>
  );
}
