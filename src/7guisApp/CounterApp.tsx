import { useState } from "react";
import "../global.css";
import "../7guisCSS/counter.css";

function Counter() {
  const [value, setValue] = useState(0);

  const counter = () => {
    setValue(value + 1);
  };
  return (
    <>
      <div id="count">{value}</div>
      <button onClick={counter}>Count</button>
    </>
  );
}

export default function CounterApp() {
  return (
    <div className="canvas">
      <div id="box">
        <Counter />
      </div>
      <a id="link" href="/">
        {" "}
        &lArr; Back
      </a>
    </div>
  );
}
