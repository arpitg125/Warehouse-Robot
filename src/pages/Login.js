import React, { useContext, useState } from "react";
import { GlobalContext } from "../Gstate";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function Login() {
  const { setIsLoggedIn, setUsername } = useContext(GlobalContext);

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();

    if (user.trim() === "" || pass.trim() === "") {
      setError("Username and password are required.");
      return;
    }

    
    setUsername(user);
    setIsLoggedIn(true);
    setError("");
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={loginHandler}>
        <h2>Warehouse Robot System</h2>
        <p className="subtitle">Login to continue</p>

        {error && <p className="error-message">{error}</p>}

        <input
          type="text"
          placeholder="Enter Username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
