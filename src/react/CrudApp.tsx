import { useState } from "react";

function Crud() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [list, setList] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = list.filter((item) => {
    const [firstName, lastName] = item.split(",").map((s) => s.trim());
    return (
      firstName.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
      lastName.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
  });

  const handleCreate = () => {
    setList((prev) => [...prev, `${name}, ${surname}`]);
    setName("");
    setSurname("");
  };

  const handleUpdate = () => {
    setList((prev) =>
      prev.map((item) => (item === selected ? `${name}, ${surname}` : item)),
    );
    setName("");
    setSurname("");
    setSelected(null);
  };

  const handleDelete = () => {
    setList((prev) => prev.filter((item) => item !== selected));
    setSelected(null);
  };

  return (
    <>
      <div className="flex flex-row gap-2 items-center w-full">
        <label className="text-light" htmlFor="prefix">
          Filter prefix:
        </label>
        <input
          type="text"
          id="prefix"
          className="flex-1 px-3 py-1.5 text-blue bg-light border-none rounded-[10px]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="h-[100px] p-1 rounded-[10px] text-blue bg-light overflow-y-scroll w-full">
        {(searchTerm === "" ? list : filtered).map((item, id) => (
          <p
            key={id}
            className="cursor-pointer px-1"
            style={{ backgroundColor: selected === item ? "gray" : "white" }}
            onClick={() => setSelected(item)}
          >
            {item}
          </p>
        ))}
      </div>
      <div className="flex flex-row gap-2 items-center w-full">
        <label className="text-light" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          className="flex-1 px-3 py-1.5 text-blue bg-light border-none rounded-[10px]"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-row gap-2 items-center w-full">
        <label className="text-light" htmlFor="surname">
          Surname:
        </label>
        <input
          type="text"
          id="surname"
          className="flex-1 px-3 py-1.5 text-blue bg-light border-none rounded-[10px]"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>
      <div className="flex flex-row gap-2">
        <button
          className="px-3 py-1.5 text-blue bg-light border-none rounded-[5px] cursor-pointer disabled:text-black disabled:bg-gray-400"
          onClick={handleCreate}
        >
          Create
        </button>
        <button
          className="px-3 py-1.5 text-blue bg-light border-none rounded-[5px] cursor-pointer disabled:text-black disabled:bg-gray-400"
          onClick={handleUpdate}
          disabled={!selected}
        >
          Update
        </button>
        <button
          className="px-3 py-1.5 text-blue bg-light border-none rounded-[5px] cursor-pointer disabled:text-black disabled:bg-gray-400"
          onClick={handleDelete}
          disabled={!selected}
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default function CrudApp() {
  return (
    <div className="flex flex-col gap-2.5 items-center">
      <Crud />
    </div>
  );
}
