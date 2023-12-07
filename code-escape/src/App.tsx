import React, { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import Home from "./components/Home";
import Games from "./components/Games";
import GameAssets from "./components/GameAssets";
import Logo from "./images/logo.png";
import LogoPressed from "./images/logo-pressed.png";

const App: React.FC = () => {
  const [isLogoPressed, setLogoPressed] = useState(false);

  const handleMouseDown = () => {
    setLogoPressed(true);
  };

  const handleMouseUp = () => {
    setLogoPressed(false);
  };

  return (
    <div>
      <div className="navbar-wrapper py-3 mt-5">
        <nav className="navbar flex items-center">
          <div className="navbar-inner flex justify-evenly items-center font-bold py-1">
            <img
              src={isLogoPressed ? LogoPressed : Logo}
              alt=""
              className="code-escape-logo"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            />
            <a href="/">Home</a>
            <a href="/games">Games</a>
            <a href="/game-assets">Game Assets</a>
            <a href="/game-jam">Game Jam</a>
            <a href="/signup">Sign Up</a>
          </div>
        </nav>
      </div>
      {window.location.pathname === "/" ? <Home /> : null}
      {window.location.pathname === "/signup" ? <SignUpForm /> : null}
      {window.location.pathname === "/games" ? <Games /> : null}
      {window.location.pathname === "/game-assets" ? <GameAssets /> : null}
    </div>
  );
};

export default App;
