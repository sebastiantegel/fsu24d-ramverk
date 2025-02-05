import { FormEvent, useReducer, useState } from "react";
import { IActionType, TodosReducer } from "../reducers/TodosReducer";

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodosReducer, []);
  const [userInput, setUserInput] = useState("");

  const handleRemove = (id: number) => {
    dispatch({
      type: IActionType.REMOVED,
      payload: id.toString(),
    });
  };

  const handleToggle = (id: number) => {
    dispatch({
      type: IActionType.TOGGLED,
      payload: id.toString(),
    });
  };

  const handleSave = (e: FormEvent) => {
    e.preventDefault();

    dispatch({
      type: IActionType.ADDED,
      payload: userInput,
    });

    setUserInput("");
  };

  return (
    <>
      <form onSubmit={handleSave}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button>Spara</button>
      </form>
      <ul>
        {todos.map((t) => {
          return (
            <li key={t.id}>
              <span className={t.done ? "done" : ""}>{t.text}</span>
              <button onClick={() => handleToggle(t.id)}>Ändra</button>
              <button onClick={() => handleRemove(t.id)}>Ta bort</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
