import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
import { Button } from "./Button";

export const Todos = () => {
  const { todos, toggle, remove } = useContext(TodosContext);

  return (
    <ul>
      {todos.map((t) => {
        return (
          <li key={t.id}>
            <span className={t.done ? "done" : ""}>{t.text}</span>
            <Button onClick={() => toggle(t.id)}>Ändra</Button>
            <Button onClick={() => remove(t.id)}>Ta bort</Button>
          </li>
        );
      })}
    </ul>
  );
};
