import { ReactNode, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

interface ISpanProps {
  children: ReactNode;
  done: boolean;
}

export const Span = ({ children, done }: ISpanProps) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      {done ? (
        <span
          style={{
            backgroundColor: theme.background,
            color: theme.foreground,
          }}
        >
          {children}
        </span>
      ) : (
        <span>{children}</span>
      )}
    </>
  );
};
