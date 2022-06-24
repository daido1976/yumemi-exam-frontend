import { useState, useEffect } from "react";
import { getPopulationsBy } from "../client";
import { PrefecturePopulation } from "../types";

export const usePopulationList = (prefCodes: number[]) => {
  const [populationList, setPopulationList] = useState<PrefecturePopulation[]>(
    []
  );
  const [loading, setLoading] = useState(false);
  // TODO: エラーの型ちゃんとする
  const [error, setError] = useState<Error | null>(null);

  const cachedCodes = populationList.map((population) => population.prefCode);
  // NOTE: O(N^2)なので注意
  const diffCodes = prefCodes.filter((x) => !cachedCodes.includes(x));

  useEffect(() => {
    setLoading(true);
    diffCodes.forEach((code) => {
      getPopulationsBy(code)
        .then((res) => {
          setPopulationList((prev) => [
            ...prev,
            { prefCode: code, populations: res },
          ]);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    });
    setLoading(false);
  }, [diffCodes, prefCodes]);

  return { populationList, loading, error };
};
