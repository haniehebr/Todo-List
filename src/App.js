import React, { useState } from "react";

import Title from "./components/header/Title";
import NewTaskItem from "./components/newTask/NewTaskItem";
import Tasks from "./components/taskItem/Tasks";

const DUMMY_TASKS = [
  // {
  //   id: "e1",
  //   title: "Task1",
  //   description: "Description1",
  //   category: "Deep Work",
  //   when: new Date(2020, 7, 14),
  //   priority: "High",
  //   fullfillment: 50,
  // },
  // {
  //   id: "e2",
  //   title: "Task2",
  //   description: "Description2",
  //   category: "Deep Work",
  //   when: new Date(2022, 5, 11),
  //   priority: "Low",
  //   fullfillment: 70,
  // },
];
function App() {
  const [tasks, setTasks] = useState(DUMMY_TASKS);
  const addTaskHandler = (task) => {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  };

  return (
    <div>
      <Title />
      <NewTaskItem onAddTask={addTaskHandler} />
      <Tasks items={tasks} />
    </div>
  );
}
export default App;
