import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Pokemon } from "../models/Pokemon";
import { getPokemonByName } from "../services/pokeService";

export const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const { name } = useParams();

  useEffect(() => {
    const getData = async () => {
      if (name) {
        const data = await getPokemonByName(name);
        setPokemon(data);
      }
    };

    getData();
  }, [name]);

  return (
    <div>
      <h3>{pokemon?.name}</h3>
      <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
      <p>{pokemon?.weight}</p>
      {/* <ul>
        {pokemon?.moves.map((m) => {
          return <li key={m.move.name}>{m.move.name}</li>;
        })}
      </ul> */}
    </div>
  );
};
