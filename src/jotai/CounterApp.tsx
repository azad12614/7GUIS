import { useAtom, useSetAtom } from "jotai";
import { counterAtom } from "../shared/atoms";

function Display() {
  const [counter] = useAtom(counterAtom);

  return <div className="text-[2em] font-bold text-orange">{counter}</div>;
}

function Button() {
  const setCounter = useSetAtom(counterAtom);

  return (
    <button
      className="px-3 py-1.5 text-blue bg-light border-none rounded-[5px] cursor-pointer disabled:text-black disabled:bg-gray-400"
      onClick={() => setCounter((prev) => prev + 1)}
    >
      Count
    </button>
  );
}

export default function CounterApp() {
  return (
    <div className="flex flex-row gap-5 items-center justify-center">
      <Display />
      <Button />
    </div>
  );
}
