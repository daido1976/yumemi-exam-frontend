import { useEffect } from "react";
import classes from "./App.module.css";
import { getPopulationsBy, getPrefectures } from "./client";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await getPopulationsBy(1);
      console.log("res", res);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1 className={classes.blue}>Hello world!</h1>
    </div>
  );
}

export default App;
