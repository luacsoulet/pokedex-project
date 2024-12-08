import { motion } from "framer-motion";
import { Energy, getTypeSlug } from "./Energy";

type StatsCardProps = {
  title: string;
  children: React.ReactNode;
  delay?: number;
}

const StatsCard = ({ title, children, delay = 0 }: StatsCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="relative p-6 bg-white/5 rounded-xl backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
  >
    <div className="absolute -top-3 left-4 px-2 py-1 bg-teal-600/90 rounded-md backdrop-blur-sm">
      <h2 className="text-sm font-bold text-white uppercase tracking-wider">{title}</h2>
    </div>
    <div className="pt-2">
      {children}
    </div>
  </motion.div>
);

type TeamStatsProps = {
  typeCount: { [key: string]: number };
  teamStats: { [key: string]: number };
}

export const TeamStats = ({ typeCount, teamStats }: TeamStatsProps) => (
  <div className="space-y-6 w-full max-w-3xl mx-auto">
    <StatsCard title="Types">
      <div className="flex flex-wrap gap-3">
        {Object.entries(typeCount).map(([typeName, count]) => {
          const typeInfo = { 
            name: typeName, 
            slug: getTypeSlug(typeName)
          };
          return (
            <Energy 
              key={typeName}
              type={typeInfo}
              count={count}
              size="sm"
            />
          );
        })}
      </div>
    </StatsCard>

    <StatsCard title="Stats moyennes" delay={0.1}>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Object.entries(teamStats).map(([stat, value]) => (
          <div 
            key={stat} 
            className="p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <div className="text-gray-300 text-xs uppercase tracking-wider mb-1">{stat}</div>
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 text-transparent bg-clip-text">
              {value}
            </div>
          </div>
        ))}
      </div>
    </StatsCard>
  </div>
); 