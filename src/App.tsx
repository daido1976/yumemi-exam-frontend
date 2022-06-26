import { usePrefectures, usePopulationList, useCheckboxes } from "./hooks";
import { PrefectureList } from "./components/PrefectureList";
import { Chart } from "./components/Chart";
import { useMemo } from "react";

function App() {
  const { prefectures, loading } = usePrefectures();
  const { checkedNames, handleChange } = useCheckboxes();
  // NOTE: メモ化しないと usePopulationList が無限ループになってしまう
  const selectedPrefectures = useMemo(() => {
    return checkedNames.map((code) => ({
      prefCode: parseInt(code),
      // TODO: リファクタリングする
      prefName:
        prefectures.find((p) => p.prefCode === parseInt(code))?.prefName || "",
    }));
  }, [checkedNames, prefectures]);

  const { populationList } = usePopulationList(selectedPrefectures);

  return (
    <div className="App">
      <h1>都道府県別の総人口推移グラフ</h1>
      <PrefectureList
        prefectures={prefectures}
        loading={loading}
        onCheckedChange={handleChange}
      ></PrefectureList>
      <Chart
        populationList={populationList}
        names={selectedPrefectures.map((p) => p.prefName)}
      ></Chart>
    </div>
  );
}

export default App;
