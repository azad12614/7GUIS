import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../global.css";
import Navbar from "../shared/Navbar.tsx";
import CurrentApp from "../react/CircleApp.tsx";
import PureReactApp from "../pure-react/CircleApp.tsx";
import JotaiApp from "../jotai/CircleApp.tsx";

function Card({ title, impl }: { title: string; impl: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 bg-blue rounded-[20px] p-5 min-w-[200px] items-center">
      <h2 className="text-orange text-xl">{title}</h2>
      {impl}
    </div>
  );
}

function Page() {
  return (
    <div className="min-h-screen bg-black text-light font-serif flex flex-col items-center gap-8">
      <Navbar task="Circle Drawer" />
      <div className="flex flex-col gap-6 items-center">
        <Card title="React" impl={<CurrentApp />} />
        <Card title="Pure React" impl={<PureReactApp />} />
        <Card title="Jotai" impl={<JotaiApp />} />
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
