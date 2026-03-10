import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        counterReact: resolve(__dirname, "src/7guisHtml/counter.html"),
        converterReact: resolve(__dirname, "src/7guisHtml/converter.html"),
        flightReact: resolve(__dirname, "src/7guisHtml/flight.html"),
        timerReact: resolve(__dirname, "src/7guisHtml/timer.html"),
        crudReact: resolve(__dirname, "src/7guisHtml/crud.html"),
        circleReact: resolve(__dirname, "src/7guisHtml/circle.html"),
        cellsReact: resolve(__dirname, "src/7guisHtml/cells.html"),
      },
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
});
