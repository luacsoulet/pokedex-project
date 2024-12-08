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
import { motion } from "framer-motion";
import { ScrollToTop } from "../../components/ScrollToTop";
import { PageTitle } from "../../components/PageTitle";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";

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

  const { loading } = useInfiniteScroll({
    isLoading,
    isContextLoading,
    searchTerm,
    selectedType,
    pokemonList,
    setPokemonList,
    fetchMore: fetchMorePokemon,
    pageSize: PAGE_SIZE
  });

  return (
    <div className="flex flex-col gap-4 justify-right items-center">
      <PageTitle>Pokédex</PageTitle>
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
        isLoading={loading || isContextLoading} 
        hasFilters={!!(searchTerm || selectedType)}
        setIsLoading={setIsLoading}
      />
      {(loading || isContextLoading) && <Loader />}
      <ScrollToTop />
    </div>
  );
}
