import React from 'react';
import { motion } from 'framer-motion';
import type { Type } from '../pages/index/types';

interface EnergyProps {
  type: Type;
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

export const Energy: React.FC<EnergyProps> = ({ type }) => {
  const typeStyle = typesWithColor.find(t => t.slug === type.slug);

  return (
    <motion.div
      className="w-24 h-10 flex items-center justify-center relative overflow-hidden rounded-lg"
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
      <span className="font-bold text-sm z-10 text-white">
        {type.name}
      </span>
    </motion.div>
  );
};

// Export du tableau des types pour réutilisation
export { typesWithColor as TypesWithColor };
