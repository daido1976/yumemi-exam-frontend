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

// ref. https://mybrandnewlogo.com/ja/color-palette-generator
const lineColors = ["#ada279", "#c3c096", "#465f86", "#558d9e", "#9bc2c2"];

export const Chart: React.FC<Props> = ({ populationList, lineKeys }) => {
  const data = convertForChart(populationList);
  return (
    <div className={classes.container}>
      {data.length === 0 || lineKeys.length === 0 ? (
        "都道府県を選択してください。"
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 30, right: 5, left: 5, bottom: 5 }}
          >
            {lineKeys.map((key, i) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                // ref. https://stackoverflow.com/questions/65636364/how-do-i-change-the-color-of-each-bar-in-recharts#comment122553062_65636948
                stroke={lineColors[i % lineColors.length]}
                dot={false}
              />
            ))}
            <CartesianGrid stroke="#ccc" />
            <XAxis
              dataKey="year"
              label={{ value: "年度", position: "insideBottomRight", dy: 15 }}
            />
            <YAxis
              label={{
                value: "総人口",
                position: "top",
                dy: -10,
              }}
            />
            <Tooltip />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};
