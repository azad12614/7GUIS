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
      <p className="text-light">
        <input
          type="number"
          className="w-full px-3 py-1.5 text-blue bg-light border-none rounded-[10px]"
          value={temperature.celsius}
          onChange={updateFahrenheit}
        />
        Celsius
      </p>
      <p className="text-light">&dArr;</p>
      <p className="text-light">
        <input
          type="number"
          className="w-full px-3 py-1.5 text-blue bg-light border-none rounded-[10px]"
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
    <div className="flex flex-col gap-2.5 items-center">
      <Converter />
    </div>
  );
}
