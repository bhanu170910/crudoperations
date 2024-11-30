"use client "
// components/TaskInput.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "@/redux/slice";
import style from "../app/style/Home.module.scss";

function TaskInput({ editingTask, setEditingTask }) {
  const [task, setTask] = useState(editingTask ? editingTask.name : "");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      if (editingTask) {
        dispatch(editTask({ id: editingTask.id, name: task }));
      } else {
        dispatch(addTask({ id: Date.now(), name: task }));
      }

      setEditingTask(null);
    }
  };

  return (
    <div className={style.taskInput}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">{editingTask ? "Update Task" : "Add Task"}</button>
      </form>
    </div>
  );
}

export default TaskInput;
