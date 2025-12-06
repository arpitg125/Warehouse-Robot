import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../Gstate";

export default function TaskQueue() {
  const { tasks, setTasks } = useContext(GlobalContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setTasks((prev) => prev.slice(1));
    }, 3000);

    return () => clearInterval(interval);
  }, [setTasks]);

  return (
    <div className="task-page">
      <h1>Task Queue</h1>

      {tasks.length === 0 ? (
        <p>No pending tasks</p>
      ) : (
        tasks.map((t, index) => (
          <div className="task-card" key={index}>
            <p><strong>Pickup:</strong> {t.pickup}</p>
            <p><strong>Drop:</strong> {t.drop}</p>
            <p><strong>Priority:</strong> {t.priority}</p>
            <p><strong>Comments:</strong> {t.comments}</p>
          </div>
        ))
      )}
    </div>
  );
}
