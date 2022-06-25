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
  names: string[];
};

export const Chart: React.FC<Props> = ({ populationList, names }) => {
  const data = convertForChart(populationList);
  return (
    <div className={classes.container}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          {names.map((name) => (
            <Line key={name} type="monotone" dataKey={name} stroke="#8884d8" />
          ))}
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
