import { useState } from "react";

function Converter() {
  const [temperature, setTemperature] = useState({
    celsius: "0",
    fahrenheit: "32",
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
    <div className="flex flex-col gap-4 items-center">
      <label className="flex items-center gap-3">
        <input
          type="number"
          className="w-24 px-3 py-2 rounded-lg bg-[#1e3a6e] text-[#e5e5e5] border border-white/10 focus:border-[#fca311]/40 focus:outline-none tabular-nums"
          value={temperature.celsius}
          onChange={updateFahrenheit}
        />
        <span className="text-[#e5e5e5]/70 text-sm">Celsius</span>
      </label>
      <span className="text-[#fca311]/50 text-lg">⇕</span>
      <label className="flex items-center gap-3">
        <input
          type="number"
          className="w-24 px-3 py-2 rounded-lg bg-[#1e3a6e] text-[#e5e5e5] border border-white/10 focus:border-[#fca311]/40 focus:outline-none tabular-nums"
          value={temperature.fahrenheit}
          onChange={updateCelsius}
        />
        <span className="text-[#e5e5e5]/70 text-sm">Fahrenheit</span>
      </label>
    </div>
  );
}

export default function ConverterApp() {
  return <Converter />;
}
