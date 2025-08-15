export interface Rock {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  origin: string;
  hardness: number;
  rarity: 'común' | 'poco común' | 'raro' | 'muy raro';
  inStock: boolean;
}

export interface CartItem extends Rock {
  quantity: number;
}