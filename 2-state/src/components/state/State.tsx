import { useState } from "react";

export const State = () => {
  const [name, setName] = useState("Sebastian");
  //let name = "Sebastian";

  const handleClick = () => {
    if (name === "Sebastian") {
      setName("Hanna");
    } else {
      setName("Sebastian");
    }
    // name = "Hanna";
    console.log(name);
  };

  return <p onClick={handleClick}>{name}</p>;
};
