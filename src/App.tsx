import "./App.css";
import { Table } from "./components/table/Table";
import { TodoItem } from "./components/todo/TodoItem";

import { useAppSelector, useAppDispatch } from "./store/hooks";
import { addTodo, removeTodo, editTodo } from "./store/activeTodoSlice";
import { Todo } from "./models/Todo";

function App() {
  const activeTodos = useAppSelector((state) => state.activeTodos.activeTodos);
  const dispatch = useAppDispatch();

  const addActiveTodo = () => {
    dispatch(addTodo("string"));
  };
  const deleteActiveTodo = (todo: Todo) => {
    dispatch(removeTodo(todo));
    console.log(activeTodos);
  };
  const editActiveTodo = (todo: Todo) => {
    dispatch(editTodo(todo));
    console.log(activeTodos);
  };

  return (
    <div className="App container">
      <Table
        headers={["Name", "Created", "Category", "Content", "Dates", "Actions"]}
      >
        {activeTodos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            remove={deleteActiveTodo}
            edit={editActiveTodo}
          />
        ))}
      </Table>
      <button className="btn btn-success" onClick={() => addActiveTodo()}>
        Create new
      </button>
    </div>
  );
}

export default App;
