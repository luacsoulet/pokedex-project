import React from 'react';
import { motion } from 'framer-motion';
import type { Type } from '../pages/index/types';

interface EnergyProps {
  type: Type;
  count?: number;
  size?: 'sm' | 'md' | 'lg';
}

export const typesWithColor = [
  { name: "Acier", slug: "steel", color: "#BDC1D2" },
  { name: "Combat", slug: "fighting", color: "#F87D79" },
  { name: "Dragon", slug: "dragon", colors: ["#72A1F1","#EB706A"] },
  { name: "Eau", slug: "water", color: "#72A1F1" },
  { name: "Électrik", slug: "electric", color: "#DDE122" },
  { name: "Fée", slug: "fairy", color: "#EE99AC" },
  { name: "Feu", slug: "fire", color: "#F79C34" },
  { name: "Glace", slug: "ice", color: "#0CDFD3" },
  { name: "Insecte", slug: "bug", color: "#A3D08D" },
  { name: "Normal", slug: "normal", color: "#BBC0AE" },
  { name: "Plante", slug: "grass", color: "#95EB85" },
  { name: "Poison", slug: "poison", color: "#E598F5" },
  { name: "Psy", slug: "psychic", color: "#FE42AD" },
  { name: "Roche", slug: "rock", color: "#CBA855" },
  { name: "Sol", slug: "ground", colors: ["#E3DB1D", "#CBA855"] },
  { name: "Spectre", slug: "ghost", color: "#AE7EF2" },
  { name: "Ténèbres", slug: "dark", color: "#96938F" },
  { name: "Vol", slug: "flying", colors: ["#54CFEA", "#BABFAB"] }
];

// Ajoutons une fonction de correspondance des noms
const getTypeSlug = (typeName: string): string => {
  const typeMap: { [key: string]: string } = {
    "Acier": "steel",
    "Combat": "fighting",
    "Dragon": "dragon",
    "Eau": "water",
    "Électrik": "electric",
    "Fée": "fairy",
    "Feu": "fire",
    "Glace": "ice",
    "Insecte": "bug",
    "Normal": "normal",
    "Plante": "grass",
    "Poison": "poison",
    "Psy": "psychic",
    "Roche": "rock",
    "Sol": "ground",
    "Spectre": "ghost",
    "Ténèbres": "dark",
    "Vol": "flying"
  };

  return typeMap[typeName] || typeName.toLowerCase();
};

export const Energy: React.FC<EnergyProps> = ({ type, count, size = 'md' }) => {
  const typeStyle = typesWithColor.find(t => t.slug === type.slug);
  
  const sizeClasses = {
    sm: 'w-20 h-8 text-xs',
    md: 'w-24 h-10 text-sm',
    lg: 'w-28 h-12 text-base'
  };

  return (
    <div className="flex items-center gap-2">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`${sizeClasses[size]} relative overflow-hidden rounded-xl flex items-center justify-center backdrop-blur-sm`}
        style={{ 
          background: typeStyle?.colors?.[0] || typeStyle?.color || '#gray-200'
        }}
      >
        {typeStyle?.colors && (
          <div 
            className="absolute bottom-0 left-0 right-0 h-1/2" 
            style={{ 
              background: typeStyle.colors[1]
            }}
          />
        )}
        <span className="font-bold z-10 text-white/90">
          {type.name}
        </span>
      </motion.div>

      {count !== undefined && (
        <motion.div 
          className="h-6 px-2 bg-gray-700/80 rounded-lg flex items-center justify-center shadow-inner"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <span className="font-mono font-bold text-sm text-gray-300">×{count}</span>
        </motion.div>
      )}
    </div>
  );
};

// Export du tableau des types pour réutilisation
export { typesWithColor as TypesWithColor };

// Exportons aussi la fonction pour l'utiliser ailleurs
export { getTypeSlug };
