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

  return (
    <div className="flex flex-col gap-2.5 items-center">
      <select
        className="w-full px-3 py-1.5 text-blue bg-light border-none rounded-[10px]"
        value={type}
        onChange={handleTypeChange}
      >
        <option value={types.one}>one-way flight</option>
        <option value={types.two}>return flight</option>
      </select>
      <input
        type="date"
        className="w-full px-3 py-1.5 text-blue bg-light border-none rounded-[10px]"
        value={inDate}
        onChange={(e) => setInDate(e.target.value)}
      />
      <input
        type="date"
        className="w-full px-3 py-1.5 text-blue bg-light border-none rounded-[10px] disabled:bg-gray-400"
        value={outDate}
        onChange={(e) => setOutDate(e.target.value)}
        disabled={type === types.one}
      />
      <button
        className="px-3 py-1.5 text-blue bg-light border-none rounded-[5px] cursor-pointer disabled:text-black disabled:bg-gray-400"
        type="submit"
        disabled={!isValid()}
        onClick={handleBooking}
      >
        Book
      </button>
    </div>
  );
}
