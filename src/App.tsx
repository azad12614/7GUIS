import { Card } from "@heroui/react";

const tasks = [
  { name: "Counter", href: "src/html/counter.html", description: "Increment & decrement a number" },
  { name: "Converter", href: "src/html/converter.html", description: "Convert between temperature units" },
  { name: "Flight", href: "src/html/flight.html", description: "Book one-way or return flights" },
  { name: "Timer", href: "src/html/timer.html", description: "Elapsed time with progress bar" },
  { name: "CRUD", href: "src/html/crud.html", description: "Create, read, update, delete" },
  { name: "Circle", href: "src/html/circle.html", description: "Draw circles with undo/redo" },
  { name: "Cells", href: "src/html/cells.html", description: "Spreadsheet with formulas" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-8 py-16 gap-12">
      <div className="text-center space-y-3">
        <h1 className="text-6xl font-bold text-[#fca311] tracking-tight">7GUIs</h1>
        <p className="text-[#e5e5e5]/60 text-lg">Seven tasks to benchmark GUI toolkits</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-3xl">
        {tasks.map((task) => (
          <a key={task.name} href={task.href} className="group">
            <Card className="bg-[#14213d] border border-white/5 hover:border-[#fca311]/40 hover:bg-[#1a2d56] transition-all duration-200 h-full">
              <Card.Header className="pb-1">
                <Card.Title className="text-[#e5e5e5] text-xl font-semibold group-hover:text-[#fca311] transition-colors duration-200">
                  {task.name}
                </Card.Title>
              </Card.Header>
              <Card.Content>
                <p className="text-[#e5e5e5]/50 text-sm">{task.description}</p>
              </Card.Content>
              <Card.Footer>
                <span className="text-xs text-[#fca311]/50 group-hover:text-[#fca311] group-hover:translate-x-1 transition-all duration-200 inline-block">
                  Open →
                </span>
              </Card.Footer>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
