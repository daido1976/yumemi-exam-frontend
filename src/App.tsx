import { usePrefectures, usePopulationList, useCheckboxes } from "./hooks";
import { PrefectureList } from "./components/PrefectureList";
import { useMemo } from "react";

function App() {
  const { prefectures, loading } = usePrefectures();
  const { checkedNames, handleChange } = useCheckboxes();
  // NOTE: メモ化しないと usePopulationList が無限ループになってしまう
  const prefCodes = useMemo(() => {
    return checkedNames.map((code) => parseInt(code));
  }, [checkedNames]);

  const { populationList } = usePopulationList(prefCodes);

  return (
    <div className="App">
      <h1>都道府県別の総人口推移グラフ</h1>
      <PrefectureList
        prefectures={prefectures}
        loading={loading}
        onCheckedChange={handleChange}
      ></PrefectureList>
      <div>{JSON.stringify(populationList)}</div>
    </div>
  );
}

export default App;
