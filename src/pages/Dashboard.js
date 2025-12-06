import React, { useContext } from "react";
import { GlobalContext } from "../Gstate";
import "../styles/dashboard.css";

export default function Dashboard() {
  const { username } = useContext(GlobalContext);

  return (
    <div className="dashboard">
      <h1>Hi, {username}! </h1>

      <div className="stats-grid">
        <div className="card">Total Bots: 10</div>
        <div className="card">Active Tasks: 4</div>
        <div className="card">Idle Bots: 3</div>
        <div className="card">Bots in Error: 1</div>
        <div className="card">Pending Tasks: 5</div>
      </div>
    </div>
  );
}