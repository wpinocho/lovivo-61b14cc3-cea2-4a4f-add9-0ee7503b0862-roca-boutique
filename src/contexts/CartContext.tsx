import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, Rock } from '../types/rock';
import { toast } from 'sonner';

interface CartContextType {
  items: CartItem[];
  addToCart: (rock: Rock) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (rock: Rock) => {
    console.log('Adding to cart:', rock.name);
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === rock.id);
      if (existingItem) {
        toast.success(`Cantidad actualizada: ${rock.name}`);
        return prevItems.map(item =>
          item.id === rock.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        toast.success(`Agregado al carrito: ${rock.name}`);
        return [...prevItems, { ...rock, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: string) => {
    console.log('Removing from cart:', id);
    setItems(prevItems => {
      const item = prevItems.find(item => item.id === id);
      if (item) {
        toast.success(`Removido del carrito: ${item.name}`);
      }
      return prevItems.filter(item => item.id !== id);
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    console.log('Updating quantity:', id, quantity);
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    console.log('Clearing cart');
    setItems([]);
    toast.success('Carrito vaciado');
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalPrice,
      getTotalItems
    }}>
      {children}
    </CartContext.Provider>
  );
};