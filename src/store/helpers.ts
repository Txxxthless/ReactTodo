import { Todo } from "../models/Todo";

export const saveArchivedTodos = (todos: Todo[]) => {
  localStorage.setItem("archivedTodos", JSON.stringify(todos));
};

export const getArchivedTodos = () => {
  const json = localStorage.getItem("archivedTodos");
  if (json) {
    return JSON.parse(json) as Todo[];
  }
  return [] as Todo[];
};
