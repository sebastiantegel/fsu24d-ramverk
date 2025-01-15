import { ChangeEvent, FormEvent, useState } from "react";
import { Cereal } from "../models/Cereal";

// Beskriv hur propsobjektet skall se ut för denna komponent
type AddCerealProps = {
  // En funktion som heter createCereal som behöver ett argument
  // av typen Cereal
  createCereal: (c: Cereal) => void;
};

export const AddCereal = (props: AddCerealProps) => {
  // State för att hantera vårt formulär och våra inputs förändringar
  const [cereal, setCereal] = useState<Cereal>(new Cereal("", 1, ""));

  // Funktion som körs varje gång vi ändrar i en input.
  // Kommer att ändra en egenskap i cereal-objektet (state).
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "text") {
      setCereal({ ...cereal, [e.target.name]: e.target.value });
    } else {
      setCereal({ ...cereal, [e.target.name]: +e.target.value });
    }
  };

  // Funktion som körs om vi klickar på Spara eller trycker Enter när
  // vi är i formuläret.
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Lägga till cereal i listan med flingor genom att anropa
    // funktionen som finns i propsobjektet.
    props.createCereal(cereal);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        name="name"
        value={cereal.name}
      />
      <input
        type="range"
        min={1}
        max={10}
        onChange={handleChange}
        name="crispiness"
        value={cereal.crispiness}
      />
      <input
        type="text"
        name="flavor"
        value={cereal.flavor}
        onChange={handleChange}
      />
      <button>Spara</button>
    </form>
  );
};
