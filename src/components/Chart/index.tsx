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

type Props = {
  populationList: PrefecturePopulation[];
};

export const Chart: React.FC<Props> = ({ populationList }) => {
  const data = [
    { year: 1960, ["東京"]: 5039206 },
    { year: 1965, ["東京"]: 5171800 },
    { year: 1970, ["東京"]: 5184287 },
  ];

  return (
    <LineChart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="東京" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
  );
};
