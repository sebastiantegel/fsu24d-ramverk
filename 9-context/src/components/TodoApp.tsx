import { useState } from "react";
import { ITodosContext, TodosContext } from "../contexts/TodosContext";
import { Todos } from "./Todos";
import { Todo } from "../models/Todo";
import { AddTodo } from "./AddTodo";

export const TodoApp = () => {
  const [todoState, setTodoState] = useState<ITodosContext>({
    todos: [],
    add: () => {},
    toggle: () => {},
    remove: () => {},
  });

  todoState.toggle = (id: number) => {
    setTodoState({
      ...todoState,
      todos: todoState.todos.map((t) => {
        if (t.id === id) {
          return { ...t, done: !t.done };
        } else {
          return t;
        }
      }),
    });
  };

  todoState.remove = (id: number) => {
    setTodoState({
      ...todoState,
      todos: todoState.todos.filter((t) => t.id !== id),
    });
  };

  todoState.add = (text: string) => {
    setTodoState({ ...todoState, todos: [...todoState.todos, new Todo(text)] });
  };

  return (
    <>
      <h2>Todos</h2>
      <TodosContext.Provider value={todoState}>
        <AddTodo />
        <Todos />
      </TodosContext.Provider>
    </>
  );
};
