import React from "react";
import classes from "./index.module.css";
import { Prefecture } from "../../types";
import { Checkbox } from "../Chekbox.tsx";
import { useCheckboxes } from "../../hooks/useCheckboxes";

type Props = {
  prefectures: Prefecture[];
  loading: boolean;
};

export const PrefectureList: React.FC<Props> = ({ prefectures, loading }) => {
  const { checkedList, setChecked } = useCheckboxes();

  return (
    <>
      <h3>都道府県</h3>
      <div className={classes.container}>
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
