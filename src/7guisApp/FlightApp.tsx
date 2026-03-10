import "../global.css";
import "../7guisCSS/flight.css";
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
    if (!inDate) {
      return false;
    }

    if (type === types.two) {
      if (!outDate) {
        return false;
      }
      if (inDate > outDate) {
        return false;
      }
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
    <div className="canvas">
      <div id="box">
        <select value={type} onChange={handleTypeChange}>
          <option value={types.one}>one-way flight</option>
          <option value={types.two}>return flight</option>
        </select>
        <input
          type="date"
          value={inDate}
          onChange={(e) => setInDate(e.target.value)}
        />
        <input
          type="date"
          value={outDate}
          onChange={(e) => setOutDate(e.target.value)}
          disabled={type === types.one}
        />
        <button type="submit" disabled={!isValid()} onClick={handleBooking}>
          Book
        </button>
      </div>
      <a id="link" href="/">
        {" "}
        &lArr; Back
      </a>
    </div>
  );
}
