import { useState, useEffect } from "react";
import { getPopulationsBy } from "../client";
import { PrefecturePopulation, Prefecture } from "../types";

export const usePopulationList = (prefectures: Prefecture[]) => {
  const [populationList, setPopulationList] = useState<PrefecturePopulation[]>(
    []
  );
  const [loading, setLoading] = useState(false);
  // TODO: エラーの型ちゃんとする
  const [error, setError] = useState<Error | null>(null);

  const cachedPrefCodes = populationList.map(
    (population) => population.prefCode
  );
  // NOTE: O(N^2)なので注意
  const diffPrefs = prefectures.filter(
    (x) => !cachedPrefCodes.includes(x.prefCode)
  );

  useEffect(() => {
    setLoading(true);
    diffPrefs.forEach((pref) => {
      getPopulationsBy(pref.prefCode)
        .then((res) => {
          setPopulationList((prev) => [
            ...prev,
            {
              prefCode: pref.prefCode,
              prefName: pref.prefName,
              populations: res,
            },
          ]);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    });
    setLoading(false);
  }, [diffPrefs]);

  return { populationList, loading, error };
};
