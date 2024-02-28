import React from "react";

import TaskForm from "./TaskForm";
import "./NewTaskItem.css";

export default function NewTaskItem(props) {
  const saveTaskDataHandler = (enteredTaskData) => {
    const taskData = {
      ...enteredTaskData,
      id: Math.random().toString(),
    };
    props.onAddTask(taskData);
  };

  return (
    <div className="newTask">
      <TaskForm onSaveTaskData={saveTaskDataHandler} />
    </div>
  );
}
