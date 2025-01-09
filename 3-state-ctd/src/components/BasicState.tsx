import { useState } from "react";

export const BasicState = () => {
  const [name, setName] = useState<string>("Sebastian");
  const [age, setAge] = useState<number>(45);
  const [nameAgain, setNameAgain] = useState<string>();

  const handleClick = () => {
    setName("Hanna");
    setAge(100);
  };

  console.log(name);
  return (
    <>
      <p onClick={handleClick}>
        {name} - {age}
      </p>
      <div>{nameAgain && <p>{nameAgain}</p>}</div>
    </>
  );
};
