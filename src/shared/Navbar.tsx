export default function Navbar({ task }: { task: string }) {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-[#14213d] border-b border-white/5">
      <a
        href="/"
        className="flex items-center gap-2 text-[#e5e5e5]/60 hover:text-[#fca311] no-underline transition-colors duration-200 text-sm"
      >
        ← Back
      </a>
      <span className="text-[#fca311] text-xl font-semibold tracking-wide">{task}</span>
      <span className="text-[#e5e5e5]/30 text-sm font-mono">7GUIs</span>
    </nav>
  );
}
