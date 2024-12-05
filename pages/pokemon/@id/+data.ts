import type { PageContextServer } from "vike/types";
export type Data = Awaited<ReturnType<typeof data>>;

export default async function data(pageContext: PageContextServer) {

  if (!import.meta.env.VITE_POKEMON_API) {
    throw new Error('POKEMON_API URL is not defined in environment variables');
  }

  const headers: HeadersInit = {};
  if (import.meta.env.VITE_POKEMON_API_KEY) {
    headers.Authorization = `Bearer ${import.meta.env.VITE_POKEMON_API_KEY}`;
  }

  const pokemon = await fetch(`${import.meta.env.VITE_POKEMON_API}/${pageContext.routeParams.id}`, {
    headers,
  })
  .then((res) => res.json());

  return {
    currentPokemon: pokemon,
  };
}