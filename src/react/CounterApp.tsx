import { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);

  return (
    <>
      <div className="text-[2em] font-bold text-orange">{value}</div>
      <button
        className="px-3 py-1.5 text-blue bg-light border-none rounded-[5px] cursor-pointer disabled:text-black disabled:bg-gray-400"
        onClick={() => setValue(value + 1)}
      >
        Count
      </button>
    </>
  );
}

export default function CounterApp() {
  return (
    <div className="flex flex-row gap-5 items-center justify-center">
      <Counter />
    </div>
  );
}
