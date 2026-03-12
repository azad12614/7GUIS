import { useEffect, useState } from "react";

function ShowTimer() {
  const [elapsed, setElapsed] = useState(0.0);
  const [duration, setDuration] = useState(15.0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed((prevElapsed) => {
        if (prevElapsed < duration) {
          return parseFloat((prevElapsed + 0.1).toFixed(1));
        } else {
          clearInterval(interval);
          return prevElapsed;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, [duration, elapsed]);

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(parseFloat(e.target.value));
    if (elapsed > duration) {
      setElapsed(parseFloat(e.target.value));
    }
  };

  const handleReset = () => {
    setElapsed(0.0);
    setDuration(15.0);
  };

  return (
    <>
      <label className="text-light" htmlFor="elapsed">
        # Elapsed Time #
      </label>
      <input
        type="range"
        id="elapsed"
        name="elapsed"
        min="0.0"
        max={duration}
        value={elapsed}
        step="0.1"
        readOnly
      />
      <p className="text-light">{elapsed.toFixed(1)}s</p>
      <label className="text-light" htmlFor="duration">
        # Duration #
      </label>
      <input
        type="range"
        id="duration"
        name="duration"
        min="0.0"
        max="30.0"
        value={duration}
        onChange={handleDurationChange}
        step="0.1"
      />
      <button
        className="px-3 py-1.5 text-blue bg-light border-none rounded-[5px] cursor-pointer"
        type="reset"
        onClick={handleReset}
      >
        Reset
      </button>
    </>
  );
}

export default function TimerApp() {
  return (
    <div className="flex flex-col gap-2.5 items-center">
      <ShowTimer />
    </div>
  );
}
