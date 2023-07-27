import React from "react";

interface CellProps {
  children: any;
}

export const Cell = ({ children }: CellProps) => {
  return <td>{children}</td>;
};
