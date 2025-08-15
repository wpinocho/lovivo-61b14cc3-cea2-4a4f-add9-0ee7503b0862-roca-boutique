import React, { useState, useMemo } from 'react';
import { CartProvider } from '../contexts/CartContext';
import Header from '../components/Header';
import RockCard from '../components/RockCard';
import Cart from '../components/Cart';
import Filters from '../components/Filters';
import { rocks } from '../data/rocks';
import { Mountain, Gem, Shield, Star } from 'lucide-react';

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedRarity, setSelectedRarity] = useState('Todas');

  console.log('Index component rendered');
  console.log('Total rocks available:', rocks.length);

  const filteredRocks = useMemo(() => {
    return rocks.filter(rock => {
      const categoryMatch = selectedCategory === 'Todos' || rock.category === selectedCategory;
      const rarityMatch = selectedRarity === 'Todas' || rock.rarity === selectedRarity;
      return categoryMatch && rarityMatch;
    });
  }, [selectedCategory, selectedRarity]);

  console.log('Filtered rocks:', filteredRocks.length);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header onCartClick={() => setIsCartOpen(true)} />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Descubre el Mundo de las Rocas
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Colección premium de minerales y piedras preciosas
            </p>
            <div className="flex justify-center items-center space-x-8 mt-12">
              <div className="flex items-center">
                <Gem className="w-8 h-8 mr-2" />
                <span className="text-lg">Auténticas</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-8 h-8 mr-2" />
                <span className="text-lg">Certificadas</span>
              </div>
              <div className="flex items-center">
                <Star className="w-8 h-8 mr-2" />
                <span className="text-lg">Premium</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <Filters
            selectedCategory={selectedCategory}
            selectedRarity={selectedRarity}
            onCategoryChange={setSelectedCategory}
            onRarityChange={setSelectedRarity}
          />

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Nuestro Catálogo
            </h2>
            <span className="text-gray-600">
              {filteredRocks.length} productos encontrados
            </span>
          </div>

          {filteredRocks.length === 0 ? (
            <div className="text-center py-12">
              <Mountain className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg">
                No se encontraron rocas con los filtros seleccionados
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredRocks.map((rock) => (
                <RockCard key={rock.id} rock={rock} />
              ))}
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Mountain className="w-8 h-8 mr-2" />
              <span className="text-2xl font-bold">RockShop</span>
            </div>
            <p className="text-gray-400">
              Tu tienda de confianza para minerales y piedras preciosas
            </p>
            <p className="text-gray-400 mt-2">
              © 2024 RockShop. Todos los derechos reservados.
            </p>
          </div>
        </footer>

        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default Index;