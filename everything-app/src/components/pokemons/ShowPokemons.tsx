import { Outlet, useNavigate } from "react-router";
import { PokemonSmall } from "../../models/PokeResponse";

interface IShowPokemonsProps {
  pokemons: PokemonSmall[];
}

export const ShowPokemons = (props: IShowPokemonsProps) => {
  const navigate = useNavigate();

  return (
    <>
      <ul>
        {props.pokemons.map((p) => {
          return (
            <li
              key={p.name}
              onClick={() => {
                navigate("/pokemons/" + p.name);
              }}
            >
              {p.name}
            </li>
          );
        })}
      </ul>
      <div>
        <Outlet />
      </div>
    </>
  );
};
