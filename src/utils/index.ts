import { PrefecturePopulation } from "../types";

type PopulationForChart = {
  year: number;
  // TODO: Map で代替できるかもしれない
  [key: string]: number;
};

export const convertForChart = (
  pl: PrefecturePopulation[]
): PopulationForChart[] => {
  return pl.flatMap((p) =>
    p.populations.map(({ year, value }) => ({
      year,
      [p.prefCode.toString()]: value,
    }))
  );
};
