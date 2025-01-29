import { useState } from "react";
import { Todo } from "../models/Todo";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todos") || "[]")
  );

  const addTodo = (newTodoText: string) => {
    setTodos([...todos, new Todo(newTodoText)]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((t) => {
        if (t.id === id) {
          return { ...t, done: !t.done };
        }
        return t;
      })
    );
  };

  localStorage.setItem("todos", JSON.stringify(todos));

  return { todos, addTodo, removeTodo, toggleTodo };
};
