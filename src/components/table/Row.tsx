import React from "react";

interface RowProps {
  children: any;
}

export const Row = ({ children }: RowProps) => {
  return <tr>{children}</tr>;
};
