import React from "react";
import { useCallback, useState } from "react";

const Display = ({ counter }: { counter: number }) => {
  return <span className="text-5xl font-bold text-[#fca311] tabular-nums">{counter}</span>;
};

const CountButton = React.memo(function CountButton({
  onIncrement,
}: {
  onIncrement: () => void;
}) {
  return (
    <button
      onClick={onIncrement}
      className="px-4 py-2 rounded-lg bg-[#1e3a6e] text-[#e5e5e5] border border-white/10 hover:bg-[#254d94] hover:border-[#fca311]/40 hover:text-[#fca311] transition-all duration-200 cursor-pointer"
    >
      Count
    </button>
  );
});

export default function CounterApp() {
  const [counter, setCounter] = useState(0);

  const handleCounter = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  return (
    <div className="flex flex-col gap-5 items-center">
      <Display counter={counter} />
      <CountButton onIncrement={handleCounter} />
    </div>
  );
}
