import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { Movies } from "./pages/Movies";
import { Music } from "./pages/Music";
import { NotFound } from "./pages/NotFound";
import { Pokemons } from "./pages/Pokemons";
import { MovieDetails } from "./pages/MovieDetails";
import { PokemonDetails } from "./pages/Pokemon";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetails />,
      },
      {
        path: "/pokemons",
        element: <Pokemons />,
        children: [
          {
            path: "/pokemons/:name",
            element: <PokemonDetails />,
          },
        ],
      },
      {
        path: "/music",
        element: <Music />,
      },
    ],
  },
]);
