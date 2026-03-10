import "../global.css";
import "../7guisCSS/crud.css";
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
      <div className="wrap">
        <label htmlFor="prefix">Filter prefix:</label>
        <input
          type="text"
          id="prefix"
          name="prefix"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      <div id="list">
        {(searchTerm === "" ? list : filtered).map((item, id) => (
          <p
            key={id}
            className="items"
            style={{ backgroundColor: selected === item ? "gray" : "white" }}
            onClick={() => setSelected(item)}
          >
            {item}
          </p>
        ))}
      </div>
      <div className="wrap">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="wrap">
        <label htmlFor="surname">Surname:</label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={surname}
          onChange={(e) => {
            setSurname(e.target.value);
          }}
        />
      </div>
      <div className="wrap">
        <button onClick={handleCreate}>Create</button>
        <button onClick={handleUpdate} disabled={!selected}>
          Update
        </button>
        <button onClick={handleDelete} disabled={!selected}>
          Delete
        </button>
      </div>
    </>
  );
}

export default function CrudApp() {
  return (
    <div className="canvas">
      <div id="box">
        <Crud />
      </div>
      <a id="link" href="/">
        {" "}
        &lArr; Back
      </a>
    </div>
  );
}
