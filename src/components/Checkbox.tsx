import React from "react";

type Props = {
  name: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  children: React.ReactNode;
};

export const Checkbox: React.FC<Props> = ({
  name,
  checked,
  onChange,
  children,
}) => {
  return (
    <>
      <label>
        {children}
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
        />
      </label>
    </>
  );
};
