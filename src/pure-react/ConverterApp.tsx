import { useSyncExternalStore } from "react";
import { temperatureStore } from "../shared/store";

const ShowCelsius = () => {
  const celsius = useSyncExternalStore(
    (lisenter) => temperatureStore.subscribe(lisenter),
    () => temperatureStore.getState().celsius,
  );

  const updateFahrenheit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    const fahrenheitValue = parseFloat(e.target.value) * (9 / 5) + 32;
    temperatureStore.setState({ celsius: value, fahrenheit: fahrenheitValue });
  };

  return (
    <p className="text-light">
      <input
        type="number"
        className="w-full px-3 py-1.5 text-blue bg-light border-none rounded-[10px]"
        value={String(celsius)}
        onChange={updateFahrenheit}
      />
      Celsius
    </p>
  );
};

const ShowFahrenheit = () => {
  const fahrenheit = useSyncExternalStore(
    (lisenter) => temperatureStore.subscribe(lisenter),
    () => temperatureStore.getState().fahrenheit,
  );

  const updateCelsius = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    const celsiusValue = (parseFloat(e.target.value) - 32) * (5 / 9);
    temperatureStore.setState({ celsius: celsiusValue, fahrenheit: value });
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
