import { useState } from "react";
import { Person } from "../models/Person";

export const Persons = () => {
  const [persons, setPersons] = useState<Person[]>(
    JSON.parse(localStorage.getItem("persons") || "[]")
  );

  const handleClick = () => {
    localStorage.setItem("persons", JSON.stringify(persons));
  };

  return (
    <>
      {JSON.stringify(persons)}
      <button onClick={handleClick}>Spara i LS</button>
    </>
  );
};
