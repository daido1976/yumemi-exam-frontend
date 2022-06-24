import { usePrefectures, useCheckboxes } from "./hooks";
import { PrefectureList } from "./components/PrefectureList";

function App() {
  const { prefectures, loading } = usePrefectures();
  const { checkedNames, handleChange } = useCheckboxes();

  return (
    <div className="App">
      <h1>都道府県別の総人口推移グラフ</h1>
      <PrefectureList
        prefectures={prefectures}
        loading={loading}
        onCheckedChange={handleChange}
      ></PrefectureList>
    </div>
  );
}

export default App;
