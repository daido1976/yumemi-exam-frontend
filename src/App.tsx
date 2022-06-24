import { usePrefectures } from "./hooks/usePrefectures";
import { PrefectureList } from "./components/PrefectureList";

function App() {
  const { prefectures, loading } = usePrefectures();

  return (
    <div className="App">
      <h1>都道府県別の総人口推移グラフ</h1>
      <PrefectureList
        prefectures={prefectures}
        loading={loading}
      ></PrefectureList>
    </div>
  );
}

export default App;
