import { useEffect, useState } from "react";
import { PokemonSmall } from "../models/PokeResponse";
import { getPokemons } from "../services/pokeService";
import { ShowPokemons } from "../components/pokemons/ShowPokemons";
import "./../styles/pokemons.css";

export const Pokemons = () => {
  const [pokemons, setPokemons] = useState<PokemonSmall[]>([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const data = await getPokemons(offset);
      setPokemons(data);
    };

    getData();
  }, [offset]);

  return (
    <div className="pokemons">
      <h2>Pokemons</h2>
      <div className="list-details">
        <ShowPokemons pokemons={pokemons}></ShowPokemons>
      </div>
      <button disabled={offset === 0} onClick={() => setOffset(offset - 20)}>
        Föregående 20
      </button>
      <button onClick={() => setOffset(offset + 20)}>Nästa 20</button>
    </div>
  );
};
