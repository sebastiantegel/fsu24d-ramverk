import { FormEvent, useState } from "react";
import { useTodos } from "../hooks/useTodos";

export const Todos = () => {
  const { todos, removeTodo, toggleTodo, addTodo } = useTodos();
  const [textFromUser, setTextFromUser] = useState("");

  const handleSave = (e: FormEvent) => {
    e.preventDefault();

    addTodo(textFromUser);
    setTextFromUser("");
  };

  return (
    <>
      <h2>Todos</h2>
      <form onSubmit={handleSave}>
        <input
          type="text"
          value={textFromUser}
          onChange={(e) => setTextFromUser(e.target.value)}
        />
        <button>Spara</button>
      </form>
      <ul>
        {todos.map((t) => {
          return (
            <li key={t.id}>
              <span className={t.done ? "done" : ""}>{t.text}</span>
              <button onClick={() => removeTodo(t.id)}>Ta bort</button>
              <button onClick={() => toggleTodo(t.id)}>Ändra</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
