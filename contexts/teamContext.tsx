import React, { createContext, useReducer, ReactNode, useContext, Dispatch } from "react";
import { teamReducer, initialState, LocalTeamState, TeamAction } from "../reducers/teamReducer";

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

  return (
    <TeamContext.Provider value={{ state, dispatch }}>
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