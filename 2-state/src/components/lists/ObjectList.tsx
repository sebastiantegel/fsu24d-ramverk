import { Person } from "../../models/Person";

export const ObjectList = () => {
  const family: Person[] = [
    new Person("Sebastian", 45, true),
    new Person("Hanna", 44, true),
    new Person("Astrid", 14, false),
    new Person("Alvar", 14, false),
  ];

  console.log(family);

  const personHtml = family.map((person) => {
    return (
      <div key={person.name}>
        <h3>{person.name}</h3>
        <span>{person.age}</span>
        <input type="checkbox" checked={person.isMarried} />
      </div>
    );
  });

  return <div className="persons">{personHtml}</div>;
};
