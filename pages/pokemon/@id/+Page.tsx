import { useData } from "vike-react/useData";
import { useState } from 'react';
import type { Data } from "./+data";
import { useTeam } from '../../../contexts/teamContext';

export default function Page() {
  const data = useData<Data>();
  const { state, dispatch } = useTeam();
  const { current } = data.currentPokemon;
  const [selectedSprite, setSelectedSprite] = useState(current.sprites.normal.male);
  
  if (!data || !data.currentPokemon || !data.currentPokemon.current) {
    return <div>Erreur : Pokémon introuvable ou problème de données.</div>;
  }


  const handleAddToTeam = () => {
    dispatch({ type: 'ADD', payload: { id: current.id, slug: current.slug, isShiny: selectedSprite === current.sprites.shiny.male || selectedSprite === current.sprites.shiny.female } });
  }

  const spriteButtons = [
    { type: 'normal', gender: 'male', label: 'Normal ♂️', sprite: current.sprites?.normal?.male },
    { type: 'normal', gender: 'female', label: 'Normal ♀️', sprite: current.sprites?.normal?.female },
    { type: 'shiny', gender: 'male', label: 'Shiny ♂️', sprite: current.sprites?.shiny?.male },
    { type: 'shiny', gender: 'female', label: 'Shiny ♀️', sprite: current.sprites?.shiny?.female },
  ];
  
  console.log(state);
  return (
    <div>
      <h1>{current.name}</h1>
      <div>
        <img src={selectedSprite} alt={current.name} />
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          {spriteButtons.map(({ type, gender, label, sprite }) => (
            sprite && (
              <button
                key={`${type}-${gender}`}
                onClick={() => setSelectedSprite(sprite)}
                style={{
                  backgroundColor: selectedSprite === sprite ? '#4CAF50' : '#f0f0f0',
                  color: selectedSprite === sprite ? 'white' : 'black',
                  padding: '5px 10px',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                {label}
              </button>
            )
          ))}
        </div>
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
