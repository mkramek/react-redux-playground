// import { combineReducers } from "react-redux";
// import { statusFilters } from "./constants";
// import {
//   addTask,
//   deleteTask,
//   setStatusFilter,
//   toggleCompleted,
// } from "../actions";
// import { createReducer } from "@reduxjs/toolkit";

// export const tasksInitialState = [];

// export const tasksReducer = createReducer(tasksInitialState, {
//   [addTask]: (state, action) => {
//     return {
//       ...state,
//       tasks: [...state.tasks, action.payload],
//     };
//   },

//   [deleteTask]: (state, action) => {
//     return state.filter((task) => task.id !== action.payload);
//   },

//   [toggleCompleted]: (state, action) => {
//     return state.map((task) => {
//       if (task.id !== action.payload) {
//         return task;
//       }
//       return { ...task, completed: !task.completed };
//     });
//   },
// });

// export const filtersInitialState = {
//   status: statusFilters.all,
// };

// export const filtersReducer = createReducer(filtersInitialState, {
//   [setStatusFilter]: (state, action) => {
//     return {
//       ...state,
//       status: action.payload,
//     };
//   },
// });

// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });

// // const tasksReducer = (state = tasksInitialState, action) => {
// //   switch (action.type) {
// //     case addTask.type:
// //       return {
// //         ...state,
// //         tasks: [...state.tasks, action.payload],
// //       };

// //     case deleteTask.type:
// //       return state.filter((task) => task.id !== action.payload);

// //     case toggleCompleted.type:
// //       return state.map((task) => {
// //         if (task.id !== action.payload) {
// //           return task;
// //         }
// //         return { ...task, completed: !task.completed };
// //       });

// //     default:
// //       return state;
// //   }
// // };
