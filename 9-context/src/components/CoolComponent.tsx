import { useContext } from "react";
import { MyContext } from "../contexts/MyContext";

export const CoolComponent = () => {
  const { text } = useContext(MyContext);

  return (
    <>
      <h4>Cool</h4>
      <p>{text}</p>
    </>
  );
};
