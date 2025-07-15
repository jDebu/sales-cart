import React from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, Plus, Minus, Trash2, CreditCard } from 'lucide-react';

interface CartSidebarProps {
  children: React.ReactNode;
}

export const CartSidebar: React.FC<CartSidebarProps> = ({ children }) => {
  const { items, updateQuantity, removeFromCart, clearCart, getTotalPrice, getTotalItems } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="w-96 bg-background border-border overflow-y-auto">
        <SheetHeader className="pb-4">
          <SheetTitle className="flex items-center justify-between text-foreground">
            <span className="flex items-center">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Carrito de Compras
            </span>
            <Badge className="bg-primary text-primary-foreground">
              {getTotalItems()}
            </Badge>
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-lg font-medium text-muted-foreground">Tu carrito está vacío</p>
            <p className="text-sm text-muted-foreground mt-2">¡Agrega algunos polos increíbles!</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {items.map((item, index) => (
                <div key={`${item.product.id}-${item.size}`} className="bg-card rounded-lg p-4 shadow-card">
                  <div className="flex items-start space-x-3">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-card-foreground truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Talla: {item.size} • Color: {item.product.color}
                      </p>
                      <p className="text-lg font-bold text-primary">
                        ${item.product.price}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 border-border hover:bg-accent"
                        onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="font-medium text-foreground w-8 text-center">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 border-border hover:bg-accent"
                        onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive hover:bg-destructive/10"
                      onClick={() => removeFromCart(item.product.id, item.size)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="text-right mt-2">
                    <p className="font-semibold text-foreground">
                      Subtotal: ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Separator className="bg-border" />

            <div className="space-y-4">
              <div className="bg-gradient-primary/10 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-foreground">Total:</span>
                  <span className="text-2xl font-bold text-primary">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Button 
                  className="w-full bg-gradient-primary hover:bg-gradient-secondary text-primary-foreground font-semibold py-6 rounded-xl shadow-glow transition-all duration-300"
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  Proceder al Pago
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full border-border hover:bg-destructive/10 hover:text-destructive"
                  onClick={clearCart}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Vaciar Carrito
                </Button>
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};