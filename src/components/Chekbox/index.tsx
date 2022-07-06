import React from "react";

type Props = {
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  children: React.ReactNode;
};

export const Checkbox: React.FC<Props> = ({
  name,
  value,
  onChange,
  children,
}) => {
  return (
    <label>
      <input type="checkbox" name={name} value={value} onChange={onChange} />
      {children}
    </label>
  );
};
