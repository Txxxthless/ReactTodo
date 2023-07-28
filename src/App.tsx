import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ActiveTodosPage } from "./pages/active-todos/ActiveTodosPage";
import { Layout } from "./layouts/Layout";
import { ArchivedTodosPage } from "./pages/archived-todos/ArchivedTodosPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<ActiveTodosPage />} />
        <Route path="archived" element={<ArchivedTodosPage />} />
      </Route>
    </Routes>
  );
}

export default App;
