import { useTeam } from "../../contexts/teamContext";
import { getTeam } from "./TeamList.telefunc";
import type { Pokemon } from "../index/types";
import { useState, useEffect } from "react";
import { Pokecard } from "../../components/Pokecard";

export function Page() {
  const { state, dispatch } = useTeam();
  const [team, setTeam] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchTeam = async () => {
      if (state.team && state.team.length > 0) {
        const { team: fetchedTeam } = await getTeam(state.team);
        setTeam(fetchedTeam);
      } else {
        setTeam([]);
      }
    };

    fetchTeam();
  }, [state.team]);

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
    </div>
  );
}
