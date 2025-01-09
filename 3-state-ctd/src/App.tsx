import "./App.css";
import { BasicState } from "./components/BasicState";
import { ObjectListState } from "./components/ObjectListState";
import { ObjectState } from "./components/ObjectState";
import { SimpleListState } from "./components/SimpleListState";

function App() {
  return (
    <>
      {/* <BasicState></BasicState> */}
      {/* <ObjectState></ObjectState> */}
      {/* <SimpleListState></SimpleListState> */}
      <ObjectListState></ObjectListState>
    </>
  );
}

export default App;
