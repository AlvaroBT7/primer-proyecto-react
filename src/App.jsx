import React, { useEffect } from "react";
import CheckIcon from "./CheckIcon";
import tasks from "./data/tasks";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <h1 className="title">Todo list</h1>
      {tasks.map(({ title, description }, index) => (
        <div key={index} className="task-container">
          <div className="header">
            <CheckIcon />
            <h2 className="task-title">{title}</h2>
          </div>
          <p className="task-description">{description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
