import "./App.css";
import { HelloWorld } from "./HelloWorld";
import { Navigation } from "./Navigation";

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <HelloWorld></HelloWorld>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
