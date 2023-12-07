import React, { useState } from "react";

const SignUpForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <div className="dark-eye-candy custom-drop-shadow"></div>
      <div className="signup-wrapper flex items-center justify-center">
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

          <button
            type="submit"
            className="sign-button w-full p-2 rounded-xl font-bold"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="rules custom-drop-shadow rounded-xl">
        <h1 className="text-4xl mt-5 font-bold flex justify-center">Rules</h1>
      </div>
      <div className="instructions"></div>
      <div className="jumper"></div>
      <div className="platformer">
        <div className="grass-shine"></div>
        <div className="grass-dark"></div>
      </div>
    </div>
  );
};

export default SignUpForm;
