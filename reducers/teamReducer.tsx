import React, { createContext, useReducer, ReactNode } from 'react';
import { PokemonId } from '../pages/index/types';

export interface LocalTeamState {
  team: PokemonId[];
}

export interface TeamAction {
  type: "ADD" | "DELETE";
  payload: any;
}

// Initial State
export const initialState: LocalTeamState = {
  team: [],
};

// Reducer
export const teamReducer = (state: LocalTeamState, action: TeamAction): LocalTeamState => {
  switch (action.type) {
    case "ADD":
      if (state.team.length >= 6) return state;
      return {
        ...state,
        team: [...state.team, { 
          id: action.payload.id, 
          slug: action.payload.slug,
          isShiny: Boolean(action.payload.isShiny),
          isFemale: Boolean(action.payload.isFemale)
        }],
      };
    case "DELETE":
      return {
        ...state,
        team: state.team.filter((_, index) => index !== action.payload)
      };
    default:
      return state;
  }
};