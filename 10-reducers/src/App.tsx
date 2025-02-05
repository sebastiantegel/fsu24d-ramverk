import { useReducer } from "react";
import "./App.css";
import { TextReducer } from "./reducers/TextReducer";
import { TodoApp } from "./components/TodoApp";

function App() {
  // const [text, setText] = useState("Lorem");
  const [text, dispatch] = useReducer(TextReducer, "Lorem");

  const handleClick = () => {
    // setText("ipsum");
    dispatch({
      type: "CHANGED",
      payload: "ipsum",
    });
  };

  return (
    <>
      <h2>{text}</h2>
      <button onClick={handleClick}>Ändra</button>
      <TodoApp />
    </>
  );
}

export default App;
