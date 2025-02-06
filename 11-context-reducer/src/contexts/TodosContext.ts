import { createContext, Dispatch } from "react";
import { Todo } from "../models/Todo";
import { IAction } from "../reducers/TodosReducer";

interface ITodosContext {
  todos: Todo[];
  dispatch: Dispatch<IAction>;
}

export const TodosContext = createContext<ITodosContext>({
  todos: [],
  dispatch: () => {
    return;
  },
});
