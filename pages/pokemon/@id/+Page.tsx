import { useData } from "vike-react/useData";
import type { Data } from "./+data";

export default function Page() {
  const data = useData<Data>();

  if (!data || !data.currentPokemon || !data.currentPokemon.current) {
    return <div>Erreur : Pokémon introuvable ou problème de données.</div>;
  }

  const { current } = data.currentPokemon;

  return (
    <div>
      <h1>{current.name}</h1>
      <div>
        <img src={current.sprites.normal.male} alt={current.name} />
      </div>
      <div>
        <h2>Types</h2>
        <ul>
          {current.types.map((type) => (
            <li key={type.slug}>{type.name}</li>
          ))}
        </ul>
      </div>
      {current.stats && (
        <div>
          <h2>Statistiques</h2>
          <ul>
            {current.stats.map((stat) => (
              <li key={stat.slug}>
                {stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
