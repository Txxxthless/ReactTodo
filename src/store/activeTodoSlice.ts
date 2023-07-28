import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../models/Todo";

const activeTodoSlice = createSlice({
  name: "activeTodos",
  initialState: {
    activeTodos: [
      new Todo(
        "Doo",
        new Date(Date.now()),
        "Idea",
        "Doo",
        "2023-07-20 2023-08-28"
      ),
      new Todo("Foo", new Date(Date.now()), "Task", "Doo", "2023-04-13"),
      new Todo(
        "Bar",
        new Date(Date.now()),
        "Random Thought",
        "Doo",
        "2023-08-24"
      ),
      new Todo(
        "Doo",
        new Date(Date.now()),
        "Idea",
        "Doo",
        "2023-10-21 2023-08-28"
      ),
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

          let datesString = "";

          const dates = action.payload.dates.split(" ");
          for (let date of dates) {
            if (new Date(date).toDateString() !== "Invalid Date") {
              datesString += " " + date;
            }
          }
          todo.dates = datesString;
        }
      }
    },
  },
});

export const { addTodo, removeTodo, editTodo } = activeTodoSlice.actions;
export default activeTodoSlice.reducer;
