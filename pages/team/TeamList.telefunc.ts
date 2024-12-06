import type { PokemonId } from "../index/types";

export const getTeam = async (teamState: PokemonId[]) => {
  const team = await Promise.all(teamState.map(async (pokemon: PokemonId) => {
    if (!import.meta.env.VITE_POKEMON_API) {
      throw new Error('POKEMON_API URL is not defined in environment variables');
    }

    const headers: HeadersInit = {};
    if (import.meta.env.VITE_POKEMON_API_KEY) {
      headers.Authorization = `Bearer ${import.meta.env.VITE_POKEMON_API_KEY}`;
    }

    const actualPokemon = await fetch(`${import.meta.env.VITE_POKEMON_API}/pokemon/${pokemon.slug}`, {
      headers,
    }).then((res) => res.json());

    return actualPokemon.current;
  }));

  return { team };
}
