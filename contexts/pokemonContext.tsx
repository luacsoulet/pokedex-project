import { createContext, Dispatch, SetStateAction, ReactNode, useState, useContext } from "react";
import type { Pokemon } from "../pages/index/types";

interface PokemonContextType {
  pokemonList: Pokemon[];
  setPokemonList: Dispatch<SetStateAction<Pokemon[]>>;
}

export const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

interface PokemonProviderProps {
  children: ReactNode;
  initialPokemonList?: Pokemon[];
}

export function PokemonProvider({ children, initialPokemonList = [] }: PokemonProviderProps) {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>(initialPokemonList);

  return (
    <PokemonContext.Provider value={{ pokemonList, setPokemonList }}>
      {children}
    </PokemonContext.Provider>
  );
}

// Hook personnalisé pour utiliser le contexte
export function usePokemonContext() {
  const context = useContext(PokemonContext);
  if (context === undefined) {
    throw new Error('usePokemonContext must be used within a PokemonProvider');
  }
  return context;
}