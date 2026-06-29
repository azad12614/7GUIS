import { useState } from "react";

const types = {
  one: "one_way_flight",
  two: "return_flight",
} as const;

export default function FlightApp() {
  const [type, setType] = useState<(typeof types)[keyof typeof types]>(
    types.one,
  );
  const [inDate, setInDate] = useState("");
  const [outDate, setOutDate] = useState("");

  const isValid = () => {
    if (!inDate) return false;
    if (type === types.two) {
      if (!outDate) return false;
      if (inDate > outDate) return false;
    }
    return true;
  };

  const handleBooking = () => {
    if (type === types.one) {
      alert(`You have booked a one-way flight for ${inDate}`);
    } else {
      alert(`You have booked a return flight from ${inDate} to ${outDate}`);
    }
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === types.one || value === types.two) {
      setType(value);
      if (value === types.one) {
        setOutDate("");
      }
    }
  };

  const inputClass =
    "w-full px-3 py-2 rounded-lg bg-[#1e3a6e] text-[#e5e5e5] border border-white/10 focus:border-[#fca311]/40 focus:outline-none disabled:opacity-30 disabled:cursor-not-allowed font-sans";
  const isReturn = type === types.two;

  return (
    <div className="flex flex-col gap-3 w-full">
      <select
        className={`${inputClass} cursor-pointer`}
        value={type}
        onChange={handleTypeChange}
      >
        <option value={types.one}>One-way Flight</option>
        <option value={types.two}>Return Flight</option>
      </select>

      {/* Date range row */}
      <div className="flex items-center gap-2 bg-[#0f1a2e] border border-white/10 rounded-xl p-3 font-sans">
        <div className="flex flex-col gap-1 flex-1">
          <span className="text-[#e5e5e5]/40 text-xs uppercase tracking-widest">
            Depart
          </span>
          <input
            type="date"
            className="bg-transparent text-[#e5e5e5] text-sm focus:outline-none w-full"
            value={inDate}
            onChange={(e) => setInDate(e.target.value)}
          />
        </div>
        <div
          className={`flex flex-col items-center gap-1 px-1 transition-opacity duration-200 ${isReturn ? "opacity-100" : "opacity-20"}`}
        >
          <span className="text-[#fca311] text-base">→</span>
        </div>
        <div
          className={`flex flex-col gap-1 flex-1 transition-opacity duration-200 ${isReturn ? "opacity-100" : "opacity-20"}`}
        >
          <span className="text-[#e5e5e5]/40 text-xs uppercase tracking-widest">
            Return
          </span>
          <input
            type="date"
            className="bg-transparent text-[#e5e5e5] text-sm focus:outline-none w-full disabled:cursor-not-allowed"
            value={outDate}
            onChange={(e) => setOutDate(e.target.value)}
            disabled={!isReturn}
          />
        </div>
      </div>

      <button
        className="mt-1 px-4 py-2 rounded-lg bg-[#1e3a6e] text-[#e5e5e5] border border-white/10 hover:bg-[#254d94] hover:border-[#fca311]/40 hover:text-[#fca311] transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-[#1e3a6e] disabled:hover:border-white/10 disabled:hover:text-[#e5e5e5]"
        type="submit"
        disabled={!isValid()}
        onClick={handleBooking}
      >
        Book Flight
      </button>
    </div>
  );
}
