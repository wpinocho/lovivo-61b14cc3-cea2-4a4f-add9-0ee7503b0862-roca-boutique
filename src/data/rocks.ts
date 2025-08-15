import { Rock } from '../types/rock';

export const rocks: Rock[] = [
  {
    id: '1',
    name: 'Amatista',
    price: 25.99,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
    description: 'Hermosa amatista violeta con cristales naturales. Perfecta para coleccionistas y decoración.',
    category: 'Cuarzo',
    origin: 'Brasil',
    hardness: 7,
    rarity: 'común',
    inStock: true
  },
  {
    id: '2',
    name: 'Cuarzo Rosa',
    price: 18.50,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
    description: 'Cuarzo rosa natural, conocido como la piedra del amor. Ideal para meditación.',
    category: 'Cuarzo',
    origin: 'Madagascar',
    hardness: 7,
    rarity: 'común',
    inStock: true
  },
  {
    id: '3',
    name: 'Pirita',
    price: 32.00,
    image: 'https://images.unsplash.com/photo-1602524206684-5d6e0ba3cb5d?w=400&h=300&fit=crop',
    description: 'Pirita dorada brillante, también conocida como "oro de los tontos". Excelente espécimen.',
    category: 'Sulfuro',
    origin: 'Perú',
    hardness: 6.5,
    rarity: 'poco común',
    inStock: true
  },
  {
    id: '4',
    name: 'Obsidiana Negra',
    price: 15.75,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    description: 'Obsidiana volcánica negra pulida. Piedra de protección y claridad mental.',
    category: 'Volcánica',
    origin: 'México',
    hardness: 5.5,
    rarity: 'común',
    inStock: true
  },
  {
    id: '5',
    name: 'Malaquita',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop',
    description: 'Malaquita verde con patrones únicos. Piedra de transformación y sanación.',
    category: 'Carbonato',
    origin: 'República Democrática del Congo',
    hardness: 4,
    rarity: 'raro',
    inStock: true
  },
  {
    id: '6',
    name: 'Lapislázuli',
    price: 38.25,
    image: 'https://images.unsplash.com/photo-1602524206684-5d6e0ba3cb5d?w=400&h=300&fit=crop',
    description: 'Lapislázuli azul profundo con vetas doradas de pirita. Piedra de sabiduría.',
    category: 'Metamórfica',
    origin: 'Afganistán',
    hardness: 5.5,
    rarity: 'poco común',
    inStock: false
  },
  {
    id: '7',
    name: 'Turmalina Negra',
    price: 28.90,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
    description: 'Turmalina negra natural. Excelente para protección energética y conexión a tierra.',
    category: 'Silicato',
    origin: 'Brasil',
    hardness: 7.5,
    rarity: 'poco común',
    inStock: true
  },
  {
    id: '8',
    name: 'Fluorita Arcoíris',
    price: 52.00,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
    description: 'Fluorita con múltiples colores en un solo cristal. Espécimen muy raro y hermoso.',
    category: 'Haluro',
    origin: 'China',
    hardness: 4,
    rarity: 'muy raro',
    inStock: true
  }
];