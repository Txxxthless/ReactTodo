import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../models/Todo";

const activeTodoSlice = createSlice({
  name: "activeTodos",
  initialState: {
    activeTodos: [
      new Todo("Doo", new Date(Date.now()), "Idea", "Doo", "Hello!"),
      new Todo("Foo", new Date(Date.now()), "Task", "Doo", "Hello!"),
      new Todo("Bar", new Date(Date.now()), "Random Thought", "Doo", "Hello!"),
      new Todo("Doo", new Date(Date.now()), "Idea", "Doo", "Hello!"),
    ],
  },
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.activeTodos.push(
        new Todo("Foo", new Date(Date.now()), "Task", "Bar", "2023-07-27")
      );
    },
    removeTodo(state, action: PayloadAction<Todo>) {
      state.activeTodos = state.activeTodos.filter(
        (todo) => todo.id !== action.payload.id
      );
    },
    editTodo(state, action: PayloadAction<Todo>) {
      for (let todo of state.activeTodos) {
        if (todo.id === action.payload.id) {
          todo = action.payload;
        }
      }
      console.log(state.activeTodos);
    },
  },
});

export const { addTodo, removeTodo, editTodo } = activeTodoSlice.actions;
export default activeTodoSlice.reducer;
