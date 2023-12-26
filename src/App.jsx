import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div id="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
