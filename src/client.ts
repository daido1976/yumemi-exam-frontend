import { PopulationPerYear, Prefecture } from "./types";

const ENDPOINT = "https://opendata.resas-portal.go.jp";

type PrefecturesApiResponse = {
  result: Prefecture[];
};

type PopulationApiResponse = {
  result: {
    data: [{ data: PopulationPerYear[] }];
  };
};

export const getPrefectures = (): Promise<Prefecture[]> =>
  fetch(`${ENDPOINT}/api/v1/prefectures`, {
    method: "GET",
    headers: {
      "X-API-KEY": import.meta.env.VITE_RESAS_API_KEY,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res: PrefecturesApiResponse) => res.result);
