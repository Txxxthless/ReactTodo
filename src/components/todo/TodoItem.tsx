import React, { useState } from "react";
import { Todo } from "../../models/Todo";
import { Row } from "../table/Row";
import { Cell } from "../table/Cell";
import { Input } from "../forms/Input";
import { Select } from "../forms/Select";

interface TodoProps {
  todo: Todo;
  remove: (todo: Todo) => void;
  edit: (todo: Todo) => void;
  archive?: (todo: Todo) => void;
}

const selectItems = ["Idea", "Task", "Random Thought"];

export const TodoItem = ({ todo, remove, edit, archive }: TodoProps) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const [name, setName] = useState(todo.name);
  const [category, setCategory] = useState(todo.category);
  const [content, setContent] = useState(todo.content);
  const [dates, setDates] = useState(todo.dates);

  const onEdit = () => {
    if (isEditMode) {
      todo.name = name;
      todo.category = category;
      todo.content = content;
      todo.dates = dates;

      edit(todo);

      setIsEditMode((value) => !value);
    } else {
      setIsEditMode((value) => !value);
    }
  };

  return (
    <Row>
      {isEditMode ? (
        <>
          <Cell>
            <Input
              type="text"
              placeHolder="Name"
              onChange={(name: string) => setName(name)}
            />
          </Cell>
          <Cell>{todo.created.toDateString()}</Cell>
          <Cell>
            <Select
              items={selectItems}
              onChange={(category: string) => setCategory(category)}
            />
          </Cell>
          <Cell>
            <Input
              type="text"
              placeHolder="Content"
              onChange={(content: string) => setContent(content)}
            />
          </Cell>
          <Cell>
            <Input
              type="text"
              placeHolder="Dates"
              onChange={(dates: string) => setDates(dates)}
            />
          </Cell>
        </>
      ) : (
        <>
          <Cell>{todo.name}</Cell>
          <Cell>
            {todo.created.toDateString
              ? todo.created.toDateString()
              : new Date(todo.created).toDateString()}
          </Cell>
          <Cell>{todo.category} </Cell>
          <Cell>{todo.content} </Cell>
          <Cell>{todo.dates}</Cell>
        </>
      )}

      <Cell>
        {archive ? (
          <button
            className="btn btn-outline-warning"
            onClick={() => archive(todo)}
          >
            Archive
          </button>
        ) : (
          <></>
        )}
        <button className="btn btn-outline-primary" onClick={() => onEdit()}>
          Edit
        </button>
        <button className="btn btn-outline-danger" onClick={() => remove(todo)}>
          Remove
        </button>
      </Cell>
    </Row>
  );
};
