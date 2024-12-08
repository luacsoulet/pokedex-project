import type { Pokemon } from "../pages/index/types";
import { Pokecard } from "./Pokecard";
import { useTeam } from "../contexts/teamContext";
import { Loader } from "./Loader";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface GalleryProps {
  data: Pokemon[] | { pokemonList: Pokemon[] };
  isLoading: boolean;
  hasFilters?: boolean;
  setIsLoading: (loading: boolean) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ 
  data, 
  isLoading, 
  hasFilters = false, 
  setIsLoading,
}) => {
  const { dispatch } = useTeam();
  const pokemonList = Array.isArray(data) ? data : data?.pokemonList || [];

  const handleAddToTeam = (pokemon: Pokemon) => {
    dispatch({ 
      type: 'ADD', 
      payload: { 
        id: pokemon.id, 
        slug: pokemon.slug, 
        isShiny: false,
        isFemale: false
      } 
    });
  };

  return (
    <div className="flex justify-center w-[80vw]">
      {isLoading && pokemonList.length === 0 ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap gap-4 w-full justify-center">
          {pokemonList?.length > 0 ? (
            pokemonList.map((pokemon: Pokemon, index: number) => (
              pokemon && pokemon.id && (
                <div key={index} className="relative">
                  <a href={`/pokemon/${pokemon.slug}`}>
                    <Pokecard 
                      name={pokemon.name} 
                      image={pokemon.sprites?.normal?.male} 
                      id={pokemon.id}
                      slug={pokemon.slug}
                    />
                  </a>
                  <motion.button 
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToTeam(pokemon);
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg leading-none shadow-lg hover:bg-blue-500 transition-colors z-10"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </motion.button>
                </div>
              )
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      )}
    </div>
  );
};