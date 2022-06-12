import { PopulationPerYear, Prefecture } from "./types";

const ENDPOINT = "https://opendata.resas-portal.go.jp";
const API_KEY = import.meta.env.VITE_RESAS_API_KEY;

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
      "X-API-KEY": API_KEY,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    // TODO: エラーハンドリングする
    // https://opendata.resas-portal.go.jp/docs/api/v1/detail/index.html
    .then((res: PrefecturesApiResponse) => res.result);

export const getPopulationsBy = (
  prefCode: number
): Promise<PopulationPerYear[]> =>
  fetch(
    `${ENDPOINT}/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": API_KEY,
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    // TODO: エラーハンドリングする
    // https://opendata.resas-portal.go.jp/docs/api/v1/detail/index.html
    .then((res: PopulationApiResponse) => res.result.data[0].data);
