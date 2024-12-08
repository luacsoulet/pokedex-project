import { useData } from "vike-react/useData";
import { useState } from 'react';
import type { Data } from "./+data";
import { useTeam } from '../../../contexts/teamContext';
import { typesWithColor } from "../../../components/Energy";

export default function Page() {
  const data = useData<Data>();
  const { state, dispatch } = useTeam();
  console.log(data);
  const { current } = data.currentPokemon;
  const [selectedSprite, setSelectedSprite] = useState(current.sprites.normal.male);
  
  if (!data || !data.currentPokemon || !data.currentPokemon.current) {
    return <div>Erreur : Pokémon introuvable ou problème de données.</div>;
  }


  const handleAddToTeam = () => {
    const isSelectedSpriteFemale = selectedSprite === current.sprites.normal.female || selectedSprite === current.sprites.shiny?.female;
    
    dispatch({ 
      type: 'ADD', 
      payload: { 
        id: current.id, 
        slug: current.slug, 
        isShiny: selectedSprite === current.sprites.shiny?.male || selectedSprite === current.sprites.shiny?.female,
        isFemale: isSelectedSpriteFemale
      } 
    });
  }

  const spriteButtons = [
    { type: 'normal', gender: 'male', label: 'Normal ♂️', sprite: current.sprites?.normal?.male },
    { type: 'normal', gender: 'female', label: 'Normal ♀️', sprite: current.sprites?.normal?.female },
    { type: 'shiny', gender: 'male', label: 'Shiny ♂️', sprite: current.sprites?.shiny?.male },
    { type: 'shiny', gender: 'female', label: 'Shiny ♀️', sprite: current.sprites?.shiny?.female },
  ];
  
  console.log(state);

  const getTypeColor = (type: { slug: string }) => {
    const typeStyle = typesWithColor.find(t => t.slug === type.slug.toLowerCase());
    return typeStyle?.colors?.[0] || typeStyle?.color || '#4A5568';
  };

  return (
    <div className="p-8 rounded-lg bg-gray-800/50 backdrop-blur-sm shadow-xl max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">{current.name}</h1>
      <div>
        <img 
          src={selectedSprite} 
          alt={current.name} 
          className="mx-auto mb-4 h-64 object-contain [image-rendering:pixelated]" 
        />
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          {spriteButtons.map(({ type, gender, label, sprite }) => (
            sprite && (
              <button
                key={`${type}-${gender}`}
                onClick={() => setSelectedSprite(sprite)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedSprite === sprite 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                }`}
              >
                {label}
              </button>
            )
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-200">Types</h2>
        <ul className="flex gap-2">
          {current.types.map((type: any) => (
            <li 
              key={type.slug} 
              className="px-4 py-2 rounded-lg text-white"
              style={{ backgroundColor: getTypeColor(type) }}
            >
              {type.name}
            </li>
          ))}
        </ul>
      </div>
      {current.stats && (
        <div>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-200">Statistiques</h2>
          <ul className="grid grid-cols-2 gap-4">
            {current.stats.map((stat : any) => (
              <li key={stat.slug} className="flex justify-between items-center p-4 bg-gray-700 rounded-lg">
                <span className="text-gray-300">{stat.name}</span>
                <span className="text-blue-400 font-semibold">{stat.base_stat}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button 
        onClick={handleAddToTeam}
        className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors shadow-lg w-full"
      >
        Ajouter au team
      </button>
    </div>
  );
}
