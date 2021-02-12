import "./App.css";
import TimerPage from "./TimerPage/TimerPage";
import React, { useState, useRef } from "react";
import "./sass/styles.scss";

function App() {
  return (
    <div className="app">
      <TimerPage />
    </div>
  );
}

export default App;
