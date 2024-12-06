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
    <div>
      {isLoading && pokemonList.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-wrap gap-4">
          {pokemonList.length > 0 ? (
            pokemonList.map((pokemon: Pokemon) => (
              <div key={pokemon.id} className="flex flex-col items-center w-[100px]">
                <a href={`/pokemon/${pokemon.slug}`}>
                  <Pokecard name={pokemon.name} image={pokemon.sprites.normal.male} />
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