import { Pokemon } from "../models/Pokemon";
import { PokeResponse } from "../models/PokeResponse";
import { get } from "./serviceBase";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export const getPokemons = async (offset: number) => {
  const data = await get<PokeResponse>(`${BASE_URL}?offset=${offset}`);
  return data.results;
};

export const getPokemonByName = async (name: string) => {
  const data = await get<Pokemon>(`${BASE_URL}${name}`);
  return data;
};
