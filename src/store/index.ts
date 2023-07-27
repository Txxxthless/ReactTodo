import { configureStore } from "@reduxjs/toolkit";
import activeTodoReducer from "./activeTodoSlice";

export const store = configureStore({
  reducer: {
    activeTodos: activeTodoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
