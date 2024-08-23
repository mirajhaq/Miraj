import React from "react";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";

import './App.css';
import "./styles/Global.css";


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div id="content">
        <Intro></Intro>
        <About></About>

      </div>
    </div>
  );
}

export default App;
