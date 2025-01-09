import { useState } from "react";
import { Plane } from "../models/Plane";

export const ObjectListState = () => {
  const [planes, setPlanes] = useState<Plane[]>([
    new Plane("Cessna", "Vit", 123),
    new Plane("Boeing", "Blå", 767),
  ]);

  // 1. Lägg till
  const addPlane = () => {
    setPlanes([...planes, new Plane("Airbus", "Svart", 900)]);
  };

  // 2. Ta bort (filter)
  const removePlane = (model: string) => {
    setPlanes(planes.filter((plane) => plane.model !== model));
  };

  // 3. Ändra (map)
  const rePaint = (index: number) => {
    setPlanes(
      planes.map((plane, i) => {
        if (i === index) {
          return { ...plane, color: "Grön" };
        } else {
          return plane;
        }
      })
    );
  };

  console.log(planes);

  return (
    <>
      <button onClick={addPlane}>Lägg till</button>
      <div className="planes">
        {planes.map((plane, i) => {
          return (
            <div>
              <h3>{plane.model}</h3>
              <p>{plane.color}</p>
              <p>{plane.series}</p>
              <button
                onClick={() => {
                  removePlane(plane.model);
                }}
              >
                Ta bort
              </button>
              <button
                onClick={() => {
                  rePaint(i);
                }}
              >
                Måla om
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
