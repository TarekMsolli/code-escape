import React from "react";
import Select from "react-select";
import GameCard from "./GameCard";

const Games = () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  return (
    <div className="games-wrapper flex flex-wrap items-center justify-evenly w-full">
      <div className="filter-bar w-full flex items-center p-2 custom-drop-shadow">
        <label htmlFor="filterDropdown" className="text-white font-bold mx-2">
          Tags:
        </label>
        <Select
          id="filterDropdown"
          className="filter-dropdown rounded-lg px-2 py-1 min-w-8"
          options={options}
          isSearchable={true}
          placeholder="Search..."
        />
      </div>
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
    </div>
  );
};

export default Games;
