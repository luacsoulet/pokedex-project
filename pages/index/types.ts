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
  types?: PokemonType[];
  stats?: {
    name: string;
    slug: string;
    base_stat: number;
  }[];
}
export type PokemonType = {
  name: string;
  slot: number;
  slug: string;
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

export type Type = {
  slug: string;
  name: string;
}

export type Types = Type[]

