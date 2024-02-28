import React from "react";
import "./TaskTitle.css";
export default function TaskTitle() {
  return (
    <div className="task-title">
      <div className="task-title__description">
        <h2>Task</h2>
        <h2>Description</h2>
        <h2>Category</h2>
        <h2>Priority</h2>
        <h2>Fullfillment</h2>
        <h2>When</h2>
      </div>
    </div>
  );
}
