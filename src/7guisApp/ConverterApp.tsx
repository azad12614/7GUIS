import "../global.css";
import "../7guisCSS/converter.css";
import { useState } from "react";

function Converter() {
  const [temperature, setTemperature] = useState({
    celsius: "",
    fahrenheit: "",
  });

  const updateFahrenheit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTemperature((prev) => ({ ...prev, celsius: value }));
    if (value !== "") {
      const fahrenheitValue = parseFloat(value) * (9 / 5) + 32;
      setTemperature((prev) => ({
        ...prev,
        fahrenheit: fahrenheitValue.toFixed(2),
      }));
    } else {
      setTemperature((prev) => ({ ...prev, fahrenheit: "" }));
    }
  };

  const updateCelsius = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTemperature((prev) => ({ ...prev, fahrenheit: value }));
    if (value !== "") {
      const celsiusValue = (parseFloat(value) - 32) * (5 / 9);
      setTemperature((prev) => ({ ...prev, celsius: celsiusValue.toFixed(2) }));
    } else {
      setTemperature((prev) => ({ ...prev, celsius: "" }));
    }
  };

  return (
    <>
      <p>
        <input
          type="number"
          id="celsius"
          value={temperature.celsius}
          onChange={updateFahrenheit}
        />
        Celsius
      </p>
      <p>&dArr;</p>
      <p>
        <input
          type="number"
          id="fahrenheit"
          value={temperature.fahrenheit}
          onChange={updateCelsius}
        />
        Fahrenheit
      </p>
    </>
  );
}

export default function ConverterApp() {
  return (
    <div className="canvas">
      <div id="box">
        <Converter />
      </div>
      <a id="link" href="/">
        {" "}
        &lArr; Back
      </a>
    </div>
  );
}
