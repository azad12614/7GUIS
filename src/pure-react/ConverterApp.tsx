import { useSyncExternalStore } from "react";
import { temperatureStore } from "../shared/store";

const ShowCelsius = () => {
  const celsius = useSyncExternalStore(
    (listener) => temperatureStore.subscribe(listener),
    () => temperatureStore.getState().celsius,
  );

  const updateFahrenheit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value !== "") {
      const fahrenheitValue = parseFloat(value) * (9 / 5) + 32;
      temperatureStore.setState({
        celsius: value,
        fahrenheit: fahrenheitValue.toFixed(2),
      });
    } else {
      temperatureStore.setState({ celsius: value, fahrenheit: "" });
    }
  };

  return (
    <label className="flex items-center gap-3">
      <input
        type="number"
        className="w-24 px-3 py-2 rounded-lg bg-[#1e3a6e] text-[#e5e5e5] border border-white/10 focus:border-[#fca311]/40 focus:outline-none tabular-nums"
        value={celsius}
        onChange={updateFahrenheit}
      />
      <span className="text-[#e5e5e5]/70 text-sm">Celsius</span>
    </label>
  );
};

const ShowFahrenheit = () => {
  const fahrenheit = useSyncExternalStore(
    (listener) => temperatureStore.subscribe(listener),
    () => temperatureStore.getState().fahrenheit,
  );

  const updateCelsius = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value !== "") {
      const celsiusValue = (parseFloat(value) - 32) * (5 / 9);
      temperatureStore.setState({
        celsius: celsiusValue.toFixed(2),
        fahrenheit: value,
      });
    } else {
      temperatureStore.setState({ celsius: "", fahrenheit: value });
    }
  };

  return (
    <label className="flex items-center gap-3">
      <input
        type="number"
        className="w-24 px-3 py-2 rounded-lg bg-[#1e3a6e] text-[#e5e5e5] border border-white/10 focus:border-[#fca311]/40 focus:outline-none tabular-nums"
        value={fahrenheit}
        onChange={updateCelsius}
      />
      <span className="text-[#e5e5e5]/70 text-sm">Fahrenheit</span>
    </label>
  );
};

export default function ConverterApp() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <ShowCelsius />
      <span className="text-[#fca311]/50 text-lg">⇕</span>
      <ShowFahrenheit />
    </div>
  );
}
