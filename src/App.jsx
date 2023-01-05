import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import background from "./images/bigstock-Astronaut-in-suit-against-blac-434152580.png"

function App() {
  return (
    <BrowserRouter>
      <div
        className="App flex bg-contain text-white font-jost"
        style={{
          backgroundImage:
            "url(/images/bigstock-Astronaut-in-suit-against-blac-434152580.png)",
          fontFamily: "Jost",
        }}
      >
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
