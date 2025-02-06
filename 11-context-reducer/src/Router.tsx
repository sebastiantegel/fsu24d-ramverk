import { createBrowserRouter } from "react-router";
import { TodoApp } from "./pages/TodoApp";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/todos",
        element: <TodoApp />,
      },
    ],
  },
]);
