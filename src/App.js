import React from "react";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Swim from "./pages/Swim";
import Surf from "./pages/Surf";
import Windsurfing from "./pages/Windsurfing";
import "./App.css";

function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
              <Route exact path="/" element={<Swim/>}/>
              <Route path="/surf" element={<Surf/>}/>
              <Route path="/windsurfing" element={<Windsurfing/>}/>
          </Routes>
      </div>
  );
}

export default App;
