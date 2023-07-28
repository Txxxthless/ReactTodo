import React from "react";
import { Table } from "../../components/table/Table";
import { Row } from "../../components/table/Row";
import { Cell } from "../../components/table/Cell";
import { useAppSelector } from "../../store/hooks";

export const Totals = () => {
  const activeTodos = useAppSelector((state) => state.activeTodos.activeTodos);
  const archivedTodos = useAppSelector(
    (state) => state.archivedTodos.arhivedTodos
  );

  return (
    <div style={{ marginTop: "100px" }}>
      <Table headers={["Categoty", "Active", "Archived"]}>
        <Row>
          <Cell>Task</Cell>
          <Cell>
            {activeTodos.filter((todo) => todo.category === "Task").length}
          </Cell>
          <Cell>
            {archivedTodos.filter((todo) => todo.category === "Task").length}
          </Cell>
        </Row>
        <Row>
          <Cell>Random Thought</Cell>
          <Cell>
            {
              activeTodos.filter((todo) => todo.category === "Random Thought")
                .length
            }
          </Cell>
          <Cell>
            {
              archivedTodos.filter((todo) => todo.category === "Random Thought")
                .length
            }
          </Cell>
        </Row>
        <Row>
          <Cell>Idea</Cell>
          <Cell>
            {activeTodos.filter((todo) => todo.category === "Idea").length}
          </Cell>
          <Cell>
            {archivedTodos.filter((todo) => todo.category === "Idea").length}
          </Cell>
        </Row>
      </Table>
    </div>
  );
};
