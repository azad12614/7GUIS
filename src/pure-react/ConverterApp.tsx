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
    <p className="text-light">
      <input
        type="number"
        className="w-full px-3 py-1.5 text-blue bg-light border-none rounded-[10px]"
        value={celsius}
        onChange={updateFahrenheit}
      />
      Celsius
    </p>
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
    <>
      <p className="text-light">
        <input
          type="number"
          className="w-full px-3 py-1.5 text-blue bg-light border-none rounded-[10px]"
          value={fahrenheit}
          onChange={updateCelsius}
        />
        Fahrenheit
      </p>
    </>
  );
};

export default function ConverterApp() {
  return (
    <div className="flex flex-col gap-2.5 items-center">
      <ShowCelsius />
      <p className="text-light">&dArr;</p>
      <ShowFahrenheit />
    </div>
  );
}
