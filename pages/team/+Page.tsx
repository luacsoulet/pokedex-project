import { useTeam } from "../../contexts/teamContext";
import { getTeam } from "./TeamList.telefunc";
import type { Pokemon } from "../index/types";
import { useState, useEffect } from "react";
import { Pokecard } from "../../components/Pokecard";
export function Page() {
  const { state } = useTeam();
  const [team, setTeam] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchTeam = async () => {
      const { team: fetchedTeam } = await getTeam(state.team);
      setTeam(fetchedTeam);
    };

    fetchTeam();
    console.log(team);
  }, [state.team]);


  return (
    <div>
      <h1>Mon équipe</h1>
      {team.map((pokemon: Pokemon, index: number) => (
        <Pokecard key={index} name={pokemon.name} image={pokemon.sprites.normal.male} />
      ))}
    </div>
  );
}
