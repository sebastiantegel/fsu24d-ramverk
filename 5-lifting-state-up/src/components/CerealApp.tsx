import { useState } from "react";
import { Cereal } from "../models/Cereal";
import { AddCereal } from "./AddCereal";
import { ShowCereals } from "./ShowCereals";

export const CerealApp = () => {
  // Ett state som innehåller en lista med flingor
  const [cereals, setCereals] = useState<Cereal[]>([
    new Cereal("Musli Gold", 1, "Höigt"),
    new Cereal("Kelloggs - Corn flakes", 9, "Socker"),
  ]);

  // Funktion som lägger till ett objekt i listan (state)
  const addCereal = (newCereal: Cereal) => {
    // Lägg till genom att använda spread (skapa en kopia) och lägg till
    // det nya objektet sist i kopian.
    // Sätt kopian till det nya statet.
    setCereals([...cereals, newCereal]);
  };

  // Funktion för att ta bort en flinga från listan
  const removeCereal = (cereal: Cereal) => {
    // Använd filter för att ta bort ETT objekt ur listan
    // Det objekt som har samma name som cereal kommer att tas bort
    // Resten blir en ny lista som är en position kortare än cereals
    // och blir det nya statet.
    setCereals(cereals.filter((c) => c.name !== cereal.name));
  };

  return (
    <>
      {/* Använd komponenten AddCereal och skicka funktionen
        addCereal till komponenten via props. I komponentens propsobjekt
        kallas funktionen createCereal (createCereal = addCereal)  */}
      <AddCereal createCereal={addCereal}></AddCereal>

      {/* Använd komponenten ShowCereals och skicka listan (state) till komponenten
      via props (cereals). Skicka också funktionen removeCereal, vilken också heter
      removeCereal i propsobjektet. */}
      <ShowCereals cereals={cereals} removeCereal={removeCereal}></ShowCereals>
    </>
  );
};
