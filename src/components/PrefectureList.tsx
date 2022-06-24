import React from "react";
import { Prefecture } from "../types";
import { Checkbox } from "./Checkbox";
import { useCheckboxes } from "../hooks/useCheckboxes";

type Props = {
  prefectures: Prefecture[];
  loading: boolean;
};

export const PrefectureList: React.FC<Props> = ({ prefectures, loading }) => {
  const { checkedList, setChecked } = useCheckboxes();

  return (
    <>
      <h2>都道府県</h2>
      <div>
        {loading
          ? "loading..."
          : prefectures.map((prefecture, i) => {
              return (
                <div key={i}>
                  <Checkbox
                    name={prefecture.prefCode.toString()}
                    onChange={setChecked}
                  >
                    {prefecture.prefName}
                  </Checkbox>
                </div>
              );
            })}
      </div>
    </>
  );
};
