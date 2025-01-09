import { useState } from "react";
import { Plane } from "../models/Plane";

export const ObjectState = () => {
  const [plane, setPlane] = useState<Plane>(new Plane("Cessna", "Vit", 123));

  const rePaint = () => {
    // plane = { model: "Cessna", color: "Vit", series: 123 }
    //
    // plane = { model: "Cessna", color: "Grön", series: 123 }

    setPlane({ ...plane, color: "Grön" });
  };

  return (
    <>
      <div>
        <h3>{plane.model}</h3>
        <p>{plane.color}</p>
        <p>{plane.series}</p>
        <button onClick={rePaint}>Måla om</button>
      </div>
    </>
  );
};
