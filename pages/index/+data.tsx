import type { PageContextServer } from "vike/types";
import type { PokemonList } from "./types";
export type Data = Awaited<ReturnType<typeof data>>;

export default async function data(pageContext: PageContextServer) {

  if (!import.meta.env.VITE_POKEMON_API) {
    throw new Error('POKEMON_API URL is not defined in environment variables');
  }

  const headers: HeadersInit = {};
  if (import.meta.env.VITE_POKEMON_API_KEY) {
    headers.Authorization = `Bearer ${import.meta.env.VITE_POKEMON_API_KEY}`;
  }

  const pokemonList = await fetch(`${import.meta.env.VITE_POKEMON_API}?with=types`, {
      headers,
    })
    .then((res) => res.json());

  return {
    pokemonList,
  };
}
