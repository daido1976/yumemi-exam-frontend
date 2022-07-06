import { usePrefectures, usePopulationList, useCheckboxes } from "./hooks";
import { PrefectureList } from "./components/PrefectureList";
import { Chart } from "./components/Chart";
import { Header } from "./components/Header";

const App = () => {
  const { prefectures, loading } = usePrefectures();
  const { checkedValues, handleCheckedChange } = useCheckboxes();
  const selectedPrefectures = checkedValues.map((code) => ({
    prefCode: parseInt(code),
    // TODO: リファクタリングする
    prefName:
      prefectures.find((p) => p.prefCode === parseInt(code))?.prefName || "",
  }));
  const { populationList } = usePopulationList(selectedPrefectures);

  return (
    <div className="App">
      <Header />
      <PrefectureList
        prefectures={prefectures}
        loading={loading}
        onCheckedChange={handleCheckedChange}
      ></PrefectureList>
      <Chart
        populationList={populationList}
        lineKeys={selectedPrefectures.map((p) => p.prefName)}
      ></Chart>
    </div>
  );
};

export default App;
