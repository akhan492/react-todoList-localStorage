import "./styles.css";
import React, { useState, useEffect } from "react";
const getLocalItem = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  }
};
export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(getLocalItem());
  const addtodo = () => {
    setInput("");
    if (input) {
      setTodos((oldtodo) => [...oldtodo, input]);
    }
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todos));
  }, [todos]);
  const deleteTodo = (ID) => {
    const newTodos = todos.filter((i, id) => id !== ID);
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <div className="todos">
        <h1>Todo list </h1>
        <input
          type="text"
          value={input}
          placeholder="add todo"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="addbtn" onClick={addtodo}>
          addtodo
        </button>
        <ul>
          {todos.map((i, id) => (
            <li id="li" key={id}>
              {i}{" "}
              <button className="x" onClick={() => deleteTodo(id)}>
                <i className="fa-solid fa-trash" />
              </button>
              <i
                className="fa-solid fa-check"
                style={{ fontSize: "24px" }}
                onClick={() => {
                  document.getElementById("li").classList.toggle("mark");
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
