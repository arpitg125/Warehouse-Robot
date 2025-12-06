import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GlobalContext } from "./Gstate";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import BotStatus from "./pages/BotStatus";
import TaskAllocation from "./pages/TaskAllocation";
import TaskQueue from "./pages/TaskQueue";
import Analytics from "./pages/Analytics";

import Navbar from "./pages/Navbar";
import "./styles/global.css";

function App() {
  const { isLoggedIn } = useContext(GlobalContext);

  return (
    <BrowserRouter>

      {isLoggedIn && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
        />

        <Route path="/bots" element={<BotStatus />} />
        <Route path="/allocate" element={<TaskAllocation />} />
        <Route path="/queue" element={<TaskQueue />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
