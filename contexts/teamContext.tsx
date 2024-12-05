import { createContext, useContext, useReducer, ReactNode } from 'react';

// Types
interface Pokemon {
  id: number;
  slug: string;
}

interface TeamState {
  team: Pokemon[];
}

interface TeamContextType {
  state: TeamState;
  dispatch: React.Dispatch<{ type: string; payload: any }>;
}

// Reducer
const teamReducer = (state: TeamState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case 'ADD':
      if (state.team.length >= 6) return state;
      return {
        ...state,
        team: [...state.team, { id: action.payload.id, slug: action.payload.slug }]
      };
    case 'DELETE':
      return {
        ...state,
        team: state.team.filter((pokemon) => pokemon.id !== action.payload)
      };
    default:
      return state;
  }
};

// État initial
const initialState: TeamState = {
  team: []
};

// Contexte
const TeamContext = createContext<TeamContextType | undefined>(undefined);

// Provider
export function TeamProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(teamReducer, initialState);
  return (
    <TeamContext.Provider value={{ state, dispatch }}>
      {children}
    </TeamContext.Provider>
  );
}

// Hook personnalisé
export function useTeam() {
  const context = useContext(TeamContext);
  if (!context) {
    throw new Error('useTeam doit être utilisé dans un TeamProvider');
  }
  return context;
}
