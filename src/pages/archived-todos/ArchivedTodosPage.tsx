import React from "react";
import { Table } from "../../components/table/Table";
import { TodoItem } from "../../components/todo/TodoItem";

import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { removeTodo, editTodo } from "../../store/archivedTodoSlice";
import { Todo } from "../../models/Todo";

export const ArchivedTodosPage = () => {
  const activeTodos = useAppSelector(
    (state) => state.archivedTodos.arhivedTodos
  );
  const dispatch = useAppDispatch();

  const deleteActiveTodo = (todo: Todo) => {
    dispatch(removeTodo(todo));
  };
  const editActiveTodo = (todo: Todo) => {
    dispatch(editTodo(todo));
  };

  return (
    <div className="App container">
      <h1>Archived Todos</h1>
      <Table
        headers={["Name", "Created", "Category", "Content", "Dates", "Actions"]}
      >
        {activeTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            remove={deleteActiveTodo}
            edit={editActiveTodo}
          />
        ))}
      </Table>
    </div>
  );
};
