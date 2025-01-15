import { Cereal } from "../models/Cereal";

// Definiera hur propsobjektet skall se ut för
// denna komponent.
type ShowCerealsProps = {
  // En lista med flingor som heter cereals
  cereals: Cereal[];

  // En funktion (removeCereal) som behöver ett argument
  // som är av typen Cereal.
  removeCereal: (c: Cereal) => void;
};

export const ShowCereals = (props: ShowCerealsProps) => {
  return (
    <div>
      {/* Loopa igenom listan som vi fick genom props. 
      Denna lista (props.cereals) är samma lista som finns
      i state i CerealApp. */}
      {props.cereals.map((c) => {
        return (
          <div key={c.name}>
            <h3>{c.name}</h3>
            <input type="range" max={10} min={0} value={c.crispiness} />
            <textarea>{c.flavor}</textarea>
            <button
              onClick={() => {
                // Anropa propsobjektets funktion removeCereal
                // och skicka med objektet c (c är det objekt från
                // listan som vi just nu loopar igenom).
                props.removeCereal(c);
              }}
            >
              Ta bort
            </button>
          </div>
        );
      })}
    </div>
  );
};
