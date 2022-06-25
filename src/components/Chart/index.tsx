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
} from "recharts";
import { PrefecturePopulation, PopulationPerYear } from "../../types";
import { convertForChart } from "../../utils";

type Props = {
  populationList: PrefecturePopulation[];
  names: string[];
};

export const Chart: React.FC<Props> = ({ populationList, names }) => {
  const data = convertForChart(populationList);
  return (
    <LineChart width={600} height={300} data={data}>
      {names.map((name) => (
        <Line key={name} type="monotone" dataKey={name} stroke="#8884d8" />
      ))}
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
  );
};
