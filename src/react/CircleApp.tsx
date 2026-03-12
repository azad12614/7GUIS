import { useState, useEffect, useRef } from "react";
import type { Circle } from "../shared/types";

export default function CircleApp() {
  const [circles, setCircles] = useState<Circle[]>([]);
  const [radius, setRedius] = useState("25");
  const [undoCount, setUndoCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [clickedCircle, setClickedCircle] = useState(-1);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const visibleCircles = circles.slice(0, circles.length - undoCount);

    const idx = visibleCircles.findIndex(
      (c) => Math.sqrt((x - c.x) ** 2 + (y - c.y) ** 2) <= c.r,
    );

    setClickedCircle(idx);

    if (idx > -1) {
      setIsVisible(true);
    } else if (undoCount > 0) {
      setCircles([...visibleCircles, { x, y, r: Number(radius) }]);
      setUndoCount(0);
    } else {
      setCircles([...circles, { x, y, r: Number(radius) }]);
    }
  };

  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const visibleCircles = circles.slice(0, circles.length - undoCount);
    visibleCircles.forEach((circle) => {
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
      ctx.strokeStyle = "#14213d";
      ctx.lineWidth = 1;
      ctx.stroke();
    });
  }, [circles, undoCount]);

  const updateRadius = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newR = Number(e.target.value);
    setRedius(e.target.value);
    if (clickedCircle < 0) return;
    const newCircles = [...circles];
    const { x, y } = newCircles[clickedCircle];
    newCircles[clickedCircle] = { x, y, r: Number(newR) };
    setCircles(newCircles);
  };

  return (
    <div className="flex flex-col gap-2.5 items-center">
      <div
        className="flex flex-row gap-2 items-center"
        style={{ visibility: isVisible ? "visible" : "hidden" }}
      >
        <label className="text-light" htmlFor="radius">
          Radius:
        </label>
        <input
          type="range"
          min="5"
          max="100"
          defaultValue={radius}
          value={radius}
          onChange={updateRadius}
          onMouseLeave={() => setIsVisible(false)}
          id="radius"
          name="radius"
        />
      </div>
      <canvas
        className="bg-light rounded-[5px]"
        width="325"
        height="325"
        ref={canvasRef}
        onClick={handleCanvasClick}
      />
      <div className="flex flex-row gap-2">
        <button
          className="px-3 py-1.5 text-blue bg-light border-none rounded-[5px] cursor-pointer disabled:text-black disabled:bg-gray-400"
          onClick={() => setUndoCount(undoCount + 1)}
          disabled={undoCount === circles.length}
        >
          Undo
        </button>
        <button
          className="px-3 py-1.5 text-blue bg-light border-none rounded-[5px] cursor-pointer disabled:text-black disabled:bg-gray-400"
          onClick={() => setUndoCount(undoCount - 1)}
          disabled={!undoCount}
        >
          Redo
        </button>
      </div>
    </div>
  );
}
