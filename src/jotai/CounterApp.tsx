import { useAtom, useSetAtom } from "jotai";
import { counterAtom } from "../shared/atoms";

function Display() {
  const [counter] = useAtom(counterAtom);

  return <span className="text-5xl font-bold text-[#fca311] tabular-nums">{counter}</span>;
}

function CountButton() {
  const setCounter = useSetAtom(counterAtom);

  return (
    <button
      onClick={() => setCounter((prev) => prev + 1)}
      className="px-4 py-2 rounded-lg bg-[#1e3a6e] text-[#e5e5e5] border border-white/10 hover:bg-[#254d94] hover:border-[#fca311]/40 hover:text-[#fca311] transition-all duration-200 cursor-pointer"
    >
      Count
    </button>
  );
}

export default function CounterApp() {
  return (
    <div className="flex flex-col gap-5 items-center">
      <Display />
      <CountButton />
    </div>
  );
}
