import React from "react";
import { Table } from "../../components/table/Table";
import { TodoItem } from "../../components/todo/TodoItem";

import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { addTodo, removeTodo, editTodo } from "../../store/activeTodoSlice";
import { archiveTodo } from "../../store/archivedTodoSlice";
import { Todo } from "../../models/Todo";
import { Totals } from "./Totals";

export const ActiveTodosPage = () => {
  const activeTodos = useAppSelector((state) => state.activeTodos.activeTodos);
  const dispatch = useAppDispatch();

  const addActiveTodo = () => {
    dispatch(addTodo("string"));
  };
  const deleteActiveTodo = (todo: Todo) => {
    dispatch(removeTodo(todo));
  };
  const editActiveTodo = (todo: Todo) => {
    dispatch(editTodo(todo));
  };
  const archiveActiveTodo = (todo: Todo) => {
    dispatch(archiveTodo(todo));
  };

  return (
    <div className="App container">
      <h1>Active Todos</h1>
      <Table
        headers={["Name", "Created", "Category", "Content", "Dates", "Actions"]}
      >
        {activeTodos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            remove={deleteActiveTodo}
            edit={editActiveTodo}
            archive={archiveActiveTodo}
          />
        ))}
      </Table>
      <button className="btn btn-success" onClick={() => addActiveTodo()}>
        Create new
      </button>
      <Totals/>
    </div>
  );
};
