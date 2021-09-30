import logo from "./logo.svg";
import "./App.css";
import "./Child";
import Child from "./Child";
import { useCallback, useEffect, useMemo, useState } from "react";

function App() {
  useEffect(() => {
    console.log("Parent got rendered");
    console.log("hard to compute value is " + hardToComputeValue);
  });
  const [counter, setCounter] = useState(0);

  const log = useCallback(() => {
    console.log("Something was clicked");
  }, []);

  const hardToComputeValue = useMemo(() => {
    console.log("I am computing hard to compute value");
    return 1000;
  }, []);

  return (
    <>
      <button
        onClick={() => {
          log();
          setCounter(counter + 1);
        }}
      >
        {counter}
      </button>
      <Child log={log}></Child>
    </>
  );
}

export default App;
