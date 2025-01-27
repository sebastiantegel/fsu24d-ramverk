import "./../styles/layout.css";
import { NavLink, Outlet } from "react-router";

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
              <NavLink to={"/about"}>Om</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Kontakt</NavLink>
            </li>
            <li>
              <NavLink to={"/movies"}>Filmer</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div>Social media</div>
        <div>Karta</div>
        <div>Kontaktinfo</div>
      </footer>
    </>
  );
};
