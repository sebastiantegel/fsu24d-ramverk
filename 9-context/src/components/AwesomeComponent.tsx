import { useContext } from "react";
import { CoolComponent } from "./CoolComponent";
import { MyContext } from "../contexts/MyContext";

export const AwesomeComponent = () => {
  const { change } = useContext(MyContext);

  return (
    <>
      <h2>Awesome</h2>
      <CoolComponent></CoolComponent>
      <button onClick={change}>Ändra</button>
    </>
  );
};
