import React from "react";
import type { Data } from "./+data";
import { useData } from "vike-react/useData";
import { Gallery } from "../../components/Gallery";
import type { Pokemon } from "./types";
import { useState, useEffect, useContext, useCallback } from "react";
import { SearchPokemon, getTypes, fetchMorePokemon } from "./SearchPokemon.telefunc";
import type { Type, Types } from "./types";
import { usePokemonContext } from "../../contexts/pokemonContext";

export default function Page() {
  const data = useData<Data>();
  const { pokemonList, setPokemonList } = usePokemonContext();
  const [filteredData, setFilteredData] = useState<Pokemon[]>([]);
  const [types, setTypes] = useState<Type[]>([]);
  const [selectedType, setSelectedType] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [offset, setOffset] = useState<number>(0);
  const PAGE_SIZE = 20;

  // Initialisation du contexte et des données filtrées avec les données initiales
  useEffect(() => {
    if (data.pokemonList) {
      setPokemonList(data.pokemonList);
      setFilteredData(data.pokemonList);
    }
  }, [data.pokemonList]);

  // Effet pour gérer la recherche et le filtrage
  useEffect(() => {
    const searchAndFilter = async () => {
      setIsLoading(true);
      try {
        if (searchTerm) {
          // Obtenir les résultats de recherche
          const searchResults = await SearchPokemon(searchTerm);
          
          // Appliquer le filtre par type si nécessaire
          if (selectedType && selectedType !== 'Select a type') {
            setFilteredData(searchResults.filter((pokemon: Pokemon) => 
              pokemon.types?.some(type => type.slug === selectedType)
            ));
          } else {
            setFilteredData(searchResults);
          }
        } else {
          // Si pas de searchTerm, revenir aux données du contexte
          setFilteredData([]);
        }
      } catch (error) {
        console.error("Erreur lors de la recherche ou du filtrage:", error);
        setFilteredData([]);
      } finally {
        setIsLoading(false);
      }
    };

    searchAndFilter();
  }, [searchTerm, selectedType]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value.toLowerCase();
    setSearchTerm(newSearchTerm);
    setSelectedType('');
    setOffset(0);
  }

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
  };

  useEffect(() => {
    getTypes().then((types: Types) => setTypes(types));
  }, []);
  console.log(types);

  const resetFilters = () => {
    setSelectedType('');
    setFilteredData(data.pokemonList);
  }

  // Fonction pour détecter quand on approche de la fin de la liste
  const handleScroll = useCallback(async () => {
    if (isLoading || searchTerm || selectedType) return; // Ne pas charger plus si une recherche ou un filtre est actif

    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollHeight - scrollTop - clientHeight <= 200) {
      setIsLoading(true);
      try {
        const newOffset = offset + PAGE_SIZE;
        const newPokemon = await fetchMorePokemon(newOffset, PAGE_SIZE);
        
        setPokemonList(prevList => [...prevList, ...newPokemon]);
        setOffset(newOffset);
      } catch (error) {
        console.error("Erreur lors du chargement des pokémon supplémentaires:", error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [offset, isLoading, searchTerm, selectedType]);

  // Ajouter l'event listener pour le scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

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
        isLoading={isLoading} 
        hasFilters={!!(searchTerm || selectedType)}
        setIsLoading={setIsLoading}
      />
    </div>
  );
}
