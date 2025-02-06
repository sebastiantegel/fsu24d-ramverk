import { createContext } from "react";

export interface ITheme {
  background: string;
  foreground: string;
  name: string;
}

export interface IThemes {
  light: ITheme;
  dark: ITheme;
}

export const themes: IThemes = {
  light: {
    name: "Day",
    background: "beige",
    foreground: "blue",
  },
  dark: {
    name: "Night",
    background: "darkorchid",
    foreground: "white",
  },
};

export const ThemeContext = createContext<ITheme>(themes.light);
