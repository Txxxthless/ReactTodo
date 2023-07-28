import React from "react";

interface SelectProps {
  items: string[];
  onChange: (value: string) => void;
}

export const Select = ({ items, onChange }: SelectProps) => {
  return (
    <select
      className="form-select"
      onChange={(event) => {
        onChange(event.target.value);
      }}
    >
      {items.map((item, index) => (
        <option value={item} key={index}>
          {item}
        </option>
      ))}
    </select>
  );
};
