import React from "react";
import type { Data } from "./+data";
import { useData } from "vike-react/useData";
import { Gallery } from "../../components/Gallery";
import type { Pokemon } from "./types";
import { useState, useEffect } from "react";
import { SearchPokemon, getTypes } from "./SearchPokemon.telefunc";
import type { Type, Types } from "./types";

export default function Page() {
  const data = useData<Data>();
  const [filteredData, setFilteredData] = useState<Pokemon[]>(data.pokemonList);
  const [types, setTypes] = useState<Type[]>([]);
  const [selectedType, setSelectedType] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    const searchTerm = e.target.value.toLowerCase();
    const filteredData = await SearchPokemon(searchTerm);
    setFilteredData(filteredData);
    setIsLoading(false);
  }

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
  };

  useEffect(() => {
    setIsLoading(true);
    if (selectedType && selectedType !== 'Select a type') {
      setFilteredData((filteredData?.length ? filteredData : data.pokemonList).filter((pokemon: Pokemon) => 
        pokemon.types?.[0].slug === selectedType
      ));
    } else {
      setFilteredData(filteredData || data.pokemonList);
    }
    setIsLoading(false)
  }, [selectedType, data.pokemonList]);

  useEffect(() => {
    getTypes().then((types: Types) => setTypes(types));
  }, []);
  console.log(types);

  const resetFilters = () => {
    setSelectedType('');
    setFilteredData(data.pokemonList);
  }

  return (
    <div>
      <h1>Pokédex</h1>
      <div>
        <input type="text" placeholder="Rechercher un Pokémon" onChange={handleSearch}/>
        <select name="type" id="type" onChange={handleTypeChange}>
          <option value="Select a type">Select a type</option>
          {Array.isArray(types) && types.map((type: Type, index: number) => (
            <option key={index} value={type.slug}>{type.name}</option>
          ))}
        </select>
        <button onClick={resetFilters}>Reset filters</button>
      </div>
      <Gallery data={filteredData} isLoading={isLoading} />
    </div>
  );
}
