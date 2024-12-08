import React, { createContext, useReducer, ReactNode, useContext, Dispatch } from "react";
import { teamReducer, initialState, LocalTeamState, TeamAction } from "../reducers/teamReducer";
import { toast } from 'react-hot-toast';

// Context Type
interface TeamContextType {
  state: LocalTeamState;
  dispatch: Dispatch<TeamAction>;
}

// Create Context
const TeamContext = createContext<TeamContextType | undefined>(undefined);

// Provider
export const TeamProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(teamReducer, initialState);

  const enhancedDispatch = (action: TeamAction) => {
    const MAX_TEAM_SIZE = 6;

    switch (action.type) {
      case 'ADD':
        if (state.team.length >= MAX_TEAM_SIZE) {
          toast.error('Votre équipe est déjà complète !', {
            icon: '🚫',
            duration: 3000,
            style: {
              background: '#164e63',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.1)'
            }
          });
          return;
        }
        toast.success('Pokémon ajouté à l\'équipe !', {
          icon: '✨',
          duration: 2000,
          style: {
            background: '#164e63',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.1)'
          }
        });
        break;
      case 'DELETE':
        toast.success('Pokémon retiré de l\'équipe', {
          icon: '👋',
          duration: 2000,
        });
        break;
    }
    dispatch(action);
  };

  return (
    <TeamContext.Provider value={{ state, dispatch: enhancedDispatch }}>
      {children}
    </TeamContext.Provider>
  );
};

// Custom Hook
export const useTeam = (): TeamContextType => {
  const context = useContext(TeamContext);
  if (!context) {
    throw new Error("useTeam must be used within a TeamProvider");
  }
  return context;
};

export default TeamContext;