import React from "react";
import TaskItem from "./TaskItem";
import "./Tasks.css";
import TaskTitle from "../header/TaskTitle";

export default function Tasks(props) {
  if (props.items.length === 0) {
    return <h2 className="task-list__fallback">There is no task!</h2>;
  }
  return (
    <div className="tasks">
      <TaskTitle className="task-list" />
      {props.items.map((task) => (
        <TaskItem
          key={task.id}
          title={task.title}
          description={task.description}
          category={task.category}
          when={task.when}
          priority={task.priority}
          fullfillment={task.fullfillment}
        />
      ))}
    </div>
  );
}
