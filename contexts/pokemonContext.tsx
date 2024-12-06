import { createContext, Dispatch, SetStateAction, ReactNode, useState, useContext } from "react";
import type { Pokemon } from "../pages/index/types";

interface PokemonContextType {
  pokemonList: Pokemon[];
  setPokemonList: Dispatch<SetStateAction<Pokemon[]>>;
  isContextLoading: boolean;
  setIsContextLoading: Dispatch<SetStateAction<boolean>>;
}

export const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

interface PokemonProviderProps {
  children: ReactNode;
  initialPokemonList?: Pokemon[];
}

export function PokemonProvider({ children, initialPokemonList = [] }: PokemonProviderProps) {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>(initialPokemonList);
  const [isContextLoading, setIsContextLoading] = useState<boolean>(false);

  return (
    <PokemonContext.Provider value={{ 
      pokemonList, 
      setPokemonList, 
      isContextLoading, 
      setIsContextLoading 
    }}>
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemonContext() {
  const context = useContext(PokemonContext);
  if (context === undefined) {
    throw new Error('usePokemonContext must be used within a PokemonProvider');
  }
  return context;
}