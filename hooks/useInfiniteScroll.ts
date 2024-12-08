import { useState, useEffect, useCallback } from 'react';
import type { Pokemon } from '../pages/index/types';

interface UseInfiniteScrollProps {
  isLoading: boolean;
  isContextLoading: boolean;
  searchTerm: string;
  selectedType: string;
  pokemonList: Pokemon[];
  setPokemonList: React.Dispatch<React.SetStateAction<Pokemon[]>>;
  fetchMore: (start: number, limit: number) => Promise<Pokemon[]>;
  pageSize: number;
  maxItems?: number;
}

export const useInfiniteScroll = ({
  isLoading,
  isContextLoading,
  searchTerm,
  selectedType,
  pokemonList,
  setPokemonList,
  fetchMore,
  pageSize,
  maxItems = 1024
}: UseInfiniteScrollProps) => {
  const [loading, setLoading] = useState(isLoading);

  const handleScroll = useCallback(async () => {
    if (
      loading || 
      isContextLoading || 
      searchTerm || 
      selectedType || 
      pokemonList.length >= maxItems
    ) {
      return;
    }

    const container = document.getElementById('page-container');
    if (!container) return;

    const { scrollHeight, scrollTop, clientHeight } = container;

    if (scrollHeight - scrollTop - clientHeight <= 200) {
      setLoading(true);
      
      try {
        const currentLength = pokemonList.length;
        const newPokemon = await fetchMore(currentLength + 1, pageSize);
        
        if (newPokemon?.length > 0) {
          setPokemonList((prevList: Pokemon[]) => {
            const newList = [...prevList];
            newPokemon.forEach((pokemon: Pokemon) => {
              if (!newList.some(p => p.id === pokemon.id)) {
                newList.push(pokemon);
              }
            });
            return newList;
          });
        }
      } catch (error) {
        console.error("Erreur lors du chargement:", error);
      } finally {
        setLoading(false);
      }
    }
  }, [loading, isContextLoading, searchTerm, selectedType, pokemonList.length]);

  useEffect(() => {
    const container = document.getElementById('page-container');
    if (!container) return;

    const onScroll = () => {
      if (!loading && !isContextLoading) {
        handleScroll();
      }
    };

    container.addEventListener('scroll', onScroll);
    return () => container.removeEventListener('scroll', onScroll);
  }, [handleScroll, loading, isContextLoading]);

  return { loading };
}; 