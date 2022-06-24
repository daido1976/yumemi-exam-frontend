import React, { useState } from "react";
import { Prefecture } from "../types";
import { Checkbox } from "./Checkbox";

// TODO: hooks 以下もしくは Checkbox ディレクトリ以下に移す
export const useCheckbox = () => {
  const [checkedState, setCheckedState] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedState(e.target.checked);
    console.log(e.target.checked);
  };

  return { checkedState, onChange };
};

type Props = {
  prefectures: Prefecture[];
  loading: boolean;
};

export const PrefectureList: React.FC<Props> = ({ prefectures, loading }) => {
  const { checkedState, onChange } = useCheckbox();

  // TODO: Checkbox をリストで扱う
  return (
    <>
      <h2>都道府県</h2>
      <div>
        {loading
          ? "loading..."
          : prefectures.map((prefecture, i) => {
              return <div key={i}>{prefecture.prefName}</div>;
            })}
      </div>
      <Checkbox
        name={"prefCodeを入れる"}
        checked={checkedState}
        onChange={onChange}
      >
        京都府
      </Checkbox>
    </>
  );
};
