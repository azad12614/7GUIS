import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Card } from "@heroui/react";
import "../global.css";
import Navbar from "../shared/Navbar.tsx";
import CurrentApp from "../react/ConverterApp.tsx";
import PureReactApp from "../pure-react/ConverterApp.tsx";
import JotaiApp from "../jotai/ConverterApp.tsx";

function ImplCard({ title, impl }: { title: string; impl: React.ReactNode }) {
  return (
    <Card className="bg-[#14213d] border border-white/5 min-w-[220px]">
      <Card.Header>
        <Card.Title className="text-[#fca311] text-center w-full">{title}</Card.Title>
      </Card.Header>
      <Card.Content className="flex items-center justify-center py-6">
        {impl}
      </Card.Content>
    </Card>
  );
}

export function Page() {
  return (
    <div className="min-h-screen bg-black text-[#e5e5e5] font-serif flex flex-col items-center gap-12">
      <Navbar task="Converter" />
      <div className="flex flex-row gap-6 items-stretch flex-wrap justify-center">
        <ImplCard title="React" impl={<CurrentApp />} />
        <ImplCard title="Pure React" impl={<PureReactApp />} />
        <ImplCard title="Jotai" impl={<JotaiApp />} />
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
