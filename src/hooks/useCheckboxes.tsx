import React, { useState } from "react";

export const useCheckboxes = () => {
  const [checkedNames, setCheckedNames] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    if (checked) {
      setCheckedNames((prev) => [...prev, name]);
    } else {
      setCheckedNames((prev) => prev.filter((x) => x !== name));
    }
  };

  return { checkedNames, handleChange };
};
