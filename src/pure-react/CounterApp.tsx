import { useSyncExternalStore } from "react";
import { counterStore } from "../shared/store";

const Display = () => {
  const counter = useSyncExternalStore(
    (listener) => counterStore.subscribe(listener),
    () => counterStore.getState(),
  );
  return <div className="text-[2em] font-bold text-orange">{counter}</div>;
};

const Button = () => {
  const handleIncrement = () => {
    counterStore.setState(counterStore.getState() + 1);
  };

  return (
    <button
      className="px-3 py-1.5 text-blue bg-light border-none rounded-[5px] cursor-pointer disabled:text-black disabled:bg-gray-400"
      onClick={handleIncrement}
    >
      Count
    </button>
  );
};

export default function CounterApp() {
  return (
    <div className="flex flex-row gap-5 items-center justify-center">
      <Display />
      <Button />
    </div>
  );
}
