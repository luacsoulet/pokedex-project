import React, { createContext, useReducer, ReactNode } from 'react';
// Types pour TypeScript
interface Pokemon {
  id: number;
  slug: string;
}

interface TeamState {
  team: Pokemon[];
}

export const teamReducer = (state: TeamState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case 'ADD':
      if (state.team.length >= 6) {
        return state;
      }
      return {
        ...state,
        team: [...state.team, {
          id: action.payload.id,
          slug: action.payload.slug
        }]
      };

    case 'DELETE':
      return {
        ...state,
        team: state.team.filter((pokemon) => pokemon.id !== action.payload)
      };

    default:
      return state;
  }
}

export const initialeTaskState: TeamState = {
  team: []
};

// Modifiez l'export du contexte pour être par défaut
export const TeamContext = createContext<{
  state: TeamState;
  dispatch: React.Dispatch<{ type: string; payload: any }>;
} | undefined>(undefined);

// Exportez le Provider comme composant nommé
export const TeamProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(teamReducer, initialeTaskState);

  return (
    <TeamContext.Provider value={{ state, dispatch }}>
      {children}
    </TeamContext.Provider>
  );
};

// Ajoutez un export par défaut pour le contexte
export default TeamContext;