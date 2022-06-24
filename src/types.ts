export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type PopulationPerYear = {
  year: number;
  value: number;
};

export type PrefecturePopulation = {
  prefCode: number;
  populations: PopulationPerYear[];
};
