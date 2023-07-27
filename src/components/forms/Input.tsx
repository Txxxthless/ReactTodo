import React from "react";

interface InputProps {
  type: string;
  onChange: (value: string) => void;
  placeHolder: string;
}

export const Input = ({ type, onChange, placeHolder }: InputProps) => {
  return (
    <input
      type={type}
      className="form-control"
      placeholder={placeHolder}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};
