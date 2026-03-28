import { useSyncExternalStore } from "react";
import { counterStore } from "../shared/store";

const Display = () => {
  const counter = useSyncExternalStore(
    (listener) => counterStore.subscribe(listener),
    () => counterStore.getState(),
  );
  return <span className="text-5xl font-bold text-[#fca311] tabular-nums">{counter}</span>;
};

const CountButton = () => {
  const handleIncrement = () => {
    counterStore.setState(counterStore.getState() + 1);
  };

  return (
    <button
      onClick={handleIncrement}
      className="px-4 py-2 rounded-lg bg-[#1e3a6e] text-[#e5e5e5] border border-white/10 hover:bg-[#254d94] hover:border-[#fca311]/40 hover:text-[#fca311] transition-all duration-200 cursor-pointer"
    >
      Count
    </button>
  );
};

export default function CounterApp() {
  return (
    <div className="flex flex-col gap-5 items-center">
      <Display />
      <CountButton />
    </div>
  );
}
