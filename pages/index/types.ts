export interface Pokemon {
  id: number;
  slug: string;
  name: string;
  sprites: {
    shiny: {
      male: string;
      female: string | null;
    };
    normal: {
      male: string;
      female: string | null;
    };
  };
}

export type PokemonList = {
  pokemon: Pokemon[];
};
