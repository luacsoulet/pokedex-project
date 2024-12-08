import { useTeam } from "../contexts/teamContext";

export const TeamCounter = () => {
  const { state } = useTeam();
  const MAX_TEAM_SIZE = 6;

  return (
    <div className="mt-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
      <div className="text-xs text-gray-400 mb-1">Équipe</div>
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 text-transparent bg-clip-text">
          {state.team.length}
        </span>
        <span className="text-gray-500">/</span>
        <span className="text-gray-400">
          {MAX_TEAM_SIZE}
        </span>
      </div>
    </div>
  );
}; 