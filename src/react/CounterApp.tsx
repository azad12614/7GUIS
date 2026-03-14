import React from "react";
import { useCallback, useState } from "react";

const Display = ({ counter }: { counter: number }) => {
  return <div className="text-[2em] font-bold text-orange">{counter}</div>;
};

const Button = React.memo(function Button({
  onIncrement,
}: {
  onIncrement: () => void;
}) {
  return (
    <button
      className="px-3 py-1.5 text-blue bg-light border-none rounded-[5px] cursor-pointer disabled:text-black disabled:bg-gray-400"
      onClick={onIncrement}
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
    <div className="flex flex-row gap-5 items-center justify-center">
      <Display counter={counter} />
      <Button onIncrement={handleCounter} />
    </div>
  );
}
