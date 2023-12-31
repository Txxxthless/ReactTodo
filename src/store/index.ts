import { configureStore } from "@reduxjs/toolkit";
import activeTodoReducer from "./activeTodoSlice";
import arhivedTodoReducer from "./archivedTodoSlice";

export const store = configureStore({
  reducer: {
    activeTodos: activeTodoReducer,
    archivedTodos: arhivedTodoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
