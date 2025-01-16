import { Plague } from "../models/Plague";

interface IShowPlagues {
  plagues: Plague[];
  deletePlague: (i: number) => void;
}

export const ShowPlagues = (props: IShowPlagues) => {
  const removePlague = (i: number) => {
    props.deletePlague(i);
  };

  return (
    <>
      {props.plagues.map((p, i) => {
        return (
          <div>
            <h2>{p.title}</h2>
            <p>{p.length}</p>
            <button
              onClick={() => {
                removePlague(i);
              }}
            >
              Ta bort
            </button>
          </div>
        );
      })}
    </>
  );
};
