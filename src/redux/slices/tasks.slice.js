import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  initialState: [],
  reducers: {
    addTask(state, action) {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    },
    deleteTask(state, action) {
      return state.filter((task) => task.id !== action.payload);
    },
    toggleCompleted(state, action) {
      return state.map((task) => {
        if (task.id !== action.payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      });
    },
  },
  name: "tasks",
});

export const reducer = tasksSlice.reducer;
export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
