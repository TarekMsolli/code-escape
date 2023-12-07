import React from "react";
import Multiplayer from "../images/multiplayer.jpg";

const GameCard = () => {
  return (
    <div className="game-card-wrapper m-5 flex items-center justify-center">
      <div
        className="game-card rounded-xl p-5 flex items-end custom-drop-shadow"
        style={{
          backgroundImage: `url(${Multiplayer})`,
          backgroundSize: "cover",
        }}
      >
        <p className="title bg-slate-950 text-white font-bold p-2 rounded-xl">
          placeholder
        </p>
      </div>
    </div>
  );
};

export default GameCard;
