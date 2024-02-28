import React from "react";
import TaskDate from "./TaskDate";
import Fullfillment from "./Fullfillment";
import "./TaskItem.css";
export default function TaskItem(props) {
  return (
    <div className="task-item">
      <div className="task-item__description">
        <h2>{props.title}</h2>
        <h2>{props.description}</h2>
        <h2>{props.category}</h2>
        <h2>{props.priority}</h2>
        <h2>
          <Fullfillment fullfillment={props.fullfillment} />
        </h2>
        <TaskDate when={props.when} />
      </div>
    </div>
  );
}
