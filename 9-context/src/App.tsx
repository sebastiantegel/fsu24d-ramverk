import { useState } from "react";
import "./App.css";
import { AwesomeComponent } from "./components/AwesomeComponent";
import { IMyContext, MyContext } from "./contexts/MyContext";
import { TodoApp } from "./components/TodoApp";
import { ITheme, ThemeContext, themes } from "./contexts/ThemeContext";
import { Button } from "./components/Button";

function App() {
  const [someText, setSomeText] = useState<IMyContext>({
    text: "Hello world",
    change: () => {},
  });
  const [theme, setTheme] = useState<ITheme>(themes.day);

  someText.change = () => {
    setSomeText({ ...someText, text: "Hej hej" });
  };

  theme.toggle = () => {
    theme.name === themes.day.name
      ? setTheme(themes.night)
      : setTheme(themes.day);
  };

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Button onClick={() => theme.toggle()}>
          Ändra till:
          {theme.name === themes.day.name ? themes.night.name : themes.day.name}
        </Button>

        {/* <MyContext.Provider value={someText}>
        <AwesomeComponent></AwesomeComponent>
      </MyContext.Provider> */}

        <TodoApp></TodoApp>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
