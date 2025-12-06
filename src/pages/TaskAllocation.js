import React, { useState, useContext } from "react";
import { GlobalContext } from "../Gstate";
import "../styles/tasks.css";

export default function TaskAllocation() {
  const { tasks, setTasks } = useContext(GlobalContext);

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [priority, setPriority] = useState("Low");
  const [comments, setComments] = useState("");

  const submitTask = (e) => {
    e.preventDefault();
    const newTask = { pickup, drop, priority, comments };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="task-page">
      <h1>Task Allocation</h1>

      <form className="task-form" onSubmit={submitTask}>
        <input placeholder="Pickup Location" value={pickup} onChange={(e) => setPickup(e.target.value)} />

        <input placeholder="Drop Location" value={drop} onChange={(e) => setDrop(e.target.value)} />

        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <textarea
          placeholder="Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />

        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}
