import React from 'react';
import { Filter } from 'lucide-react';

interface FiltersProps {
  selectedCategory: string;
  selectedRarity: string;
  onCategoryChange: (category: string) => void;
  onRarityChange: (rarity: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  selectedCategory,
  selectedRarity,
  onCategoryChange,
  onRarityChange
}) => {
  const categories = ['Todos', 'Cuarzo', 'Sulfuro', 'Volcánica', 'Carbonato', 'Metamórfica', 'Silicato', 'Haluro'];
  const rarities = ['Todas', 'común', 'poco común', 'raro', 'muy raro'];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex items-center mb-4">
        <Filter className="w-5 h-5 mr-2 text-gray-600" />
        <h3 className="text-lg font-semibold text-gray-800">Filtros</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Categoría
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rareza
          </label>
          <select
            value={selectedRarity}
            onChange={(e) => onRarityChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {rarities.map((rarity) => (
              <option key={rarity} value={rarity}>
                {rarity === 'Todas' ? 'Todas' : rarity}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;