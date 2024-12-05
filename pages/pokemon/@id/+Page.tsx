import { useData } from "vike-react/useData";
import type { Data } from "./+data";
import { useReducer } from "react";
import { useTeam } from '../../../contexts/teamContext';

export default function Page() {
  const data = useData<Data>();
  const { state, dispatch } = useTeam();
  if (!data || !data.currentPokemon || !data.currentPokemon.current) {
    return <div>Erreur : Pokémon introuvable ou problème de données.</div>;
  }

  const { current } = data.currentPokemon;

  const handleAddToTeam = () => {
    dispatch({ type: 'ADD', payload: { id: current.id, slug: current.slug } });
  }
  
  console.log(state);
  return (
    <div>
      <h1>{current.name}</h1>
      <div>
        <img src={current.sprites.normal.male} alt={current.name} />
      </div>
      <div>
        <h2>Types</h2>
        <ul>
          {current.types.map((type: any) => (
            <li key={type.slug}>{type.name}</li>
          ))}
        </ul>
      </div>
      {current.stats && (
        <div>
          <h2>Statistiques</h2>
          <ul>
            {current.stats.map((stat : any) => (
              <li key={stat.slug}>
                {stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
      )}
      <button onClick={handleAddToTeam}>Ajouter au team</button>
    </div>
  );
}
