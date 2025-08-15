import React from 'react';
import { useCart } from '../contexts/CartContext';
import { ShoppingCart, Mountain } from 'lucide-react';

interface HeaderProps {
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Mountain className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">RockShop</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Inicio</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Catálogo</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Sobre Nosotros</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contacto</a>
          </nav>

          <button
            onClick={onCartClick}
            className="relative p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;