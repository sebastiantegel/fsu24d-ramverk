import { Person } from "../../models/Person";

export const ConditionalNullOrSomething = () => {
  const p = new Person("Sebastian", 45, true);

  return <>{p.age > 40 && <>Oj, du var gammal</>}</>;
};
