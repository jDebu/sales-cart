import React from 'react';
import { useCart } from '@/contexts/CartContext';
import { CartSidebar } from './CartSidebar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Store, Search, User } from 'lucide-react';

export const Header: React.FC = () => {
  const { getTotalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-primary rounded-lg p-2">
              <Store className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              PoloStore
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Inicio
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Catálogo
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Ofertas
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Contacto
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <User className="h-5 w-5" />
            </Button>

            <CartSidebar>
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative text-foreground hover:text-primary"
              >
                <ShoppingCart className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <Badge 
                    className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-secondary text-secondary-foreground text-xs flex items-center justify-center p-0"
                  >
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </CartSidebar>
          </div>
        </div>
      </div>
    </header>
  );
};