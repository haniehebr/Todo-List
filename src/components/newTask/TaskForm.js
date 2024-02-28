import React, { useState } from "react";

import "./TaskForm.css";

export default function TaskForm(props) {
  const [enteredTask, setEnteredTask] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredCategory, setEnteredCategory] = useState("");
  const [enteredWhen, setEnteredWhen] = useState("");
  const [enteredPriority, setEnteredPriority] = useState("");
  const [enteredFullfillment, setEnteredFullfillment] = useState("");

  const taskChangeHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value);
  };

  const whenChangeHandler = (event) => {
    setEnteredWhen(event.target.value);
  };

  const priorityChangeHandler = (event) => {
    setEnteredPriority(event.target.value);
  };

  const fullfillmentChangeHandler = (event) => {
    setEnteredFullfillment(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const taskData = {
      title: enteredTask,
      description: enteredDescription,
      category: enteredCategory,
      when: new Date(enteredWhen),
      priority: enteredPriority,
      fullfillment: enteredFullfillment,
    };

    if (enteredTask.trim().length === 0) {
      return;
    }
    props.onSaveTaskData(taskData);
    setEnteredTask("");
    setEnteredDescription("");
    setEnteredCategory("");
    setEnteredWhen("");
    setEnteredPriority("");
    setEnteredFullfillment("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="newTask__controls">
        <div className="newTask__control">
          <label>Task</label>
          <input type="text" value={enteredTask} onChange={taskChangeHandler} />
        </div>
        <div className="newTask__control">
          <label>Description</label>
          <input
            type="text"
            value={enteredDescription}
            onChange={descriptionChangeHandler}
          />
        </div>
        <div className="newTask__control">
          <label>Category</label>
          <select value={enteredCategory} onChange={categoryChangeHandler}>
            <option value="Deep Work">Deep Work</option>
            <option value="Shallow Work">Shallow Work</option>
            <option value="Chores">Chores</option>
            <option value="Learning">Learning</option>
            <option value="Mind Care">Mind Care</option>
            <option value="Body Care">Body Care</option>
            <option value="People">People</option>
            <option value="Next Week">Next Week</option>
          </select>
        </div>
        <div className="newTask__control">
          <label>When</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-01-01"
            value={enteredWhen}
            onChange={whenChangeHandler}
          />
        </div>
        <div className="newTask__control">
          <label>Priority</label>
          <select value={enteredPriority} onChange={priorityChangeHandler}>
            <option value="High">High</option>
            <option value="Medium">Medium Work</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div className="newTask__control">
          <label>Fullfillment</label>
          <input
            type="number"
            min="0"
            max="100"
            value={enteredFullfillment}
            onChange={fullfillmentChangeHandler}
          />
        </div>
      </div>
      <div className="newTask__actions">
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
}
