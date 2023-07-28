import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../models/Todo";
import { getArchivedTodos, saveArchivedTodos } from "./helpers";

const arhivedTodoSlice = createSlice({
  name: "activeTodos",
  initialState: {
    arhivedTodos: getArchivedTodos(),
  },
  reducers: {
    archiveTodo(state, action: PayloadAction<Todo>) {
      state.arhivedTodos.push(
        new Todo(
          action.payload.name,
          action.payload.created,
          action.payload.category,
          action.payload.content,
          action.payload.dates
        )
      );
      saveArchivedTodos(state.arhivedTodos);
    },
    removeTodo(state, action: PayloadAction<Todo>) {
      state.arhivedTodos = state.arhivedTodos.filter(
        (todo) => todo.id !== action.payload.id
      );
      saveArchivedTodos(state.arhivedTodos);
    },
    editTodo(state, action: PayloadAction<Todo>) {
      for (let todo of state.arhivedTodos) {
        if (todo.id === action.payload.id) {
          todo = action.payload;
        }
      }
      saveArchivedTodos(state.arhivedTodos);
    },
  },
});

export const { removeTodo, editTodo, archiveTodo } = arhivedTodoSlice.actions;
export default arhivedTodoSlice.reducer;
