import type { Pokemon } from "../pages/index/types";
import { Pokecard } from "./Pokecard";

interface GalleryProps {
  data: Pokemon[] | { pokemonList: Pokemon[] };
}

export const Gallery = ({ data }: GalleryProps) => {
  const pokemonList = Array.isArray(data) ? data : data.pokemonList;

  return (
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
        <p>Loading...</p>
      )}
    </div>
  );
};