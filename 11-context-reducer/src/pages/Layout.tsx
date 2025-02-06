import { NavLink, Outlet } from "react-router";
import { ITheme, ThemeContext, themes } from "../contexts/ThemeContext";
import { useState } from "react";
import { Button } from "../components/Button";

export const Layout = () => {
  const [theme, setTheme] = useState<ITheme>(themes.light);

  return (
    <ThemeContext.Provider value={theme}>
      <header>
        <Button
          onClick={() => {
            theme.name === themes.light.name
              ? setTheme(themes.dark)
              : setTheme(themes.light);
          }}
        >
          Byt tema
        </Button>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Hem</NavLink>
            </li>
            <li>
              <NavLink to={"/todos"}>Todos</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </ThemeContext.Provider>
  );
};
