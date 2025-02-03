import { createContext } from "react";

export interface IMyContext {
  text: string;
  change: () => void;
}

export const MyContext = createContext<IMyContext>({
  text: "Lorem ipsum",
  change: () => {},
});
