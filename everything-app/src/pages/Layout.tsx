import { NavLink, Outlet } from "react-router";
import "./../styles/layout.css";

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Hem</NavLink>
            </li>
            <li>
              <NavLink to={"/movies"}>Filmer</NavLink>
            </li>
            <li>
              <NavLink to={"/pokemons"}>Pokemons</NavLink>
            </li>
            <li>
              <NavLink to={"/music"}>Musik</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
