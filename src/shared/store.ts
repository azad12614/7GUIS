export const counterStore: {
  counter: number;
  listeners: (() => void)[];
  getState(): number;
  setState(newState: number): void;
  subscribe(listener: () => void): () => void;
} = {
  counter: 0,
  listeners: [],

  getState() {
    return this.counter;
  },

  setState(newCounter: number) {
    this.counter = newCounter;
    this.listeners.forEach((listener) => listener());
  },

  subscribe(listener: () => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  },
};

type TemperatureState = { celsius: number; fahrenheit: number };

export const temperatureStore: {
  state: TemperatureState;
  listeners: (() => void)[];
  getState(): TemperatureState;
  setState(newState: Partial<TemperatureState>): void;
  subscribe(listener: () => void): () => void;
} = {
  state: { celsius: 0, fahrenheit: 32 },
  listeners: [],

  getState() {
    return this.state;
  },

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach((listener) => listener());
  },

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  },
};
