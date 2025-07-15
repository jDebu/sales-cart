import { Product } from '@/types/product';
import poloNavy from '@/assets/polo-navy.jpg';
import poloRed from '@/assets/polo-red.jpg';
import poloWhite from '@/assets/polo-white.jpg';
import poloBlack from '@/assets/polo-black.jpg';
import poloGreen from '@/assets/polo-green.jpg';
import poloYellow from '@/assets/polo-yellow.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Polo Clásico Azul Marino',
    price: 79.99,
    image: poloNavy,
    color: 'Azul Marino',
    description: 'Polo clásico de alta calidad en azul marino. Perfecto para cualquier ocasión casual o formal.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: '2',
    name: 'Polo Deportivo Rojo',
    price: 89.99,
    image: poloRed,
    color: 'Rojo',
    description: 'Polo deportivo vibrante en color rojo. Ideal para actividades al aire libre y eventos casuales.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: '3',
    name: 'Polo Elegante Blanco',
    price: 74.99,
    image: poloWhite,
    color: 'Blanco',
    description: 'Polo elegante en blanco puro. Un básico indispensable para tu guardarropa.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: '4',
    name: 'Polo Premium Negro',
    price: 94.99,
    image: poloBlack,
    color: 'Negro',
    description: 'Polo premium en negro elegante. Sofisticación y estilo en una sola prenda.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: '5',
    name: 'Polo Fresh Verde',
    price: 84.99,
    image: poloGreen,
    color: 'Verde',
    description: 'Polo fresco en verde natural. Perfecto para un look moderno y relajado.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: '6',
    name: 'Polo Vibrant Amarillo',
    price: 87.99,
    image: poloYellow,
    color: 'Amarillo',
    description: 'Polo vibrante en amarillo llamativo. Destaca con este color lleno de energía.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  }
];