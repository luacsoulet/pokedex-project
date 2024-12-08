import { useTeam } from "../../contexts/teamContext";
import { getTeam } from "./TeamList.telefunc";
import type { Pokemon } from "../index/types";
import { useState, useEffect } from "react";
import { Pokecard } from "../../components/Pokecard";
import { Stats } from "../../components/Stats";
export function Page() {
  const { state, dispatch } = useTeam();
  const [team, setTeam] = useState<Pokemon[]>([]);
  const [teamStats, setTeamStats] = useState<{ [key: string]: number[] }>({});

  useEffect(() => {
    const fetchTeam = async () => {
      if (state.team && state.team.length > 0) {
        const { team: fetchedTeam } = await getTeam(state.team);
        setTeam(fetchedTeam);

        // Initialiser teamStats
        const initialStats: { [key: string]: number[] } = {};
        if (fetchedTeam.length > 0) {
          fetchedTeam[0].stats.forEach((stat: any) => {
            initialStats[stat.name] = [];
          });
        }

        // Accumuler les stats de chaque Pokémon
        fetchedTeam.forEach(pokemon => {
          pokemon.stats.forEach((stat: any) => {
            if (initialStats[stat.name]) {
              initialStats[stat.name].push(stat.base_stat);
            }
          });
        });

        setTeamStats(initialStats);
      } else {
        setTeam([]);
        setTeamStats({});
      }
    };

    fetchTeam();
  }, [state.team]);

  console.log(teamStats);

  const handleDelete = (indexToDelete: number) => {
    dispatch({ type: 'DELETE', payload: indexToDelete });
  };

  return (
    <div>
      <h1>Mon équipe</h1>
      <div className="flex flex-wrap gap-4">
        {team.map((pokemon: Pokemon, index: number) => {
          const teamMember = state.team[index];
          if (!teamMember) return null;

          return (
            <Pokecard 
              key={index} 
              id={pokemon.id}
              name={pokemon.name} 
              image={teamMember.isShiny && teamMember.isFemale
                ? (pokemon.sprites.shiny?.female ?? pokemon.sprites.shiny?.male ?? pokemon.sprites.normal.male)
                : teamMember.isShiny
                ? (pokemon.sprites.shiny?.male ?? pokemon.sprites.normal.male)
                : teamMember.isFemale
                ? (pokemon.sprites.normal.female ?? pokemon.sprites.normal.male)
                : pokemon.sprites.normal.male
              }
              onDelete={() => handleDelete(index)}
            />
          );
        })}
      </div>
      <div>
        <Stats stats={teamStats} />
      </div>
    </div>
  );
}
