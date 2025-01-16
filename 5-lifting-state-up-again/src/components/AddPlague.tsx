interface IAddPlagueProps {
  createPlague: (t: string, l: number) => void;
}

export const AddPlague = (props: IAddPlagueProps) => {
  const handleClick = () => {
    // 3
    props.createPlague("Boten Anna", 4);
  };

  return (
    <>
      <button onClick={handleClick}>Lägg till</button>
    </>
  );
};
