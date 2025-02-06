import { useContext } from "react";
import "./Todos.css";
import { TodosContext } from "../contexts/TodosContext";
import { IActionType } from "../reducers/TodosReducer";
import { Span } from "./Span";
// import { TodoListContext } from "../contexts/TodoListContext";
// import { TodoDispatchContext } from "../contexts/TodoDispatchContext";

export const Todos = () => {
  // const todos = useContext(TodoListContext);
  // const dispatch = useContext(TodoDispatchContext);
  const { todos, dispatch } = useContext(TodosContext);

  const handleToggle = (id: number) => {
    dispatch({
      type: IActionType.TOGGLED,
      payload: id.toString(),
    });
  };

  const handleRemove = (id: number) => {
    dispatch({
      type: IActionType.REMOVED,
      payload: id.toString(),
    });
  };

  return (
    <div className="todos">
      <h3>Todos</h3>
      <ul>
        {todos.map((t) => {
          return (
            <li key={t.id}>
              <Span done={t.done}>{t.text}</Span>
              <button onClick={() => handleToggle(t.id)}>Ändra</button>
              <button onClick={() => handleRemove(t.id)}>Ta bort</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
