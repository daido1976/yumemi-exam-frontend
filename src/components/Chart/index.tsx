import React from "react";
import classes from "./index.module.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PrefecturePopulation } from "../../types";
import { convertForChart } from "../../utils";

type Props = {
  populationList: PrefecturePopulation[];
  lineKeys: string[];
};

export const Chart: React.FC<Props> = ({ populationList, lineKeys }) => {
  const data = convertForChart(populationList);
  return (
    <div className={classes.container}>
      {data.length === 0 || lineKeys.length === 0 ? (
        "都道府県を選択してください。"
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            {lineKeys.map((key) => (
              <Line key={key} type="monotone" dataKey={key} stroke="#8884d8" />
            ))}
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};
