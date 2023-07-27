import React from "react";
import { Todo } from "../../models/Todo";
import { Row } from "../table/Row";
import { Cell } from "../table/Cell";

interface TodoProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoProps) => {
  return (
    <Row>
      <Cell>{todo.name}</Cell>
      <Cell>{todo.created.toDateString()}</Cell>
      <Cell>{todo.category} </Cell>
      <Cell>{todo.content} </Cell>
      <Cell>{todo.dates}</Cell>
      <Cell>
        <button className="btn btn-outline-warning">Archive</button>
        <button className="btn btn-outline-primary">Edit</button>
        <button className="btn btn-outline-danger">Remove</button>
      </Cell>
    </Row>
  );
};
