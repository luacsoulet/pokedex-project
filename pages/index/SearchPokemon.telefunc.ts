export async function SearchPokemon(searchTerm: string) {
  const response = await fetch(`${import.meta.env.VITE_POKEMON_API}?search=${searchTerm}`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_POKEMON_API_KEY}`
    }
  });
  const data = await response.json();
  return data;
};