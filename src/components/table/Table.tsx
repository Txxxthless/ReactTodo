import React from "react";

interface TableProps {
  headers: string[];
  children: any;
}

export const Table = ({ headers, children }: TableProps) => {
  return (
    <table className="table table-striped">
      <tbody>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
        {children}
      </tbody>
    </table>
  );
};
