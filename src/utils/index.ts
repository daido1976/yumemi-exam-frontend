import { PrefecturePopulation } from "../types";

type PopulationForChart = {
  year: number;
  // TODO: Map で代替できるかもしれない
  [key: string]: number;
};

export const convertForChart = (
  pl: PrefecturePopulation[]
): PopulationForChart[] => {
  const fm = pl.flatMap((p) =>
    p.populations.map(({ year, value }) => ({
      year,
      [p.prefCode.toString()]: value,
    }))
  );
  return fm.reduce((acc: any, p) => {
    const i = acc.findIndex((a: any) => a.year === p.year) as number;
    if (i >= 0) {
      acc.push({ ...acc[i], ...p });
      acc.splice(i, 1);
      return acc;
    }
    acc.push(p);
    return acc;
  }, []);
};
