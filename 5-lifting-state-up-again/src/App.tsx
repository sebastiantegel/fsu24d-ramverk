import { useState } from "react";
import "./App.css";
import { Plague } from "./models/Plague";
import { AddPlague } from "./components/AddPlague";
import { ShowPlagues } from "./components/ShowPlagues";

function App() {
  const [plagues, setPlagues] = useState<Plague[]>([]);

  // 1
  const addPlague = (title: string, length: number) => {
    setPlagues([...plagues, new Plague(title, length)]);
  };

  const removePlague = (index: number) => {
    setPlagues(plagues.filter((_, i) => i !== index));
  };

  return (
    <>
      {/* 2 */}
      <AddPlague createPlague={addPlague} />
      <ShowPlagues plagues={plagues} deletePlague={removePlague}></ShowPlagues>
    </>
  );
}

export default App;
