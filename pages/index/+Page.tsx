import React from "react";
import type { Data } from "./+data";
import { useData } from "vike-react/useData";
import { Gallery } from "../../components/Gallery";
import type { Pokemon } from "./types";
import { useState } from "react";
import { SearchPokemon } from "./SearchPokemon.telefunc";

export default function Page() {
  const data = useData<Data>();
  const [filteredData, setFilteredData] = useState<Pokemon[]>(data.pokemonList);
  
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredData = await SearchPokemon(searchTerm);
    setFilteredData(filteredData);
  }

  const types: string[] = [...new Set(data.pokemonList.map((pokemon: Pokemon) => pokemon.types?.[0].name))];

  return (
    <div>
      <h1>Pokédex</h1>
      <input type="text" placeholder="Rechercher un Pokémon" onChange={handleSearch}/>
      {filteredData.length > 0 ? (
        <Gallery data={filteredData} />
      ) : (
        <Gallery data={data} />
      )}
      <div>
        <select name="type" id="type">
          {types.map((type: string, index: number) => (
            <option key={index} value={type}>{type}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
