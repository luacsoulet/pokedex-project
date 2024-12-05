export interface Pokemon {
  id: number;
  slug: string;
  name: string;
  sprites: {
    shiny?: {
      male: string;
      female: string | null;
    };
    normal: {
      male: string;
      female: string | null;
    };
  };
  types?: {
    name: string;
    slot: number;
    slug: string;
  }[];
  stats?: {
    name: string;
    slug: string;
    base_stat: number;
  }[];
}

export type PokemonList = {
  pokemon: Pokemon[];
};

export type ResearchPokemon = {
  previous: Pokemon;
  current: Pokemon;
  next: Pokemon;
};

export type PokemonId = {
  id: number;
  slug: string;
  isShiny?: boolean;
};
