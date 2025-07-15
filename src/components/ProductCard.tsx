import React, { useState } from 'react';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star, Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      return;
    }
    addToCart(product, selectedSize);
    setSelectedSize('');
  };

  return (
    <Card className="group relative overflow-hidden bg-card shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border-0">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-white/80 hover:bg-white text-foreground rounded-full"
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
        </Button>
        <Badge 
          className="absolute top-4 left-4 bg-gradient-primary text-primary-foreground border-0"
        >
          {product.color}
        </Badge>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold text-card-foreground group-hover:text-primary transition-colors">
            {product.name}
          </CardTitle>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-warning text-warning" />
            ))}
          </div>
        </div>
        <CardDescription className="text-muted-foreground">
          {product.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="text-3xl font-bold text-primary">
          ${product.price}
        </div>
        
        <Select value={selectedSize} onValueChange={setSelectedSize}>
          <SelectTrigger className="w-full border-border focus:ring-primary">
            <SelectValue placeholder="Selecciona una talla" />
          </SelectTrigger>
          <SelectContent className="bg-popover border-border">
            {product.sizes.map(size => (
              <SelectItem key={size} value={size} className="hover:bg-accent">
                Talla {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={handleAddToCart}
          disabled={!selectedSize}
          className="w-full bg-gradient-primary hover:bg-gradient-secondary text-primary-foreground font-semibold py-6 rounded-xl shadow-glow transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Agregar al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
};