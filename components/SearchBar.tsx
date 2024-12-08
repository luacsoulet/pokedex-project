import React from 'react';
import type { Type } from '../pages/index/types';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  types: Type[];
  selectedType: string;
  onTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onReset: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  value, 
  onChange, 
  placeholder = "Rechercher un Pokémon",
  types,
  selectedType,
  onTypeChange,
  onReset
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.toLowerCase();
    if (newValue === '') {
      onReset();
    } else {
      onChange(newValue);
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <input 
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg w-[210px] bg-gray-800 text-white placeholder-gray-400"
      />
      {value.length > 0 && (
        <select
          value={selectedType}
          onChange={onTypeChange}
          className="px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg bg-gray-800 text-white"
        >
          <option value="">Type</option>
          {types.map((type, index) => (
            <option key={index} value={type.slug}>
              {type.name}
            </option>
          ))}
        </select>
      )}
      {value.length > 0 && selectedType && (
        <button 
          onClick={onReset}
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors shadow-lg"
        >
          Réinitialiser
        </button>
      )}
    </div>
  );
};
