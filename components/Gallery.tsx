import type { Pokemon } from "../pages/index/types";
import { Pokecard } from "./Pokecard";

export const Gallery = ({ data }: { data: { pokemonList: Pokemon[] } }) => {
  return (
    <div className="flex flex-wrap gap-4">
        {data.pokemonList.length > 0 ? (
          data.pokemonList.map((pokemon: Pokemon) => (
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
  )
};