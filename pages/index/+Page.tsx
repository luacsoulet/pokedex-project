import React, { useState, useEffect, useCallback } from "react";
import type { Data } from "./+data";
import { useData } from "vike-react/useData";
import { Gallery } from "../../components/Gallery";
import type { Pokemon } from "./types";
import { SearchPokemon, getTypes, fetchMorePokemon } from "./SearchPokemon.telefunc";
import type { Type, Types } from "./types";
import { usePokemonContext } from "../../contexts/pokemonContext";

export default function Page() {
  const data = useData<Data>();
  const { pokemonList, setPokemonList, isContextLoading, setIsContextLoading } = usePokemonContext();
  const [filteredData, setFilteredData] = useState<Pokemon[]>([]);
  const [types, setTypes] = useState<Type[]>([]);
  const [selectedType, setSelectedType] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const PAGE_SIZE = 60;

  useEffect(() => {
    if (data.pokemonList) {
      setPokemonList(data.pokemonList);
      setFilteredData(data.pokemonList);
    }
  }, [data.pokemonList, setPokemonList]);

  useEffect(() => {
    const searchAndFilter = async () => {
      setIsLoading(true);
      try {
        if (searchTerm) {
          const searchResults = await SearchPokemon(searchTerm);

          if (selectedType && selectedType !== 'Select a type') {
            setFilteredData(searchResults.filter((pokemon: Pokemon) =>
              pokemon.types?.some(type => type.slug === selectedType)
            ));
          } else {
            setFilteredData(searchResults);
          }
        } else {
          setFilteredData(data.pokemonList);
        }
      } catch (error) {
        console.error("Erreur lors de la recherche ou du filtrage:", error);
        setFilteredData([]);
      } finally {
        setIsLoading(false);
      }
    };

    searchAndFilter();
  }, [searchTerm, selectedType, data.pokemonList]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value.toLowerCase();
    setSearchTerm(newSearchTerm);
    setSelectedType('');
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
  };

  useEffect(() => {
    getTypes().then((types: Types) => setTypes(types));
  }, []);

  const resetFilters = () => {
    setSelectedType('');
    setFilteredData(data.pokemonList);
    setSearchTerm('');
  };

  const handleScroll = useCallback(async () => {
    if (isLoading || isContextLoading || searchTerm || selectedType) {
      return;
    }

    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollHeight - scrollTop - clientHeight <= 200) {
      setIsLoading(true);
      setIsContextLoading(true);
      
      try {
        const currentLength = pokemonList.length;
        const newPokemon = await fetchMorePokemon(currentLength + 1, PAGE_SIZE);
        
        if (newPokemon && newPokemon.length > 0) {
          await new Promise<void>((resolve) => {
            setPokemonList(prevList => {
              const newList = [...prevList];
              newPokemon.forEach((pokemon: Pokemon) => {
                if (!newList.some(p => p.id === pokemon.id)) {
                  newList.push(pokemon);
                }
              });
              resolve();
              return newList;
            });
          });
        }
      } catch (error) {
        console.error("Erreur lors du chargement des pokémon supplémentaires:", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
          setIsContextLoading(false);
        }, 100);
      }
    }
  }, [isLoading, isContextLoading, searchTerm, selectedType, pokemonList.length]);

  useEffect(() => {
    const onScroll = () => {
      if (!isLoading && !isContextLoading) {
        handleScroll();
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll, isLoading, isContextLoading]);

  return (
    <div>
      <h1>Pokédex</h1>
      <div>
        <input 
          type="text" 
          placeholder="Rechercher un Pokémon" 
          onChange={handleSearch}
          value={searchTerm}
        />
        <select 
          name="type" 
          id="type" 
          onChange={handleTypeChange}
          value={selectedType}
        >
          <option value="">Select a type</option>
          {Array.isArray(types) && types.map((type: Type, index: number) => (
            <option key={index} value={type.slug}>{type.name}</option>
          ))}
        </select>
        <button onClick={resetFilters}>Reset filters</button>
      </div>
      <Gallery 
        data={searchTerm ? filteredData : pokemonList}
        isLoading={isLoading || isContextLoading} 
        hasFilters={!!(searchTerm || selectedType)}
        setIsLoading={setIsLoading}
      />
      {(isLoading || isContextLoading) && <p>Chargement des données...</p>}
    </div>
  );
}