import React, { useEffect, useState } from "react";
import "../styles/bots.css";

const generateBot = (id) => {
  const statuses = ["idle", "busy", "charging", "error"];
  return {
    id,
    battery: Math.floor(Math.random() * 100),
    status: statuses[Math.floor(Math.random() * statuses.length)],
    speed: (Math.random() * 2 + 1).toFixed(2),
    task: "Task " + (Math.floor(Math.random() * 20) + 1),
    updated: new Date().toLocaleTimeString()
  };
};

export default function BotStatus() {
  const [bots, setBots] = useState([]);

  const updateBots = () => {
    let newBots = [];
    for (let i = 1; i <= 10; i++) newBots.push(generateBot(i));
    setBots(newBots);
  };

  useEffect(() => {
    updateBots();
    const interval = setInterval(updateBots, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bots-page">
      <h1>Bot Status</h1>

      <div className="bot-grid">
        {bots.map((b) => (
          <div className="bot-card" key={b.id}>
            <h3>Bot #{b.id}</h3>
            <p>Battery: {b.battery}%</p>
            <p>Status: {b.status}</p>
            <p>Speed: {b.speed} m/s</p>
            <p>Current Task: {b.task}</p>
            <p>Last Updated: {b.updated}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
