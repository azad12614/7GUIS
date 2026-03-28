import { useAtom } from "jotai";
import { celsiusAtom, fahrenheitAtom } from "../shared/atoms";

function Celsius() {
  const [celsius, setCelsius] = useAtom(celsiusAtom);

  return (
    <label className="flex items-center gap-3">
      <input
        type="number"
        className="w-24 px-3 py-2 rounded-lg bg-[#1e3a6e] text-[#e5e5e5] border border-white/10 focus:border-[#fca311]/40 focus:outline-none tabular-nums"
        value={parseFloat(celsius.toFixed(2))}
        onChange={(e) => setCelsius(parseFloat(e.target.value))}
      />
      <span className="text-[#e5e5e5]/70 text-sm">Celsius</span>
    </label>
  );
}

function Fahrenheit() {
  const [fahrenheit, setFahrenheit] = useAtom(fahrenheitAtom);

  return (
    <label className="flex items-center gap-3">
      <input
        type="number"
        className="w-24 px-3 py-2 rounded-lg bg-[#1e3a6e] text-[#e5e5e5] border border-white/10 focus:border-[#fca311]/40 focus:outline-none tabular-nums"
        value={parseFloat(fahrenheit.toFixed(2))}
        onChange={(e) => setFahrenheit(parseFloat(e.target.value))}
      />
      <span className="text-[#e5e5e5]/70 text-sm">Fahrenheit</span>
    </label>
  );
}

export default function ConverterApp() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Celsius />
      <span className="text-[#fca311]/50 text-lg">⇕</span>
      <Fahrenheit />
    </div>
  );
}
