import React, { useState } from "react";

export const useCheckboxes = () => {
  const [checkedList, setCheckedList] = useState<string[]>([]);

  const setChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    if (checked) {
      setCheckedList((prev) => [...prev, name]);
    } else {
      setCheckedList((prev) => prev.filter((x) => x !== name));
    }
  };

  return { checkedList, setChecked };
};
