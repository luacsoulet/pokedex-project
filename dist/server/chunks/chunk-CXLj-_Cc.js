import { __decorateTelefunction, shield } from "telefunc";
const getTeam = async (teamState) => {
  const team = await Promise.all(teamState.map(async (pokemon) => {
    const headers = {};
    {
      headers.Authorization = `Bearer ${"advanced-pokedex-api-key-9sd1u98cvg4t98yi"}`;
    }
    const actualPokemon = await fetch(`${"https://pokedex.coda.memento-dev.fr"}/pokemon/${pokemon.slug}`, {
      headers
    }).then((res) => res.json());
    return actualPokemon.current;
  }));
  return { team };
};
__decorateTelefunction(getTeam, "getTeam", "/pages/team/TeamList.telefunc.ts", "/Users/lucas/Desktop/Cours/REACT/pokedex-project", true);
shield.type;
export {
  getTeam
};
