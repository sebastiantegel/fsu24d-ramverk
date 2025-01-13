interface IGreetingProps {
  theMessage: string;
  anotherMessage: string;
}

export const Greeting = (props: IGreetingProps) => {
  return <h2>{props.theMessage}</h2>;
};
