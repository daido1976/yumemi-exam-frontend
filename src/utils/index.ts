import { PrefecturePopulation } from "../types";

type PopulationForChart = {
  year: number;
  [key: string]: number;
};

export const convertForChart = (
  pl: PrefecturePopulation[]
): PopulationForChart[] => {
  // 一度以下のような構造に変える
  // [
  //   { year: 1960, key1: 5039206 },
  //   { year: 1965, key1: 5171800 },
  //   { year: 1970, key1: 5184287 },
  //   { year: 1960, key2: 1426606 },
  //   { year: 1965, key2: 1416591 },
  //   { year: 1970, key2: 1427520 },
  // ];
  const fm = pl.flatMap((p) =>
    p.populations.map(({ year, value }) => ({
      year,
      [p.prefCode.toString()]: value,
    }))
  );

  return fm.reduce((acc: PopulationForChart[], p) => {
    const i = acc.findIndex((x) => x.year === p.year);
    if (i >= 0) {
      acc.splice(i, 1, { ...acc[i], ...p });
      return acc;
    }

    return [...acc, p];
  }, []);
};
