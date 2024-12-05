import { useTeam } from "../../contexts/teamContext";
import { PokemonId } from "../index/types";

export const Page = () => {
  const { state } = useTeam();
  return (
    <div>
      <h1>My Team</h1>
      {state.team.map((pokemon: PokemonId, index: number) => (
        <div key={index}>{pokemon.slug}</div>
      ))}
    </div>
  );
};
