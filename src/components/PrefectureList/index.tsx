import React from "react";
import classes from "./index.module.css";
import { Prefecture } from "../../types";
import { Checkbox } from "../Chekbox.tsx";

type Props = {
  prefectures: Prefecture[];
  loading: boolean;
  onCheckedChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const PrefectureList: React.FC<Props> = ({
  prefectures,
  loading,
  onCheckedChange,
}) => {
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
                    name="prefecture"
                    // TODO: prefCode じゃなくて prefName 渡した方がいいかも
                    value={prefecture.prefCode.toString()}
                    onChange={onCheckedChange}
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
