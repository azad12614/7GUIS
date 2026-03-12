export default function Navbar({ task }: { task: string }) {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-blue">
      <a
        href="/"
        className="text-light italic no-underline hover:underline text-lg"
      >
        &#8656; Back
      </a>
      <span className="text-orange text-2xl italic font-serif">{task}</span>
      <span className="text-orange text-xl font-serif font-bold">7GUIs</span>
    </nav>
  );
}
