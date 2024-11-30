// redux/slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.users.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.users = state.users.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const { id, name } = action.payload;
      const taskIndex = state.users.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        state.users[taskIndex] = { id, name };
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = todoSlice.actions;
export default todoSlice.reducer;
