import React from "react";

type Props = {
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  children: React.ReactNode;
};

export const Checkbox: React.FC<Props> = ({ name, onChange, children }) => {
  return (
    <>
      <label>
        {children}
        <input type="checkbox" name={name} onChange={onChange} />
      </label>
    </>
  );
};
