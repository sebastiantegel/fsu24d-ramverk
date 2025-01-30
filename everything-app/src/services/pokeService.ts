import { PokeResponse } from "../models/PokeResponse";
import { get } from "./serviceBase";

export const getPokemons = async (offset: number) => {
  const data = await get<PokeResponse>(
    "https://pokeapi.co/api/v2/pokemon?offset=" + offset
  );
  return data.results;
};
