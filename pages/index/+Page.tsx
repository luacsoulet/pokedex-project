import React, { useState, useEffect, useCallback } from "react";
import type { Data } from "./+data";
import { useData } from "vike-react/useData";
import { Gallery } from "../../components/Gallery";
import type { Pokemon } from "./types";
import { SearchPokemon, getTypes, fetchMorePokemon } from "./SearchPokemon.telefunc";
import type { Type, Types } from "./types";
import { usePokemonContext } from "../../contexts/pokemonContext";
import { Loader } from "../../components/Loader";
import { SearchBar } from '../../components/SearchBar';

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
    if (pokemonList.length > 0) {
      setFilteredData(pokemonList);
    } else if (data.pokemonList) {
      setPokemonList(data.pokemonList);
      setFilteredData(data.pokemonList);
    }
  }, [data.pokemonList, pokemonList, setPokemonList]);

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
    if (
      isLoading || 
      isContextLoading || 
      searchTerm || 
      selectedType || 
      pokemonList.length >= 1024
    ) {
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
    <div className="flex flex-col gap-4 justify-right items-center">
      <h1>Pokédex</h1>
      <SearchBar 
        value={searchTerm}
        onChange={setSearchTerm}
        types={types}
        selectedType={selectedType}
        onTypeChange={handleTypeChange}
        onReset={resetFilters}
      />
      <Gallery 
        data={searchTerm ? filteredData : pokemonList}
        isLoading={isLoading || isContextLoading} 
        hasFilters={!!(searchTerm || selectedType)}
        setIsLoading={setIsLoading}
      />
      {(isLoading || isContextLoading) && <Loader />}
      <button className="bg-blue-500 text-white p-2 rounded-md fixed bottom-4 right-4" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>TOP</button>
    </div>
  );
}
