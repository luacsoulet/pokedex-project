import { useTeam } from "../../contexts/teamContext";
import { getTeam } from "./TeamList.telefunc";
import type { Pokemon } from "../index/types";
import { useState, useEffect } from "react";
import { Pokecard } from "../../components/Pokecard";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { TeamStats } from "../../components/TeamStats";

export function Page() {
  const { state, dispatch } = useTeam();
  const [team, setTeam] = useState<Pokemon[]>([]);
  const [teamStats, setTeamStats] = useState<{ [key: string]: number }>({});
  const [typeCount, setTypeCount] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const calculateTeamStats = (fetchedTeam: Pokemon[]) => {
      const stats: { [key: string]: number[] } = {};
      const types: { [key: string]: number } = {};

      fetchedTeam.forEach(pokemon => {
        if (!pokemon.types) return;
        pokemon.types.forEach((type: { name: string }) => {
          types[type.name] = (types[type.name] || 0) + 1;
        });

        if (!pokemon.stats) return;
        pokemon.stats.forEach((stat: { name: string, base_stat: number }) => {
          if (!stats[stat.name]) stats[stat.name] = [];
          stats[stat.name].push(stat.base_stat);
        });
      });

      const averages = Object.entries(stats).reduce((acc, [name, values]) => {
        acc[name] = Math.round(values.reduce((a, b) => a + b, 0) / values.length);
        return acc;
      }, {} as { [key: string]: number });

      setTeamStats(averages);
      setTypeCount(types);
    };

    const fetchTeam = async () => {
      if (state.team && state.team.length > 0) {
        const { team: fetchedTeam } = await getTeam(state.team);
        setTeam(fetchedTeam);
        calculateTeamStats(fetchedTeam);
      } else {
        setTeam([]);
        setTeamStats({});
        setTypeCount({});
      }
    };

    fetchTeam();
  }, [state.team]);

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-2rem)] w-full">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-4xl font-bold text-center my-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60"
      >
        Mon équipe Pokémon
      </motion.h1>

      <div className="w-full max-w-7xl px-4 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 place-items-center w-full max-w-5xl">
          {Array(6).fill(null).map((_, slot) => {
            const pokemon = team[slot];
            const teamMember = state.team[slot];

            if (!pokemon || !teamMember) {
              return (
                <motion.div 
                  key={`empty-${slot}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: slot * 0.1 }}
                  className={`relative w-[200px] min-h-[240px] rounded-xl border-2 border-dashed border-gray-700/50 flex flex-col items-center justify-center gap-4 bg-gray-800/20 backdrop-blur-sm`}
                >
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-gray-700/50 flex items-center justify-center">
                    <span className="text-3xl text-gray-700">?</span>
                  </div>
                  <span className="text-gray-500 text-sm">Emplacement {slot + 1}</span>
                </motion.div>
              );
            }

            const spriteToShow = teamMember.isShiny && teamMember.isFemale
              ? pokemon.sprites.shiny?.female ?? pokemon.sprites.shiny?.male ?? pokemon.sprites.normal.male
              : teamMember.isShiny
              ? pokemon.sprites.shiny?.male ?? pokemon.sprites.normal.male
              : teamMember.isFemale
              ? pokemon.sprites.normal.female ?? pokemon.sprites.normal.male
              : pokemon.sprites.normal.male;

            return (
              <motion.div 
                key={slot} 
                className="relative flex justify-center w-[200px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: slot * 0.1 }}
              >
                <div className="relative w-full">
                  <Pokecard 
                    id={pokemon.id}
                    name={pokemon.name} 
                    image={spriteToShow}
                  />
                  <motion.button 
                    onClick={() => dispatch({ type: 'DELETE', payload: slot })}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="absolute -top-3 -right-3 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-lg leading-none shadow-lg hover:bg-red-500 transition-colors z-10"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {team.length > 0 && (
          <div className="w-full max-w-3xl">
            <TeamStats typeCount={typeCount} teamStats={teamStats} />
          </div>
        )}
      </div>
    </div>
  );
}
