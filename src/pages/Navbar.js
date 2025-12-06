import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../Gstate";

export default function Navbar() {
  const { username, setIsLoggedIn,} = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
        <h1>Hi, {username}! </h1>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/bots">Bot Status</Link>
        <Link to="/allocate">Task Allocation</Link>
        <Link to="/queue">Task Queue</Link>
        <Link to="/analytics">Analytics</Link>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </nav>
  );
}