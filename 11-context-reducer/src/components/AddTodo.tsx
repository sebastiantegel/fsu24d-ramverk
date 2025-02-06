import { FormEvent, useContext, useState } from "react";
import { TodosContext } from "../contexts/TodosContext";
import { IActionType } from "../reducers/TodosReducer";
import { Button } from "./Button";
// import { TodoDispatchContext } from "../contexts/TodoDispatchContext";

export const AddTodo = () => {
  const [userInput, setUserInput] = useState("");
  // const dispatch = useContext(TodoDispatchContext);
  const { dispatch } = useContext(TodosContext);

  const handleSave = (e: FormEvent) => {
    e.preventDefault();

    dispatch({
      type: IActionType.ADDED,
      payload: userInput,
    });

    setUserInput("");
  };

  return (
    <form onSubmit={handleSave}>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <Button>Spara</Button>
    </form>
  );
};
