import { useState, useEffect } from "react";
import { getPrefectures } from "../client";
import { Prefecture } from "../types";

export const usePrefectures = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getPrefectures()
      .then((res) => {
        setPrefectures(res);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { prefectures, loading, error };
};
