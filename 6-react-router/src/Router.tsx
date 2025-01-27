import { createBrowserRouter } from "react-router";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Movie } from "./pages/Movie";
import { Layout } from "./pages/Layouts";
import { Movies } from "./pages/Movies";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/", // http://localhost:5173/
        element: <Home />,
      },
      {
        path: "/about", // http://localhost:5173/about
        element: <About />,
      },
      {
        path: "/contact", // http://localhost:5173/contact
        element: <Contact />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movie/:id", // http://localhost:5173/movie/abc123
        element: <Movie />,
      },
    ],
  },
]);
