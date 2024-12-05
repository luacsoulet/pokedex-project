import React from "react";
import type { Data } from "./+data";
import { useData } from "vike-react/useData";
import type { Pokemon } from "./types";

export default function Page() {
  const data = useData<Data>();
  return (
    <div>
      <h1>Pokédex</h1>
      <div className="flex flex-wrap gap-4">
        {data.pokemonList.length > 0 ? (
          data.pokemonList.map((pokemon: Pokemon) => (
            <div key={pokemon.id} className="flex flex-col items-center w-[100px]">
              <a href={`/pokemon/${pokemon.slug}`}>
                {pokemon.sprites && pokemon.sprites.normal ? (
                  <img src={pokemon.sprites.normal.male} alt={pokemon.name} />
                ) : (
                  <p>Image non disponible</p>
                )}
                <p>{pokemon.name}</p>
              </a>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
