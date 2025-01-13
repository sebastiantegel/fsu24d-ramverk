import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import { Person } from "./models/Person";
import { Greeting } from "./components/Greeting";
import { ShowPerson } from "./components/ShowPerson";
import { ShowPersons } from "./components/ShowPersons";

function App() {
  const [person, setPerson] = useState<Person>(new Person("", "", 0, false));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "text") {
      setPerson({ ...person, [e.target.name]: e.target.value });
    }
    if (e.target.type === "number") {
      setPerson({ ...person, [e.target.name]: +e.target.value });
    }
    if (e.target.type === "checkbox") {
      setPerson({ ...person, [e.target.name]: e.target.checked });
    }

    // Validering
  };

  // Validering

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validering

    console.log("Skicka till api:", person);
  };

  return (
    <>
      <Greeting theMessage="Hello there" anotherMessage="Again"></Greeting>
      <ShowPerson person={person}></ShowPerson>
      <ShowPersons persons={[person]}></ShowPersons>

      <p>{JSON.stringify(person)}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={person.firstname}
          name="firstname"
        />
        <input
          type="text"
          onChange={handleChange}
          value={person.lastname}
          name="lastname"
        />
        <input
          type="number"
          onChange={handleChange}
          value={person.age}
          name="age"
        />
        <input
          type="checkbox"
          onChange={handleChange}
          checked={person.isMarried}
          name="isMarried"
        />
        <button>Spara</button>
      </form>
    </>
  );
}

export default App;
