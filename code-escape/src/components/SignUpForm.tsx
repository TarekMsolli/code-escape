import React, { useState, useEffect } from "react";
// import DisableArrowScroll from "./DisableArrowScroll";
import Balloon from '../images/Balloon.png';
import Ladder from '../images/Ladder.png';
import Ribbon from '../images/crystal ribbon.png';
import Rocket from '../images/Rocket.png';

const SignUpForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <div className="dark-eye-candy custom-drop-shadow">
        <img src={Rocket} alt="" className="rocket" />
      </div>
      <div className="signup-wrapper flex items-center justify-center">
        <img src={Ribbon} alt="" className="ribbon" />
        <form
          onSubmit={handleSubmit}
          className="signup-form rounded-xl custom-drop-shadow flex justify-center flex-col p-5"
        >
          <h1 className="text-6xl mt-5 font-bold flex justify-center py-3 custom-text-shadow">
            Sign Up
          </h1>

          <div className="form-group flex justify-center py-3">
            <input
              type="text"
              id="username"
              className="rounded-lg w-full py-2 sign-input font-bold pl-4"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>

          <div className="form-group flex justify-center py-3 w-full">
            <input
              type="email"
              id="email"
              className="rounded-lg w-full py-2 sign-input font-bold pl-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>

          <div className="form-group flex justify-center py-3">
            <input
              type="password"
              id="password"
              className="rounded-lg w-full py-2 sign-input font-bold pl-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>

          <div className="form-group flex justify-center py-3">
            <input
              type="confirmpassword"
              id="confirmpassword"
              className="rounded-lg w-full py-2 sign-input font-bold pl-4"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              required
            />
          </div>

          <button
            type="submit"
            className="sign-button w-full p-2 rounded-xl font-bold"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="rules custom-drop-shadow rounded-xl p-5">
        <div className="balloon">
        <img src={Balloon} alt="" />
        </div>
        <h1 className="text-4xl mt-5 font-bold flex justify-center custom-text-shadow text-5xl">Rules</h1>
        <div className="rules-list p-5 bg-white rounded-xl mt-5">
          <ul>
            <li><strong>Respect Others:</strong> Be polite and respectful towards fellow users.</li>
            <li><strong>No Offensive Content:</strong> Avoid sharing or posting offensive material.</li>
            <li><strong>Respect Copyrights:</strong> Don't use content without proper authorization.</li>
            <li><strong>Age Compliance:</strong> Follow any age restrictions for specific features.</li>
          </ul>
          <img src={Ladder} alt="" className="ladder" />
        </div>
      </div>
      {/* <div className="instructions"></div> */}
      {/* <div className="jumper"></div> */}
      <div className="platformer">
        <div className="grass-shine"></div>
        <div className="grass-dark"></div>
      </div>
    </div>
  );
};

export default SignUpForm;
