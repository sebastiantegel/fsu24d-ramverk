import { Person } from "../models/Person";
import { ShowPerson } from "./ShowPerson";

interface IShowPersons {
  persons: Person[];
}

export const ShowPersons = (props: IShowPersons) => {
  return (
    <>
      {props.persons.map((p) => (
        <ShowPerson person={p}></ShowPerson>
      ))}
    </>
  );
};
