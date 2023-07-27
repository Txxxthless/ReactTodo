import "./App.css";
import { Cell } from "./components/table/Cell";
import { Row } from "./components/table/Row";
import { Table } from "./components/table/Table";
import { TodoItem } from "./components/todo/TodoItem";
import { Todo } from "./models/Todo";

function App() {
  const todos = [
    new Todo("Doo", new Date(Date.now()), "Idea", "Doo", "Hello!"),
    new Todo("Foo", new Date(Date.now()), "Task", "Doo", "Hello!"),
    new Todo("Bar", new Date(Date.now()), "Random Thought", "Doo", "Hello!"),
    new Todo("Doo", new Date(Date.now()), "Idea", "Doo", "Hello!"),
  ];

  return (
    <div className="App container">
      <Table
        headers={["Name", "Created", "Category", "Content", "Dates", "Actions"]}
      >
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
      </Table>
    </div>
  );
}

export default App;
