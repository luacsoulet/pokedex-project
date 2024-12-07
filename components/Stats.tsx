import { Pokemon } from "../pages/index/types";

type StatsProps = {
  stats: { [key: string]: number[] };
};

export const Stats = ({ stats }: StatsProps) => {
  const calculateAverage = (values: number[]): number => {
    if (values.length === 0) return 0;
    const sum = values.reduce((acc, val) => acc + val, 0);
    return Math.round(sum / values.length);
  };

  const statsWithAverages = Object.entries(stats).map(([statName, values]) => ({
    name: statName,
    values: values,
    average: calculateAverage(values)
  }));

  return (
    <div>
      {statsWithAverages.map(({ name, values, average }, index) => (
        <div key={index}>
          <strong>{name}:</strong> {values.join(', ')} 
          <strong> | Moyenne: {average}</strong>
        </div>
      ))}
    </div>
  );
};
