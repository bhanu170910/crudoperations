"use client"

import DisplayData from "@/components/displaydata";
import TaskInput from "@/components/TaskInput"
import { useState } from "react";
import style from "./style/Home.module.scss"

export default function Home() {
  const [editingTask, setEditingTask] = useState(null);
  return (
    <main className={style.container}>
      <h1>To-do-list</h1>
      <TaskInput editingTask={editingTask} setEditingTask={setEditingTask}></TaskInput>
      <DisplayData setEditingTask={setEditingTask}></DisplayData>

    </main>
  );
}
