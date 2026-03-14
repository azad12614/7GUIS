import { atom } from "jotai";

export const counterAtom = atom(0);

export const celsiusAtom = atom(0);
export const fahrenheitAtom = atom(
  (get) => get(celsiusAtom) * (9 / 5) + 32,

  (get, set, newFahrenheit: number) => {
    const newcelsius = (newFahrenheit - 32) * (5 / 9);
    set(celsiusAtom, newcelsius);
  },
);
