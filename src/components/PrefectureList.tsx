import React from "react";
import { Prefecture } from "../types";

type Props = {
  prefectures: Prefecture[];
  loading: boolean;
};

export const PrefectureList: React.FC<Props> = ({ prefectures, loading }) => {
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
    </>
  );
};
