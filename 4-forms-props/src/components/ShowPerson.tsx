import { Person } from "../models/Person";

interface IShowPersonProps {
  person: Person;
}

export const ShowPerson = (props: IShowPersonProps) => {
  return (
    <>
      <h3>{props.person.firstname}</h3>
    </>
  );
};
