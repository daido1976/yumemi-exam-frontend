import { useState, useEffect } from "react";
import { getPopulationsBy } from "../client";
import { PrefecturePopulation } from "../types";

export const usePopulations = (prefCode: number) => {
  const [populations, setPopulations] = useState<PrefecturePopulation | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  // TODO: エラーの型ちゃんとする
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    getPopulationsBy(prefCode)
      .then((res) => {
        setPopulations({ prefCode, populations: res });
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [prefCode]);

  return { populations, loading, error };
};
