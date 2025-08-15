import React from 'react';
import { Rock } from '../types/rock';
import { useCart } from '../contexts/CartContext';
import { ShoppingCart, Star } from 'lucide-react';

interface RockCardProps {
  rock: Rock;
}

const RockCard: React.FC<RockCardProps> = ({ rock }) => {
  const { addToCart } = useCart();

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'común': return 'text-green-600 bg-green-100';
      case 'poco común': return 'text-blue-600 bg-blue-100';
      case 'raro': return 'text-purple-600 bg-purple-100';
      case 'muy raro': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const handleAddToCart = () => {
    if (rock.inStock) {
      addToCart(rock);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={rock.image}
          alt={rock.name}
          className="w-full h-48 object-cover"
        />
        <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${getRarityColor(rock.rarity)}`}>
          {rock.rarity}
        </div>
        {!rock.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Agotado</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{rock.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{rock.description}</p>
        
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">Origen: {rock.origin}</span>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span className="text-sm text-gray-600">Dureza: {rock.hardness}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-green-600">${rock.price}</span>
          <button
            onClick={handleAddToCart}
            disabled={!rock.inStock}
            className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
              rock.inStock
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {rock.inStock ? 'Agregar' : 'Agotado'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RockCard;