import { useAtom } from "jotai";
import { celsiusAtom, fahrenheitAtom } from "../shared/atoms";

function Celsius() {
  const [celsius, setCelsius] = useAtom(celsiusAtom);

  return (
    <p className="text-light">
      <input
        type="number"
        className="w-full px-3 py-1.5 text-blue bg-light border-none rounded-[10px]"
        value={parseFloat(celsius.toFixed(2))}
        onChange={(e) => {
          setCelsius(parseFloat(e.target.value));
        }}
      />
      Celsius
    </p>
  );
}

function Fahrenheit() {
  const [fahrenheit, setFahrenheit] = useAtom(fahrenheitAtom);

  return (
    <p className="text-light">
      <input
        type="number"
        className="w-full px-3 py-1.5 text-blue bg-light border-none rounded-[10px]"
        value={parseFloat(fahrenheit.toFixed(2))}
        onChange={(e) => {
          setFahrenheit(parseFloat(e.target.value));
        }}
      />
      Fahrenheit
    </p>
  );
}

export default function ConverterApp() {
  return (
    <div className="flex flex-col gap-2.5 items-center">
      <Celsius />
      <p className="text-light">&dArr;</p>
      <Fahrenheit />
    </div>
  );
}
