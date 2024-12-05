type PokecardProps = {
  name: string;
  image: string | null;
}

export const Pokecard = (props: PokecardProps) => {
  return (
    <div>
      {props.image ? <img src={props.image} alt={props.name} /> : <p>Image non disponible</p>}
      <h2>{props.name}</h2>
    </div>
  );
};
