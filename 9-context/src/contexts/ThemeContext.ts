import { createContext } from "react";

export interface ITheme {
  background: string;
  foreground: string;
  name: string;
  toggle: () => void;
}

export interface IThemes {
  day: ITheme;
  night: ITheme;
}

export const themes: IThemes = {
  day: {
    background: "white",
    foreground: "black",
    name: "Light",
    toggle: () => {},
  },
  night: {
    background: "grey",
    foreground: "white",
    name: "Dark",
    toggle: () => {},
  },
};

export const ThemeContext = createContext<ITheme>(themes.day);
