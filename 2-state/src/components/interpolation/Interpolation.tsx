import { Person } from "../../models/Person";

export const Interpolation = () => {
  const name = "Sebastian";
  const age = 45;

  const p = new Person("Sebastian", 45, true); // p = { name: "Sebastian", age: 45, isMarried: true }

  console.log(p);

  return (
    <>
      <p>{name}</p>
      <p>{age}</p>
      <div>
        <h3>{p.name}</h3>
        <span>{p.age}</span>
        <input type="checkbox" checked={p.isMarried} />
      </div>
    </>
  );
};
