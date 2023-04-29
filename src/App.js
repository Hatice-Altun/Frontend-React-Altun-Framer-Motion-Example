import React from "react";
import Navbar from "./components/Navbar/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";
import "./App.css";

function App() {
  return (
      <div className="App">
          <Navbar/>
          <AnimatedRoutes/>
      </div>
  );
}

export default App;
