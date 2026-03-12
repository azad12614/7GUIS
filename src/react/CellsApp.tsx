import { useState } from "react";

export default function CellsApp() {
  const [cells, setCells] = useState<string[]>(() => {
    const arr = Array(36).fill("");
    arr[0] = "*";
    for (let i = 1; i < 6; i++) {
      arr[i] = String.fromCharCode(64 + i);
    }
    for (let i = 6; i < 36; i++) {
      if (i % 6 === 0) {
        arr[i] = String(i / 6);
      }
    }
    return arr;
  });

  const [id, setId] = useState<number>();

  function findCell(str: string) {
    if (/^[A-E]$/.test(str[0]) && /^[1-5]$/.test(str[1])) {
      const row = str[0].charCodeAt(0) - 64;
      const col = Number(str[1]);
      return row + col * 6;
    } else {
      return 0;
    }
  }

  function getValue(str: string): number {
    let val = 0;
    str = str.trim();
    if (findCell(str[0] + str[1]) != 0) {
      val += Number(cells[findCell(str[0] + str[1])]);
    } else {
      val += Number(str);
    }
    return val;
  }

  const handleCells = () => {
    if (id) {
      const str = cells[id];
      if (str[0] === "=") {
        if (str.length == 3 && findCell(str[1] + str[2]) != 0) {
          const newCells = [...cells];
          newCells[id] = newCells[findCell(str[1] + str[2])];
          setCells(newCells);
        } else {
          let i = 0;
          for (let j = 5; j < str.length; j++) {
            if (str[j] == ",") {
              i = j;
              j = str.length;
            }
          }

          let result = 0;

          if (str.startsWith("=sum(")) {
            result =
              getValue(str.slice(5, i)) +
              getValue(str.slice(i + 1, str.length - 1));
          } else if (str.startsWith("=div(")) {
            result =
              getValue(str.slice(5, i)) /
              getValue(str.slice(i + 1, str.length - 1));
          }

          const newCells = [...cells];
          newCells[id] = String(result);
          setCells(newCells);
        }
      }
    }
  };

  return (
    <div className="grid grid-cols-6 gap-0.5">
      {cells.map((cell, idx) => (
        <input
          key={idx}
          type="text"
          className="w-[50px] h-[25px] text-center text-blue bg-light border-none disabled:bg-gray-400"
          disabled={idx < 6 || idx % 6 === 0}
          value={cell}
          onChange={(e) => {
            const newCells = [...cells];
            newCells[idx] = e.target.value;
            setCells(newCells);
            setId(idx);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleCells();
            }
          }}
        />
      ))}
    </div>
  );
}
