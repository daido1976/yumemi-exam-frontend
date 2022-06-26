import React, { useState } from "react";

export const useCheckboxes = () => {
  const [checkedValues, setCheckedValues] = useState<string[]>([]);

  const handleCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    if (checked) {
      setCheckedValues((prev) => [...prev, value]);
    } else {
      setCheckedValues((prev) => prev.filter((x) => x !== value));
    }
  };

  return { checkedValues, handleCheckedChange };
};
