import { useReducer } from "react";
import { AddTodo } from "../components/AddTodo";
import { Todos } from "../components/Todos";
import { TodosReducer } from "../reducers/TodosReducer";
import { TodosContext } from "../contexts/TodosContext";
// import { TodoDispatchContext } from "../contexts/TodoDispatchContext";
// import { TodoListContext } from "../contexts/TodoListContext";

export const TodoApp = () => {
  // Reducer (state)
  const [todos, dispatch] = useReducer(
    TodosReducer,
    JSON.parse(localStorage.getItem("todos") || "[]")
  );

  localStorage.setItem("todos", JSON.stringify(todos));

  // Context
  // { todos, dispatch } === { todos: todos, dispatch: dispatch }
  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      <AddTodo />
      <Todos />
    </TodosContext.Provider>

    // <TodoDispatchContext.Provider value={dispatch}>
    //   <AddTodo />

    //   <TodoListContext.Provider value={todos}>
    //     <Todos />
    //   </TodoListContext.Provider>
    // </TodoDispatchContext.Provider>
  );
};
