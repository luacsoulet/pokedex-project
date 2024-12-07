import type { Pokemon } from "../pages/index/types";
import { Pokecard } from "./Pokecard";

interface GalleryProps {
  data: Pokemon[] | { pokemonList: Pokemon[] };
  isLoading: boolean;
  hasFilters?: boolean;
  setIsLoading: (loading: boolean) => void;
}

export const Gallery = ({ data, isLoading, hasFilters = false, setIsLoading }: GalleryProps) => {

  const pokemonList = Array.isArray(data) ? data : data.pokemonList;

  return (
    <div className="flex justify-center w-[80vw]">
      {isLoading && pokemonList.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-wrap gap-4 w-full">
          {pokemonList.length > 0 ? (
            pokemonList.map((pokemon: Pokemon) => (
              <div key={pokemon.id} className="flex justify-center">
                <a href={`/pokemon/${pokemon.slug}`}>
                  <Pokecard name={pokemon.name} image={pokemon.sprites.normal.male} id={pokemon.id} />
                </a>
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      )}
    </div>
  );
};