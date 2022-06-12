import classes from "./App.module.css";
import { usePrefectures } from "./hooks/usePrefectures";

function App() {
  const { prefectures, loading, error } = usePrefectures();
  console.log({ prefectures, loading, error });

  return (
    <div className="App">
      <h1 className={classes.blue}>Hello world!</h1>
    </div>
  );
}

export default App;
