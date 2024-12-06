export async function SearchPokemon(searchTerm: string) {
  const response = await fetch(`${import.meta.env.VITE_POKEMON_API}/pokemon?limit=30&with=types&search=${searchTerm}`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_POKEMON_API_KEY}`
    }
  });
  const data = await response.json();
  return data;
};

export async function SearchPokemonByType(type: string) {
  const response = await fetch(`${import.meta.env.VITE_POKEMON_API}/pokemon?type=${type}`);
  const data = await response.json();
  return data;
}

export async function getTypes() {
  const response = await fetch(`${import.meta.env.VITE_POKEMON_API}/type`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_POKEMON_API_KEY}`
    }
  });
  const data = await response.json();
  return data;
}

export async function fetchMorePokemon(offset: number, pageSize: number) {
  const response = await fetch(
    `${import.meta.env.VITE_POKEMON_API}/pokemon?limit=${pageSize}&offset=${offset}&with=types`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_POKEMON_API_KEY}`
      }
    }
  );
  const data = await response.json();
  return data;
}