export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type PopulationPerYear = {
  year: number;
  value: number;
};

export type PrefecturePopulation = Prefecture & {
  populations: PopulationPerYear[];
};
