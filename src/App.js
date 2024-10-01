import React from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Credits from "./components/Credits";

import './App.css';
import "./styles/Global.css";


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div id="content">
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
        <Credits></Credits>
      </div>
    </div>
  );
}

export default App;

