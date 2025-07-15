export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  color: string;
  description: string;
  sizes: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, size: string, quantity?: number) => void;
  removeFromCart: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}